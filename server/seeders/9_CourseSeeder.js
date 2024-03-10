
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('course', [{
                title: "Title Course 1",
                Description: "Description Course 1",
                author: "admin admin",
                look: 0,
                url_content: "none",
                image: "none",
                course_comment_id: 1,
                user_id: 1,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Course 2",
                Description: "Description Course 2",
                author: "admin admin",
                look: 23,
                url_content: "none",
                image: "none",
                course_comment_id: 2,
                user_id: 1,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Course 3",
                Description: "Description Course 3",
                author: "user user",
                look: 55,
                url_content: "none",
                image: "none",
                course_comment_id: 3,
                user_id: 2,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Title Course 4",
                Description: "Description Course 4",
                author: "user user",
                look: 102,
                url_content: "none",
                image: "none",
                course_comment_id: 4,
                user_id: 2,
                createdAt: new Date(),  
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('course', null, {});
    }
};