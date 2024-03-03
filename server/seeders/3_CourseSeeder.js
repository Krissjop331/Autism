
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
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment 2",
                createdAt: new Date(),  
                updatedAt: new Date()
            },

            {
                text: "Comment 3",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment 4",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment 5",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('course', null, {});
    }
};