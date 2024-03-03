document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, авторизован ли пользователь
    if (isUserAuthenticated()) {
        // Получаем данные пользователя
        const user = getUserData();

        // Загружаем избранные новости пользователя
        loadUserFavoriteLearn(user);
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

function loadUserFavoriteLearn(user) {
    // Здесь должен быть код для получения избранных новостей пользователя
    // Например, запрос к серверу или извлечение данных из localStorage
    // В этом примере я использую фиктивные данные
    const favoriteNews = user.favorites.learn || [];

    const slider = document.getElementById('slider_featured');
    const sliderContainer = slider.querySelector('.slider-container');

    // Очищаем контейнер слайдера
    sliderContainer.innerHTML = '';

    // Создаем и добавляем слайды с новостями
    favoriteNews.forEach(learn => {
        let newsFavorite = JSON.parse(localStorage.getItem('favoriteLearnData'))
        sliderContainer.appendChild(createNewsSlide(newsFavorite.filter(item => item.id == learn)));
    });

    // Показываем слайдер
    slider.style.display = 'block';
}

function createNewsSlide(learn) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    console.log(learn)

    const currentPage = window.location.href.split('/').pop();
    const img = document.createElement('img');
    // Вызываем функцию adjustImagePath для корректного пути к изображению
    if (currentPage == '') {
        img.src = '../img/' + learn[0].image;
    }
    img.alt = learn[0].title;

    const date = document.createElement('p');
    date.className = 'data';
    date.textContent = learn[0].date;

    const title = document.createElement('p');
    title.textContent = learn[0].title;

    const button = document.createElement('button');
    button.className = 'border-button';
    button.textContent = 'Readme';

    slide.appendChild(img);
    slide.appendChild(date);
    slide.appendChild(title);
    slide.appendChild(button);

    return slide;
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
    slider.style.display = 'none';
}