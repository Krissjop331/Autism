
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('resources_module', [
            {
                module: "Для родителей",
            },
            {
                module: "Для ребенка",
            },
            {
                module: "Для учителей",
            },
            {
                module: "Для пользователя",
            },
            {
                module: "Для студента",
            },
            {
                module: "Для мед. специалиста",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('resources_module', null, {});
    }
};