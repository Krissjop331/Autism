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
const Topics = db.Topics;
const CommentTopics = db.CommentTopics;
const CommentTMany = db.CommentTMany;
const Role = db.Role;


class TopicsController {

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
            
            const topics = await Topics.findAll({
                where: where,
                order: order,
                include: [{model: User}]
            });

            for (const topic of topics) {
                const comments = await CommentTMany.findAll({
                    where: { topics_id: topic.id },
                    include: [{model: CommentTopics}]
                });
                topic.comments = comments;
            }

            return res.status(200).json({ message: "Темы и комментарии получены", topics });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Произошла ошибка", error: error.message });
        }
    }

    async getOne(req, res) {
        const {id} = req.params || req.body;
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные не переданы");
        
        const topics = await Topics.findOne({where: {id: id}, include: [{model: User}]});
        if(!topics) return CustomError.handleNotFound(res, "Тем пока нет");

        const comments = await CommentTMany.findAll({where: {topics_id: topics.id},  include: [{model: Topics}, {model: CommentTopics}]});
        
        return res.status(200).json({message: "Тема получена", topics, comments, status: 201});
    }

    async create(req, res) {
        const {title, description} = req.body || req.params;
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные не переданы");
        let user;
        let token;
        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1];
            const { id } = jwt.verify(token, secret);
            user = await User.findOne({where: {id: id}, include: [{model: Role}]});
            if(!user) return CustomError.handleNotFound(res, "Пользователь не найден");
        } else {
            return res.status(403).json({message: "Вы не авторизованы"});
        }

        const topics = await Topics.create({
            title,
            slug: title.replace(/\s+/g, '-').toLowerCase(),
            description,
            author_id: user.id,
            status: "success",
            looked: 0,
            likes: 0,
            dislikes: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        if(!topics) return res.status(500).json({message:"Не удалось создать тему", status: 500, topics})

        return res.status(200).json({message: "Тема успешно создана", topics, status: 201});    
    }

    async update(req, res) {
        const {id, title, description, date, looked} = req.params || req.body;
        let user;
        let token;
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные не переданы");
        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1];
            const { id } = jwt.verify(token, secret);
            user = await User.findOne({where: {id: id}, include: [{model: Role}]});
            if(!user) return CustomError.handleNotFound(res, "Пользователь не найден");
        } else {
            return res.status(403).json({message: "Вы не авторизованы"});
        }
        let topics = await Topics.findOne({where: {id: id, author_id: user.id}, include: [{model: User}]});
        if(!topics) return res.status(403).json({message: "Вы не являетесь автором данной статьи"});

        topics.title = title || topics.title;
        topics.slug = title.replace(/\s+/g, '-').toLowerCase() || topics.slug;
        topics.description = description || topics.description;
        topics.updatedAt = date || topics.updatedAt;
        topics.looked = looked == true ? topics.looked++ : topics.looked
        await topics.save();

        return res.status(200).json({message: "Тема успешно обновлена", topics, status: 201});
    }

    async delete(req, res) {
        const {id} = req.params || req.body;
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные некорректны");

        const topics = await Topics.findByPk(id);
        if(!topics) return CustomError.handleNotFound(res, "Тема не найдена");
        const comments = await CommentTMany.findAll({where: {topics_id: topics.id}});
        for(let comment of comments) {
            await comment.destroy();
        }
        await topics.destroy();

        return res.status(200).json({message: "Тема удалена", status: 201});
    }

    
    // COMMENT
    async getAllComment(req, res) {
        const {id} = req.params || req.body;
        let where = id ? {topics_id: id} : {};
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные некорректны");

        const commentTopics = await CommentTMany.findAll({where, include: [{model: User,}, {model: CommentTopics}]});
        if(!commentTopics || commentTopics <= 0) return CustomError.handleNotFound(res, "Комментарии не найдены");
        
        return res.status(200).json({message: "Комментарии получены", commentTopics, status: 201});
    }

    async getOneComment(req, res) {
        const {id, comment_id} = req.params || req.body;
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные некорректны");

        const commentTopics = await CommentTMany.findOne({where: {topics_id: id, comment_id}, include: [{model: User,}, {model: CommentTopics}]});
        if(!commentTopics) return CustomError.handleNotFound(res, "Комментарии не найдены");

        return res.status(200).json({message: "Комментарий получен", commentTopics, status: 201})
    }

    async createComment(req, res) {
        const {id, content, file_path} = req.params || req.body;
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные некорректны");
        
        let user;
        let token;
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные не переданы");
        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1];
            const { id } = jwt.verify(token, secret);
            user = await User.findOne({where: {id: id}, include: [{model: Role}]});
            if(!user) return CustomError.handleNotFound(res, "Пользователь не найден");
        } else {
            return res.status(403).json({message: "Вы не авторизованы"});
        }
        const commentTopicsAll = await CommentTopics.findAll();

        let commentTopics = await CommentTopics.create({
            content: content,
            file_path: file_path || '',
            likes: 0,
            dislikes: 0,
            author_id: user.id
        })
        if(commentTopics) return res.status(403).json({message: "Не удалось создать комментарий", commentTopics});

        commentTopics = await CommentTMany.create({
            comment_topics_id: commentTopicsAll.length++,
            topics_id: id
        })

        commentTopics = await CommentTMany.findByPk(commentTopics.id, {
            include: [{model: Topics}, {model: CommentTopics}]
        })
        if(commentTopics) return res.status(403).json({message: "Не удалось создать комментарий", commentTopics});

        return res.status(200).json({message: "Комментарий создан", commentTopics});
    }


    async deleteComment(req, res) {
        const {id, comment_id} = req.params || req.body;
        if(req.params || req.body) return CustomError.handleBadRequest(res, "Данные некорректны");
        
        let commentTopics = await CommentTopics.findOne({where: {comment_id}});
        if(!commentTopics) return CustomError.handleNotFound(res, "Комментарий не найден");
        commentTopics = await CommentTMany.findOne({where: {topics_id: id, comment_topics_id: comment_id}});
        await commentTopics.destroy();

        return res.status(200).json({message: "Комментарий удален", status: 201});
    }
}

module.exports = new TopicsController();