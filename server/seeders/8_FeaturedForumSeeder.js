
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('featured_forum', [{
                user_id: 1,
                forum_id: 2
            },
            {
                user_id: 1,
                forum_id: 1
            },
            {
                user_id: 2,
                forum_id: 3
            },
            {
                user_id: 2,
                forum_id: 4
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('featured_forum', null, {});
    }
};