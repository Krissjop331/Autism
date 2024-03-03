document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, авторизован ли пользователь
    if (isUserAuthenticated()) {
        // Получаем данные пользователя
        const user = getUserData();

        // Загружаем избранные новости пользователя
        loadUserFavoriteNews(user);

    } else {
        // Скрываем слайдер, если пользователь не авторизован
        hideSlider();
    }
});

function isUserAuthenticated() {
    const isAuth = localStorage.getItem('isAuth');
    return isAuth && isAuth === 'true';
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function loadUserFavoriteNews(user) {
    const favoriteNews = user.favorites.news || [];
    const slider = document.getElementById('slider_featured');
    const sliderContainer = slider.querySelector('.slider-container');
    sliderContainer.innerHTML = '';
    // Retrieve favorite news data from localStorage
    let newsFavorite = JSON.parse(localStorage.getItem('favoriteNewsData')) || [];
    // Check if newsFavorite is an array
    if (!Array.isArray(newsFavorite)) {
        newsFavorite = [];
    }

    // Create and append slides for each favorite news
    if (favoriteNews.length > 0 && newsFavorite.length > 0) {
        console.log(favoriteNews.length);
        favoriteNews.forEach(newsId => {
            // Find the news in newsFavorite by id
            const news = newsFavorite.find(item => item.id == newsId);

            // Check if the news is found before creating the slide
            if (news) {
                sliderContainer.appendChild(createNewsSlide([news]));
            }
        });
    } else {
        // Display a message when there are no favorite news entries
        const p = document.createElement('p');
        p.innerHTML = 'The list is empty';
        p.style.marginBottom = '50px';
        sliderContainer.appendChild(p);
    }

    showSlider();
}

function createNewsSlide(news) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    console.log(news);

    if (news.length > 0) {
        const currentPage = window.location.href.split('/').pop();

        // Создаем ссылку
        const link = document.createElement('a');
        link.href = `news/${news[0].id}`; // Предполагается, что у новости есть свойство id

        // Создаем изображение
        const img = document.createElement('img');
        if (currentPage === '') {
            img.src = '../img/' + news[0].image;
        }
        img.alt = news[0].title;

        // Создаем SVG и добавляем его в ссылку
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '24');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M10 11v6M14 11v6M4 7h16M6 7h12v11a3 3 0 01-3 3H9a3 3 0 01-3-3V7zM9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        svg.setAttribute('class', 'delete-svg');
        svg.appendChild(path);
        svg.style.position = 'absolute';
        svg.style.left = '10px'
        svg.style.top = '10px'

        svg.addEventListener('click', (e) => {
            e.preventDefault();
            // Удаляем новость из избранных
            deleteNewsFromFavorites(news[0].id);
            // Удаляем слайд из слайдера
            slide.remove();
        });

        // Добавляем изображение и SVG в ссылку
        link.style.position = 'relative';
        link.appendChild(img);
        link.appendChild(svg);

        const date = document.createElement('p');
        date.className = 'data';
        date.textContent = news[0].date;

        const title = document.createElement('p');
        title.textContent = news[0].title;

        const button = document.createElement('button');
        button.className = 'border-button';
        button.textContent = 'Readme';

        // Добавляем обработчик события клика для кнопки
        button.addEventListener('click', () => {
            // Выполняем переход по адресу из ссылки
            window.location.href = link.href;
        });

        // Добавляем все элементы в слайд
        slide.appendChild(link);
        slide.appendChild(date);
        slide.appendChild(title);
        slide.appendChild(button);


    } else {
        let p = document.createElement('p');
        p.innerHTML = 'Cписок пуст'
        p.style.marginBottom = '50px';
        slide.appendChild(p);
    }

    return slide;
}

function showSlider() {
    const slider = document.getElementById('slider_featured');
    if (slider) {
        slider.style.display = 'block';
    }
}


function adjustImagePath(imagePath) {
    const currentPage = window.location.href.split('/').pop();
    console.log(currentPage);

    // Проверяем, находимся ли мы на главной странице или в index.html
    if (currentPage === '' || currentPage === 'index.html') {
        console.log("haystack");
        return './' + imagePath; // Меняем на ваш путь к изображениям
    }
    return imagePath;
}

function hideSlider() {
    const slider = document.getElementById('slider_featured');
    if (slider) {
        slider.style.display = 'none';
    }
}

function deleteNewsFromFavorites(newsId) {
    const user = getUserData();
    const favoriteNews = user.favorites.news || [];

    // Находим индекс новости в избранных
    const index = favoriteNews.indexOf(newsId);
    if (index !== -1) {
        // Удаляем новость из избранных
        favoriteNews.splice(index, 1);

        // Обновляем данные пользователя в localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // Получаем массив пользователей из localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Находим индекс пользователя в массиве
        const userIndex = users.findIndex(u => u.id === user.id);

        if (userIndex !== -1) {
            // Обновляем пользователя в массиве
            users[userIndex] = user;

            // Сохраняем обновлённый массив пользователей обратно в localStorage
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}