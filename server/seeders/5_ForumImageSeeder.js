
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('forum_image', [{
                image_url: "https://avatars.mds.yandex.net/i?id=7a26fff7bb3755b5f91c33958c092f59d5f38670-6211293-images-thumbs&n=13"
            },
            {
                image_url: "https://avatars.mds.yandex.net/i?id=669e6f69c2a458070f4e84c0afa009b36e9ca128-5278354-images-thumbs&n=13"
            },
            {
                image_url: "https://avatars.mds.yandex.net/i?id=1a59242860a3db51ef01105c5d6cbb26083b280d-10471668-images-thumbs&n=13"
            },
            {
                image_url: "https://avatars.mds.yandex.net/i?id=7b1587604a32eba36bfae5d10e2eb6db45eaec4c-8497019-images-thumbs&n=13"
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('forum_image', null, {});
    }
};