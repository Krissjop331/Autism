const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const config = require('../../config/config.json');
const secret = config.secretKey || 'JWTKEY';
const cookie = require("cookie-parser");
const moment = require('moment');

const CustomError = require('../../Errors/errors');
const db = require("../../models/index");
const User = db.User;
const Role = db.Role;
const DoctorUser = db.DoctorUser;
const ParentsUsers = db.ParentsUsers;


class UserController {

    async getAll(req, res) {
        try {
            const users = await User.findAll({
                include: [
                    {
                        model: Role
                    }
                ]   
            });
            return users.length > 0 ? 
                res.status(201).json({status: 201, message: "Пользователи получены", users: users}) :
                CustomError.handleNotFound(res, "Пользователей нет", 404);
        } catch (e) {
            console.error(`Ошибка извеления ролей: ${e.message}`);
            CustomError.handleInternalServerError(res, "Ошибка на сервере", 500);
        }
    }

    async getId(req, res) {
        try{
            const {id} = req.params || req.body || req.query;

            const user = await User.findOne({where: {id}, include: [{model: Role}]})
            if(!user) {
                return CustomError.handleNotFound(res, "Пользователь не найден", 404);
            }

            return res.status(200).json({message: "Пользователь найден", users: user, status: 200});
        } catch (e) {
            console.error(`Ошибка извеления ролей: ${e.message}`);
            CustomError.handleInternalServerError(res, "Ошибка на сервере", 500);
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params || req.body || req.query;
            if(!req.body) {
                return CustomError.handleNotFound(res, "Данных нет", 400);
            }

                
            const authToken = req.headers.authorization.split(' ')[1];
            const token = jwt.verify(authToken, secret);
            const userVerify = await User.findOne({where: {id: token.id}})

            const user = await User.findOne({where: {id}, include: [{model: Role}]});
            if(!user) {
                return CustomError.handleNotFound(res, "Пользователь не найден", 404);
            }
            if(user.id !== userVerify.id) {
                return res.status(403).json({message: "Вы не являетесь этим пользователем", status: 403})
            }

            user.login = req.body.login || user.login;
            user.email = req.body.email || user.email;
            user.phone_number = req.body.phone || user.phone_number;
            await user.save();

            if(req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
                await user.save();
            } else if(req.file) {
                user.avatar_url = req.file.path || req.file.image.path || '';
                await user.save();
            }

            return res.status(200).json({message: "Данные обновлены", user, status: 201})
        } catch (error) {
            console.error(`Ошибка извеления ролей: ${e.message}`);
            CustomError.handleInternalServerError(res, "Ошибка на сервере", 500);
        }
    }

    // Все поля пользователя может редактировать лишь админ
    async updateAdmin(req, res) {
        try {
            let id;
            if (req.params && req.params.id) {
                id = req.params.id;
            } else if (req.body && req.body.id) {
                id = req.body.id;
            } else if (req.query && req.query.id) {
                id = req.query.id;
            } else {
                return CustomError.handleNotFound(res, "ID пользователя не указан", 400);
            }
        
            if(!req.body) {
                return CustomError.handleNotFound(res, "Данных нет", 400);
            }
        
            const user = await User.findOne({where: {id}, include: [{model: Role}]});
            if(!user) {
                return CustomError.handleNotFound(res, "Пользователь не найден", 404);
            }
        
            user.first_name = req.body.first_name || user.first_name;
            user.last_name = req.body.last_name || user.last_name;
            user.email = req.body.email || user.email;
            user.login = req.body.login || user.login;
            user.avatar_url = req.file?.path || ''; // Добавил проверку на наличие файла в body
            user.phone_number = req.body.phone || user.phone_number;
            user.status = req.body.status || user.status;
            user.blocked = req.body.blocked || user.blocked;
            user.role_id = req.body.role_id || user.role_id;
            await user.save();
    
            if(req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
                await user.save();
            } else if(req.file) {
                user.avatar_url = req.file.path || req.file.image.path || '';
                await user.save();
            }
        
            return res.status(200).json({message: "Данные обновлены", user, id: userVerify.i, user_Id: user.id, status: 201})
        } catch (error) {
            console.error(`Ошибка извеления ролей: ${e.message}`);
            CustomError.handleInternalServerError(res, "Ошибка на сервере", 500);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params || req.body;
            if(!id) return CustomError.handleInvalidData(res, "Не передан id пользователя");

            const user = await User.findByPk(id);
            if (!user) {
                return CustomError.handleNotFound(res, "Пользователь не найден", 404);
            }

            await user.destroy();
            return res.status(200).json({ message: "Пользователь успешно удалена", status: 201 })
        } catch (error) {
            console.error(`Ошибка извеления ролей: ${e.message}`);
            CustomError.handleInternalServerError(res, "Ошибка на сервере", 500);
        }
    }


    async addLike(req, res) {
        const {id} = req.params || req.body;
        if(!id) return CustomError.handleInvalidData(res, "Не передан id пользователя");

        const user = await User.findByPk(id);
        if (!user) {
            return CustomError.handleNotFound(res, "Пользователь не найден", 404);
        }
    }

    async removeLike(req, res) {
        const {id} = req.params || req.body;
        if(!id) return CustomError.handleInvalidData(res, "Не передан id пользователя");

        const user = await User.findByPk(id);
        if (!user) {
            return CustomError.handleNotFound(res, "Пользователь не найден", 404);
        }
    }

    async addDislike(req, res) {
        const {id} = req.params || req.body;
        if(!id) return CustomError.handleInvalidData(res, "Не передан id пользователя");

        const user = await User.findByPk(id);
        if (!user) {
            return CustomError.handleNotFound(res, "Пользователь не найден", 404);
        }
    }

    async removeDislike(req, res) {
        const {id} = req.params || req.body;
        if(!id) return CustomError.handleInvalidData(res, "Не передан id пользователя");

        const user = await User.findByPk(id);
        if (!user) {
            return CustomError.handleNotFound(res, "Пользователь не найден", 404);
        }

        user.dislikes = user.dislikes--
    }

}

module.exports = new UserController();