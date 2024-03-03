document.addEventListener('DOMContentLoaded', () => {
    let exitButton = document.querySelector('.menu div.link');
    exitButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        localStorage.setItem('isAuth', false);
        window.href = '/';
    })
})