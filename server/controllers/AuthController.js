const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const config = require(__dirname + '../config/config.json');
const secret = config.secretKey || 'JWTKEY';
const cookie = require("cookie-parser");

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


}

module.exports = new AuthController();