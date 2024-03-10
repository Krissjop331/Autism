
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('forum_link', [{
            link_url: "https://www.autism.org.uk/advice-and-guidance/what-is-autism"
            },
            {
                link_url: "https://www.autismspeaks.org/what-autism"
            },
            {
                link_url: "https://www.autismspeaks.org/what-autism"
            },
            {
                link_url: "https://www.autismspeaks.org/what-autism"
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('forum_link', null, {});
    }
};