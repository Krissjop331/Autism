
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('resources_type', [
            {
                type: "file",
            },
            {
                type: "image",
            },
            {
                type: "link",
            },
            {
                type: "url",
            },
            {
                type: "video",
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('resources_type', null, {});
    }
};