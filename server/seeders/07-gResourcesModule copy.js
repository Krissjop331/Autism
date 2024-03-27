let title1 = "resources1";
let title2 = "resources2";
let title3 = "resources3";
let title4 = "resources4";
let title5 = "resources5";
let title6 = "resources6";


module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('resources', [
            {
                title: "Resources 1 URL",
                slug: title1.replace(/\s+/g, '-').toLowerCase(),
                url: 'stories/images/forum',
                file_patch: '' || null,
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 4,
                module_id: 1
            },
            {
                title: "Resources 2 File",
                slug: title2.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/files/resources/',
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 1,
                module_id: 1
            },
            {
                title: "Resources 3 Image",
                slug: title3.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 2,
                module_id: 1
            },
            {
                title: "Resources 4 Link",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: 'http://youtube/223/',
                file_patch: '',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 3,
                module_id: 1
            },
            {
                title: "Resources 5 Video",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/video',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 5,
                module_id: 1
            },

            // MODULE 2
            {
                title: "Resources 1 URL",
                slug: title1.replace(/\s+/g, '-').toLowerCase(),
                url: 'stories/images/forum',
                file_patch: '' || null,
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 4,
                module_id: 2
            },
            {
                title: "Resources 2 File",
                slug: title2.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/files/resources/',
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 1,
                module_id: 2
            },
            {
                title: "Resources 3 Image",
                slug: title3.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 2,
                module_id: 2
            },
            {
                title: "Resources 4 Link",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: 'http://youtube/223/',
                file_patch: '',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 3,
                module_id: 2
            },
            {
                title: "Resources 5 Video",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/video',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 5,
                module_id: 2
            },

            // MODULE 3
            {
                title: "Resources 1 URL",
                slug: title1.replace(/\s+/g, '-').toLowerCase(),
                url: 'stories/images/forum',
                file_patch: '' || null,
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 4,
                module_id: 3
            },
            {
                title: "Resources 2 File",
                slug: title2.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/files/resources/',
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 1,
                module_id: 3
            },
            {
                title: "Resources 3 Image",
                slug: title3.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 2,
                module_id: 3
            },
            {
                title: "Resources 4 Link",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: 'http://youtube/223/',
                file_patch: '',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 3,
                module_id: 3
            },
            {
                title: "Resources 5 Video",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/video',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 5,
                module_id: 3
            },

            // MODULE 4
            {
                title: "Resources 1 URL",
                slug: title1.replace(/\s+/g, '-').toLowerCase(),
                url: 'stories/images/forum',
                file_patch: '' || null,
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 4,
                module_id: 4
            },
            {
                title: "Resources 2 File",
                slug: title2.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/files/resources/',
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 1,
                module_id: 4
            },
            {
                title: "Resources 3 Image",
                slug: title3.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 2,
                module_id: 4
            },
            {
                title: "Resources 4 Link",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: 'http://youtube/223/',
                file_patch: '',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 3,
                module_id: 4
            },
            {
                title: "Resources 5 Video",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/video',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 5,
                module_id: 4
            },

            // MODULE 5
            {
                title: "Resources 1 URL",
                slug: title1.replace(/\s+/g, '-').toLowerCase(),
                url: 'stories/images/forum',
                file_patch: '' || null,
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 4,
                module_id: 5
            },
            {
                title: "Resources 2 File",
                slug: title2.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/files/resources/',
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 1,
                module_id: 5
            },
            {
                title: "Resources 3 Image",
                slug: title3.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 2,
                module_id: 5
            },
            {
                title: "Resources 4 Link",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: 'http://youtube/223/',
                file_patch: '',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 3,
                module_id: 5
            },
            {
                title: "Resources 5 Video",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/video',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 5,
                module_id: 5
            },

            // MODULE 6
            {
                title: "Resources 1 URL",
                slug: title1.replace(/\s+/g, '-').toLowerCase(),
                url: 'stories/images/forum',
                file_patch: '' || null,
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 4,
                module_id: 6
            },
            {
                title: "Resources 2 File",
                slug: title2.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/files/resources/',
                description: "Description 1",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 1,
                module_id: 6
            },
            {
                title: "Resources 3 Image",
                slug: title3.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 2,
                module_id: 6
            },
            {
                title: "Resources 4 Link",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: 'http://youtube/223/',
                file_patch: '',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 3,
                module_id: 6
            },
            {
                title: "Resources 5 Video",
                slug: title4.replace(/\s+/g, '-').toLowerCase(),
                url: '',
                file_patch: 'stories/images/resources/video',
                description: "Description 3",
                createdAt: new Date(),
                updatedAt: new Date(), 
                type_id: 5,
                module_id: 6
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('resources', null, {});
    }
};