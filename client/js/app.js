const filter = document.querySelector(".filters .block svg");
const block = document.querySelector(".filters .block");

if (block) {
    block.addEventListener("click", (e) => {
        e.preventDefault();
        filter.classList.toggle("active-fill");
    })
}

function updateColorsOnResize() {
    if (document.querySelector('.menu-mobile .logo svg').hasAttribute('data-white') &&
        document.querySelector('.menu-mobile .burger').hasAttribute('data-white')) {
        let svg = document.querySelector('.menu-mobile .logo svg');
        let spanList = document.querySelectorAll('.menu-mobile .burger .span');

        if (window.innerWidth <= 700) {
            svg.classList.add("white-fill-logo");
            spanList.forEach(span => {
                span.classList.add("white-background-span")
            });
        }
    }
}

// Вызываем функцию сразу после загрузки страницы
updateColorsOnResize();

// Добавляем обработчик события resize
window.addEventListener('resize', updateColorsOnResize);