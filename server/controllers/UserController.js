const db = require('../models/index');

const User = db.User;

class UserController {

    async getUsers(req, res) {
        // try {
        //     const users = await User.findAll();

        //     return users.length > 0 ?
        //         res.json(users) :
        //         res.status(400).json({ message: `Пользователей нет`, value: 0, status: 201 });
        // } catch (error) {
        //     console.error(`Error retrieving users: ${error.message}`);
        //     res.status(500).json({ message: "Ошибка на сервере", status: 500 });
        // }
        return res.json({message: "hay"});
    }

}

module.exports = new UserController();