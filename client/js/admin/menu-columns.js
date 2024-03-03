// Получаем размер колонки в профиле
let menu_columns = document.querySelector('.menu');

if (menu_columns) {
    // Устанавливаем высоту на весь экран
    menu_columns.style.height = "100vh";

    // Добавляем обработчик события для обновления высоты при изменении размеров окна
    window.addEventListener('resize', function() {
        menu_columns.style.height = "100vh";
    });
}


// Закрывающееся меню
let menu = document.querySelector('.menu');
let closes = document.querySelector('.close');

document.addEventListener('DOMContentLoaded', () => {
    menu.setAttribute('data-close', 'true');
    closes.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    if (menu.getAttribute('data-close') === 'true') {
        console.log('haysTrue');
        menu.setAttribute('data-close', 'false');
    } else if (menu.getAttribute('data-close') === 'false') {
        console.log('haysFalse');
        menu.setAttribute('data-close', 'true');
    } else if (!menu.getAttribute('data-close')) {
        menu.setAttribute('data-close', 'true');
    }
}