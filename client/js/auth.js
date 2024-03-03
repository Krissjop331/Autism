document.addEventListener('DOMContentLoaded', () => {
    let signinBtn = document.getElementById('sub');

    signinBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if (email !== undefined && email !== null && email !== '' &&
            password !== undefined && password !== null && password !== '') {

            let usersArray = JSON.parse(localStorage.getItem('users'));

            // Проверяем, есть ли элементы в массиве
            if (usersArray && usersArray.length > 0) {
                // Проверяем, существует ли пользователя с введенным email и password
                const user = usersArray.find(u => u.email === email && u.password === password);

                if (user) {
                    // Авторизация успешна, сохраняем пользователя в localStorage
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.href = '/'; // Переход на страницу профиля
                    localStorage.setItem('isAuth', true);


                } else {
                    alert('Неправильный email или пароль');
                }
            } else {
                alert('Пользователь с таким email не найден');
            }
        } else {
            alert("Вы не заполнили email или пароль");
        }
    });

    const arrowBack = document.querySelector('.arrow-back');
    arrowBack.addEventListener('click', () => {
        window.history.back();
    });
});