const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const config = require('../config/config.json');
const secretKeyJWT = config.secretKey || "JWTKEY"
const cookie = require('cookie-parser');

const db = require('../models/index');
const User = db.User;
const Role = db.Role;

class AuthController {

    generateToken(id, roles) {
        const payload = {
            id,
            roles
        };
        return jwt.sign(payload, secretKeyJWT, {expiresIn: "100h"});
    }
}


module.exports = new AuthController();