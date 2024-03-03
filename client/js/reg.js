document.addEventListener('DOMContentLoaded', () => {
    let regBtn = document.getElementById('sub');

    regBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let birthday = document.getElementById('birthday').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let password = document.getElementById('password').value;

        if (name !== undefined && name !== null && name !== '' && name.length >= 3 &&
            email !== undefined && email !== null && email !== '' &&
            password !== undefined && password !== null && password !== '' && password.length >= 5) {

            let dateUser = localStorage.getItem('users');
            let usersArray = JSON.parse(dateUser);

            // Проверяем, есть ли элементы в массиве
            if (usersArray && usersArray.length > 0) {
                // Проверяем, существует ли уже email в массиве
                const emailExists = usersArray.some(user => user.email === email);

                if (emailExists) {
                    alert('Пользователь с таким email уже существует');
                } else {
                    // Получаем последнего пользователя
                    let lastUser = usersArray[usersArray.length - 1].email;

                    var user = {
                        id: usersArray.length,
                        name,
                        birthday,
                        email,
                        phone,
                        password,
                        image: 'default',
                        role: 'user'
                    };

                    usersArray = [...usersArray, user];

                    localStorage.setItem('users', JSON.stringify(usersArray));
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('isAuth', true);
                    window.location.href = '/';
                }
            } else {
                // Если массив пуст, создаем новый массив с текущим пользователем
                var user = {
                    id: 0,
                    name,
                    birthday,
                    email,
                    phone,
                    password,
                    image: 'default',
                    role: 'user'
                };

                usersArray = [user];
                localStorage.setItem('user', JSON.stringify(user));

                localStorage.setItem('users', JSON.stringify(usersArray));

                console.log(localStorage.getItem('users'));
                window.location.href = '/signin';
            }

        } else {
            alert("Вы не заполнили одно из следующих полей: name, email, password")
        }
    });

    const arrowBack = document.querySelector('.arrow-back');
    arrowBack.addEventListener('click', () => {
        window.history.back();
    });
})