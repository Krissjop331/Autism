
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
                name: "student"
            },
            {
                name: 'doctor',
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('role', null, {});
    }
};