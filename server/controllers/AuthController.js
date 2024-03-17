const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const config = require('../config/config.json');
const secret = config.secretKey || 'JWTKEY';
const cookie = require("cookie-parser");
const moment = require('moment');

const CustomError = require('../Errors/errors');
const db = require("../models/index");
const User = db.User;
const Role = db.Role;

const generateToken = (id, roles) => {
    const payload = {
        id,
        roles
    };

    return jwt.sign(payload, secret, { expiresIn: "100h" });
}




// Написать что при подтверждении или отклонении регистрации пользователя менялась и роль по параметру или req.body
// Указывать тип изображения при отправке запроса в параметрах (http://localhost:3000/api/users?type=forum) (forum, users, posts)

class AuthController {
    async refreshTokenIfActive(req, res) {
        try {
            const authHeader = req.headers.authorization;
            if (authHeader && authHeader.startsWith("Bearer ")) {
                const token = authHeader.split(" ")[1];
                jwt.verify(token, secret, async (err, decoded) => {
                    if (!err) {
                        const user = await User.findOne({id: decoded.id});
                        const newToken = generateToken(user.id, user.role_id);
                        res.json({ token: newToken });
                    } else {
                        // Ошибка верификации токена
                        return res.status(401).json({ message: "Invalid token", status: 401 });
                    }
                });
            } else {
                return res.status(401).json({ message: "No token provided", status: 401 });
            }
        } catch (error) {
            console.error(`Error refreshing token: ${error.message}`);
            return res.status(500).json({ message: `Error refreshing token: ${error.message}`, status: 500 });
        }
    }

    async signUp(req, res) {
        const avatar_url = req.file.path;
        console.log(avatar_url);

        if (!req.body) {
            return CustomError.handleNotFound(res, "Данных нет", 400); // Изменено на статус 400
        }

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const users = await User.findAll();
        const userLength = users.length + 1;

        const userEmail = await User.findOne({where: { email: req.body.email }});
        const userLogin = await User.findOne({where: { login: req.body.login }});
        if (userEmail) {
            delete req.body.email;
            delete req.body.password;
            delete req.body.login;

            return CustomError.handleDuplicateResource(res, "Данный пользователь c таким email уже существует", 409);
        }
        if (userLogin) {
            delete req.body.email;
            delete req.body.password;
            delete req.body.login;

            return CustomError.handleDuplicateResource(res, "Данный пользователь c таким логином уже существует", 409);
        }

       
        const hashPassword = bcrypt.hashSync(req.body.password, 8);
        const role = await Role.findOne({name: "unknow"});
        const token = generateToken(userLength, role.id);
        req.headers.authorization = "Bearer" + " " + token;
        res.cookie('authorization', "Bearer" + ' ' + token, { expires: new Date(Date.now() + 60 + 60 + 1000) });

        const userCreate = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            avatar_url: avatar_url || "",
            birthday: req.body.birthday,
            phone_number: req.body.phone_number || undefined,
            password: hashPassword,
            is_active: false,
            status: 'loading',
            likes: 0,
            dislikes: 0,
            blocked: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            role_id: role.id || 1 || undefined
        })
        if(!userCreate) {
            return res.status(400).json({status: 400, message: "Пользователя не удалось создать"})
        }

        delete req.body.first_name;
        delete req.body.password;
        delete req.body.email;
        delete req.body.password;
        delete req.body.login;
        delete req.body.phone_number;
        delete req.body.birthday;

        return res.status(200).json({status: 201, message: "Пользователь успешно создан", users: userCreate, token: req.headers.authorization})
    }


    async signIn(req, res) {

    }

    async signOut(req, res) {

    }

    async confirmed(req, res) {

    }

    async isActiveUser(req, res) {

    }

    async userRoleUpdate(req, res) {

    }
}

module.exports = new AuthController();