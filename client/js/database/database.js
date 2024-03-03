function formatDate() {
    const currentDate = new Date();

    // Получаем день, месяц и год
    const day = currentDate.getDate();
    // Месяц начинается с 0, поэтому добавляем 1
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    // Форматируем дату
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
}

export const learnDataBase = [{
        id: 1,
        title: 'TitleLearn 1',
        description: "Description 1",
        date: formatDate(),
        image: 'img2.png',
    },
    {
        id: 2,
        title: 'TitleLearn 2',
        description: "Description 2",
        date: formatDate(),
        image: 'img2.png',
    },
    {
        id: 3,
        title: 'TitleLearn 3',
        description: "Description 3",
        date: formatDate(),
        image: 'img2.png',
    },
    {
        id: 4,
        title: 'TitleLearn 4',
        description: "Description 4",
        date: formatDate(),
        image: 'img2.png',
    },
    {
        id: 5,
        title: 'TitleLearn 5',
        description: "Description 5",
        date: formatDate(),
        image: 'img2.png',
    },
]

export const newsDataBase = [{
        id: 1,
        title: 'TitleNews 1',
        description: "Description 1",
        date: formatDate(),
        image: 'learn_img.png',
    },
    {
        id: 2,
        title: 'TitleNews 2',
        description: "Description 2",
        date: formatDate(),
        image: 'learn_img.png',
    },
    {
        id: 3,
        title: 'TitleNews 3',
        description: "Description 3",
        date: formatDate(),
        image: 'learn_img.png',
    },
    {
        id: 4,
        title: 'TitleNews 4',
        description: "Description 4",
        date: formatDate(),
        image: 'learn_img.png',
    },
    {
        id: 5,
        title: 'TitleNews 5',
        description: "Description 5",
        date: formatDate(),
        image: 'learn_img.png',
    },
]

export const users = [{
        id: 1,
        name: 'User',
        email: 'user@mail.ru',
        phone: '11111111111',
        password: 'user1234',
        image: 'default',
        role: 'user',
        favorites: {
            learn: [1, 3], // Идентификаторы избранных уроков
            news: [2, 4], // Идентификаторы избранных новостей
        },
    },
    {
        id: 2,
        name: 'Admin',
        email: 'admin@mail.ru',
        phone: '22222222222',
        password: 'admin1234',
        image: 'default',
        role: 'admin',
        favorites: {
            learn: [1, 3], // Идентификаторы избранных уроков
            news: [2, 4], // Идентификаторы избранных новостей
        },
    },
];

export const favoriteLearnDataBase = [{
        id: 1,
        title: 'FavoriteLearn 1',
        description: "Favorite Description 1",
        date: formatDate(),
        image: 'img2.png',
    },
    {
        id: 3,
        title: 'FavoriteLearn 3',
        description: "Favorite Description 3",
        date: formatDate(),
        image: 'img2.png',
    },
];

export const favoriteNewsDataBase = [{
        id: 2,
        title: 'FavoriteNews 2',
        description: "Favorite Description 2",
        date: formatDate(),
        image: 'img5.jpg',
    },
    {
        id: 4,
        title: 'FavoriteNews 4',
        description: "Favorite Description 4",
        date: formatDate(),
        image: 'img5.jpg',
    },
];