
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('comment', [{
                text: "Comment Course 1",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment Course 2",
                createdAt: new Date(),  
                updatedAt: new Date()
            },

            {
                text: "Comment Course 3",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment Course 4",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment Course 5",
                createdAt: new Date(),  
                updatedAt: new Date()
            },

            {
                text: "Comment Forum 1",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment Forum 2",
                createdAt: new Date(),  
                updatedAt: new Date()
            },

            {
                text: "Comment Forum 3",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment Forum 4",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                text: "Comment Forum 5",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('comment', null, {});
    }
};