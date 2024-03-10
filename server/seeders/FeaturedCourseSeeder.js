
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('featured_course', [{
                user_id: 1,
                course_id: 1,
            },
            {
                user_id: 1,
                course_id: 2,
            },
            {
                user_id: 2,
                course_id: 3,
            },
            {
                user_id: 2,
                course_id: 4,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('featured_course', null, {});
    }
};