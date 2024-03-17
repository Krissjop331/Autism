
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('role', [{
                name: 'admin',
            },
            {
                name: 'user',
            },
            {
                name: "parents"
            },
            {
                name: 'doctor',
            },
            {
                name: 'children'
            },
            {
                // неопределена роль (для регистрации пользователя)
                name: 'unknow'
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('role', null, {});
    }
};