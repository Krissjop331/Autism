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
const Forum = db.Forum;
const FeaturedForum = db.FeaturedForum;
const Topics = db.Topics;
const Tags = db.Tags;


class ForumController {

    async getAll(req, res) {
        try {
            const { title, slug, authorId, sortBy, sortOrder } = req.query;

            let where = {};
            if (title) {
                where.title = { [Sequelize.Op.like]: `%${title}%` };
            }
            if (slug) {
                where.slug = slug;
            }
            if (authorId) {
                where.author_id = authorId;
            }

            let order = [['createdAt', 'ASC']];
            if (sortBy) {
                if (sortBy === 'likes') {
                    order = [[ 'likes', sortOrder === 'asc' ? 'ASC' : 'DESC' ]];
                } else if (sortBy === 'dislikes') {
                    order = [[ 'dislikes', sortOrder === 'asc' ? 'ASC' : 'DESC' ]];
                } else if (sortBy === 'looked') {
                    order = [[ 'looked', sortOrder === 'asc' ? 'ASC' : 'DESC' ]];
                }
            }
            
            const forum = await Forum.findAll({
                where: where,
                order: order,
                include: [{model: User}, {model: Topics}, {model: Tags}]
            });
            if(forum.length < 0 || !forum) return CustomError.handleNotFound(res, "В данный момент форумов нет")

            return res.status(200).json({ message: "Темы и комментарии получены", forum });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Произошла ошибка", error: error.message });
        }
    }

    async getOne(req, res) {
        const {id} = req.params || req.body;
        if(req.body || req.params) return CustomError.handleBadRequest(res, "Некорректно переданы данные");

        const forum = await Forum.findOne({where: {id}, include: [{model: Tags}, {model: Topics}]})
        if(!forum) return CustomError.handleNotFound(res, "Форум не найден");

        return res.status(200).json({message: "Форумы получены", forums: forum, status: 201});
    }

    async create(req, res) {
        const {title, description, author_id, tags_id} = req.params || req.body;
        if(req.body || req.params) return CustomError.handleBadRequest(res, "Данные не получены")
    }

    async update(req, res) {

    }

    async delete(req, res) {

    }

    async featured(req, res) {

    }

}

module.exports = new ForumController();