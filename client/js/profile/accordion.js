document.addEventListener("DOMContentLoaded", () => {
    let usersData = JSON.parse(localStorage.getItem('users')) || [];
    let user = JSON.parse(localStorage.getItem('user'))
    let currentUserId = 1;

    let favoriteLearnDataBase = JSON.parse(localStorage.getItem('favoriteLearnData')) || [];
    let favoriteNewsDataBase = JSON.parse(localStorage.getItem('favoriteNewsData')) || [];

    let profileAccordInfo = document.querySelector('.profile_accordion-info');
    let profileAccordionMenu = document.querySelectorAll('.profile_accordion-menu .wrap');
    let currentTabId = 'my_learn';

    profileAccordionMenu[0].setAttribute('class', 'wrap active-wrap');

    function updateData(tabId) {
        profileAccordInfo.innerHTML = '';

        let currentDataBase;
        if (tabId === 'my_learn') {
            const userFavorites = usersData[currentUserId - 1].favorites.learn;
            currentDataBase = favoriteLearnDataBase.filter(item => userFavorites.includes(item.id));
        } else if (tabId === 'my_favourites_news') {
            const userFavorites = user.favorites.news;
            currentDataBase = favoriteNewsDataBase.filter(item => userFavorites.includes(item.id));
        }

        if (currentDataBase.length === 0) {
            profileAccordInfo.innerHTML = '<p>Список пуст</p>';
        } else {
            currentDataBase.forEach(itemDB => {
                appendDataToAccordInfo(itemDB, tabId);
            });
        }
    }

    function appendDataToAccordInfo(itemDB, tabId) {
        if (!itemDB) {
            return;
        }

        let wrap = document.createElement('div');
        let img = document.createElement('div');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let date = document.createElement('p');
        let button = document.createElement('button');

        wrap.classList.add('wrap');
        img.classList.add('img');

        if (itemDB.image) {
            img.style.background = `url('../../img/${itemDB.image}') no-repeat`;
            img.style.backgroundSize = 'cover';
            img.style.backgroundPosition = 'center';
        } else {
            img.innerText = 'Изображение отсутствует';
        }

        h4.innerHTML = `${itemDB.title}`;
        p.innerHTML = `${itemDB.description}`;
        date.innerHTML = `${itemDB.date}`;
        date.classList.add('date');
        button.classList.add('black-button');
        button.innerHTML = `Подробнее`;
        button.style.marginLeft = '10px';
        button.style.marginRight = '10px';
        button.style.padding = '15px';

        // Добавляем кнопку удаления
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('black-button');
        deleteButton.innerHTML = 'Удалить';
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.marginRight = '10px';
        deleteButton.style.padding = '15px';
        deleteButton.style.marginBottom = '10px';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            handleDeleteItem(itemDB, tabId);
        });

        wrap.appendChild(img);
        wrap.appendChild(h4);
        wrap.appendChild(p);
        wrap.appendChild(date);
        wrap.appendChild(button);
        wrap.appendChild(deleteButton);
        profileAccordInfo.appendChild(wrap);
    }

    function handleDeleteItem(itemDB, tabId) {
        // Ваш код удаления элемента из избранного
        if (tabId === 'my_learn') {
            const index = favoriteLearnDataBase.findIndex(item => item.id === itemDB.id);
            if (index !== -1) {
                favoriteLearnDataBase.splice(index, 1);
                localStorage.setItem('favoriteLearnData', JSON.stringify(favoriteLearnDataBase));
            }
        } else if (tabId === 'my_favourites_news') {
            const index = favoriteNewsDataBase.findIndex(item => item.id === itemDB.id);
            if (index !== -1) {
                favoriteNewsDataBase.splice(index, 1);
                localStorage.setItem('favoriteNewsData', JSON.stringify(favoriteNewsDataBase));
            }
        }

        // После удаления элемента обновляем отображение
        updateData(tabId);
    }

    profileAccordionMenu.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active-wrap');

            if (item.classList.contains('active-wrap')) {
                currentTabId = item.getAttribute('id');
            }

            profileAccordionMenu.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active-wrap');
                }
            });

            updateData(currentTabId);
        });
    });

    updateData(currentTabId);
});