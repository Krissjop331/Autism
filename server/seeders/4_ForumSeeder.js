
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('forum', [{
                title: "Title Forum 1",
                Description: "Description Forum 1",
                author: "admin admin",
                look: 0,
                url_content: "none",
                image: "none",
                course_comment_id: 6,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Course 2",
                Description: "Description Forum 2",
                author: "admin admin",
                look: 23,
                url_content: "none",
                image: "none",
                course_comment_id: 7,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Forum 3",
                Description: "Description Course 3",
                author: "user user",
                look: 55,
                url_content: "none",
                image: "none",
                course_comment_id: 3,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Forum 4",
                Description: "Description Course 4",
                author: "user user",
                look: 102,
                url_content: "none",
                image: "none",
                course_comment_id: 4,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('forum', null, {});
    }
};