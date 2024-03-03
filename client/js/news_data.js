document.addEventListener('DOMContentLoaded', () => {
    loadForumArticles();
});

function loadForumArticles() {
    // Получаем данные статей из localStorage
    const articlesData = JSON.parse(localStorage.getItem('newsData'));
    if (!articlesData) {
        console.log('No articles data found in localStorage');
        return;
    }

    // Находим контейнер для статей на форуме
    const articlesContainer = document.querySelector('.forum .container');
    const zag = document.createElement('h2');
    zag.innerHTML = 'Forum News'
        // Очищаем существующие статьи
    articlesContainer.innerHTML = ''
    articlesContainer.appendChild(zag)

    // Для каждой статьи создаем элементы и добавляем их в контейнер
    articlesData.forEach(article => {
        articlesContainer.appendChild(createArticleElement(article));
    });
}

function createArticleElement(article) {
    // Создаем контейнер для статьи
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';

    // Добавляем изображение
    const img = document.createElement('img');
    img.src = adjustImagePath(article.image); // Функция для корректного пути к изображению
    img.alt = article.title;
    articleDiv.appendChild(img);

    // Добавляем содержимое статьи
    const contentDiv = document.createElement('div');
    contentDiv.className = 'article__content';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';

    const titleH3 = document.createElement('h3');
    titleH3.textContent = article.title;

    const dateP = document.createElement('p');
    dateP.className = 'date';
    dateP.innerHTML = `<b>Date: </b>${article.date}`;

    titleDiv.appendChild(titleH3);
    titleDiv.appendChild(dateP);

    const descP = document.createElement('p');
    descP.className = 'desc';
    let descriptionText = article.description;
    if (descriptionText.length > 50) {
        descriptionText = descriptionText.substring(0, 50) + '...';
    }
    descP.textContent = descriptionText;

    // Создаем кнопку
    const divButton = document.createElement('div');
    const button = document.createElement('button');
    button.className = 'black-button';
    button.textContent = 'Readme';

    // Добавляем обработчик событий на кнопку для перехода по URL
    button.addEventListener('click', () => {
        window.location.href = `news/${article.id}`;
    });

    divButton.appendChild(button);

    // Создаем SVG элемент
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.993 5.097A5.415 5.415 0 008.408 3.75C5.421 3.75 3 6.15 3 9.11c0 1.363.506 2.614 1.352 3.56L12 20.25l7.422-7.356.219-.23A5.313 5.313 0 0021 9.11c0-2.96-2.421-5.36-5.408-5.36-1.375 0-2.63.509-3.585 1.347L12 5.09l-.007.007zM12 7.099l.055.049.853-.846.089-.078a3.915 3.915 0 012.595-.974c2.171 0 3.908 1.74 3.908 3.86 0 .971-.361 1.857-.964 2.538l-.187.197L12 18.138 5.443 11.64A3.825 3.825 0 014.5 9.11c0-2.118 1.737-3.859 3.908-3.859.999 0 1.905.368 2.595.974l.09.078.852.846.055-.049z" fill="#080341"/>`;

    svg.addEventListener('click', () => {
        addFavourites(article);
    })

    // Добавляем SVG к divButton или к contentDiv, в зависимости от желаемого расположения
    divButton.appendChild(svg);

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(descP);
    contentDiv.appendChild(divButton);

    articleDiv.appendChild(contentDiv);



    return articleDiv;
}

function adjustImagePath(imagePath) {
    // Эта функция должна адаптировать путь к изображению в зависимости от того,
    // где находится пользователь (например, на главной странице или нет)
    const currentPage = window.location.href.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') {
        return './img/' + imagePath;
    }
    return './' + imagePath;
}

console.log(JSON.parse(localStorage.getItem('user')))

function addFavourites(article) {
    // Получаем данные пользователя
    const user = getUserData();

    // Получаем данные об избранных новостях, преобразуя их из строки в массив
    let favoriteNewsData = JSON.parse(localStorage.getItem('favoriteNewsData')) || [];

    // Добавляем новость в массив избранных
    favoriteNewsData.push(article);
    // Сохраняем обновленный массив избранных новостей обратно в localStorage в виде строки
    localStorage.setItem('favoriteNewsData', JSON.stringify(favoriteNewsData));

    // Проверяем, существует ли у пользователя список избранных новостей
    if (!user.favorites) {
        user.favorites = { news: [] };
    }

    // Добавляем ID новости в избранное пользователя
    if (!user.favorites.news.includes(article.id)) {
        user.favorites.news.push(article.id);

        // Обновляем данные пользователя
        updateUser(user);

    } else {
        console.log('This article is already in favorites.');
    }
}

function updateUser(user) {
    // Получаем текущий список пользователей из localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('user', JSON.stringify(user));

    // Находим индекс пользователя в массиве по id
    const userIndex = users.findIndex(u => u.id === user.id);

    // Если пользователь найден, обновляем его данные
    if (userIndex !== -1) {
        users[userIndex] = user;

        // Обновляем данные пользователей в localStorage
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function getUserData() {
    const users = JSON.parse(localStorage.getItem('users')) || []
    let user;
    if (localStorage.getItem('isAuth') && users.length > 0) {
        user = JSON.parse(localStorage.getItem('user'))
        return user;
    }
    return [];
}