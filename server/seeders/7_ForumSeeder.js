
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('forum', [{
                title: "Title Forum 1",
                short_description: "Short description Forum 1",
                look: 65,
                forum_comment_id: 6,
                forum_text_id: 1,
                forum_image_id: 1,
                forum_link_id: 1,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Forum 2",
                short_description: "Short description Forum 2",
                look: 12,
                forum_comment_id: 2,
                forum_text_id: 2,
                forum_image_id: 2,
                forum_link_id: 2,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Forum 3",
                short_description: "Short description Forum 3",
                look: 66,
                forum_comment_id: 4,
                forum_text_id: 3,
                forum_image_id: 3,
                forum_link_id: 3,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Forum 4",
                short_description: "Short description Forum 4",
                look: 75,
                forum_comment_id: 5,
                forum_text_id: 4,
                forum_image_id: 4,
                forum_link_id: 4,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('forum', null, {});
    }
};