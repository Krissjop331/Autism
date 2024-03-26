
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('tags', [
            {
                title: "Медицина",
            },
            {
                title: "Общество",
            },
            {
                title: "Настроение",
            },
            {
                title: "Сегодня",
            },
            {
                title: "Будни",
            },
            {
                title: "Аутизм",
            },
            {
                title: "Курсы",
            },
            {
                title: "Общение",
            },
            {
                title: "Саморазвитие",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('tags', null, {});
    }
};