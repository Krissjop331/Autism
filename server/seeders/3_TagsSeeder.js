
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('tags', [
            {
                title: "Медицина",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Общество",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Настроение",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Сегодня",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Будни",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Аутизм",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Курсы",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Общение",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
            {
                title: "Саморазвитие",
                createdAt: new Date(),  
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('tags', null, {});
    }
};