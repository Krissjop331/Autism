const bcrypt = require('bcryptjs');

const adminHashPassword = bcrypt.hash("admin1234", 10);
const userHashPassword = bcrypt.hash("user1234", 10);

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
                first_name: 'admin',
                last_name: 'admin',
                email: 'admin@mail.ru',
                password: (await adminHashPassword).toString(),
                role_id: 1,
                blocked: false,
                course_id: 1,
                featured_course_id: 1,
                featured_forum_id: 1,
                forum_id: 1,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                first_name: 'user',
                last_name: 'user',
                email: 'user@mail.ru',
                password: (await adminHashPassword).toString(),
                role_id: 2,
                blocked: false,
                course_id: 2,
                featured_course_id: 1,
                featured_forum_id: 1,
                forum_id: 2,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};