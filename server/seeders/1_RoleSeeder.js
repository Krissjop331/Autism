
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('role', [{
                name: 'admin',
            },
            {
                name: 'user',
            },
            {
                name: 'teacher',
            },
            {
                name: "parents"
            },
            {
                name: 'doctor',
            },
            {
                name: 'children'
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('role', null, {});
    }
};