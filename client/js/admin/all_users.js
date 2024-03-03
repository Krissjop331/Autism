document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
        // Получаем контейнер для пользователей
        const usersContainer = document.querySelector('.grid_users');

        // Массив с пользователями (замените этот массив вашим способом получения данных)
        const usersData = JSON.parse(localStorage.getItem('users'));

        // Заполняем таблицу пользователями
        usersData.forEach(user => {
            const userElement = createUserElement(user);
            usersContainer.appendChild(userElement);

        });

        // Функция создания элемента пользователя
        function createUserElement(user) {
            const userElement = document.createElement('div');
            userElement.classList.add('grid_users');

            const properties = ['id', 'name', 'email', 'phone', 'role', 'password'];
            properties.forEach(property => {
                const pElement = document.createElement('p');
                pElement.textContent = user[property];
                userElement.appendChild(pElement);
            });

            // Создаем выпадающий список для изменения роли
            const selectElement = createRoleSelect(user.role);
            userElement.appendChild(selectElement);

            // Кнопки действий
            const buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('grid_users-button');

            // Кнопка "Удалить"
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('data-delete', '');
            deleteButton.classList.add('black-button');
            deleteButton.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.755 20.283L4 8h16l-1.755 12.283A2 2 0 0116.265 22h-8.53a2 2 0 01-1.98-1.717zM21 4h-5V3a1 1 0 00-1-1H9a1 1 0 00-1 1v1H3a1 1 0 000 2h18a1 1 0 000-2z"/></svg>';
            deleteButton.addEventListener('click', () => deleteUser(user.id));

            // Кнопка "Заблокировать"
            const blockButton = document.createElement('button');
            blockButton.setAttribute('data-block', '');
            blockButton.classList.add('black-button');
            blockButton.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0113.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121.53-.531 1.256-.741 2.371-.824zM6.75 8a5.25 5.25 0 0110.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004V8z" /></svg>';
            blockButton.addEventListener('click', () => blockUser(user.id));

            buttonsContainer.appendChild(deleteButton);
            buttonsContainer.appendChild(blockButton);

            userElement.appendChild(buttonsContainer);

            return userElement;
        }

        // Функция создания выпадающего списка ролей
        function createRoleSelect(currentRole) {
            const selectElement = document.createElement('select');
            const roles = ['Admin', 'User', 'Moderator']; // Замените на свои роли
            roles.forEach(role => {
                const optionElement = document.createElement('option');
                optionElement.value = role;
                optionElement.textContent = role;
                if (role === currentRole) {
                    optionElement.selected = true;
                }
                selectElement.appendChild(optionElement);
            });
            selectElement.addEventListener('change', (event) => changeUserRole(user.id, event.target.value));
            return selectElement;
        }

        // Функция удаления пользователя
        function deleteUser(userId) {
            // Проверяем, что пользователь не админ
            const user = usersData.find(user => user.id === userId);
            if (user.role !== 'Admin') {
                // Удаляем пользователя из массива и обновляем таблицу
                usersData.splice(usersData.findIndex(u => u.id === userId), 1);
                updateTable();
            } else {
                alert("Нельзя удалить администратора!");
            }
        }

        // Функция блокировки пользователя
        function blockUser(userId) {
            // Проверяем, что пользователь не админ
            const user = usersData.find(user => user.id === userId);
            if (user.role !== 'Admin') {
                // Меняем роль пользователя на "Blocked" и обновляем таблицу
                user.role = 'Blocked';
                updateTable();
            } else {
                alert("Нельзя заблокировать администратора!");
            }
        }

        // Функция изменения роли пользователя
        function changeUserRole(userId, newRole) {
            // Меняем роль пользователя и обновляем таблицу
            const user = usersData.find(user => user.id === userId);
            user.role = newRole;
            updateTable();
        }

        // Функция обновления таблицы
        function updateTable() {
            // Очищаем контейнер и добавляем обновленных пользователей
            usersContainer.innerHTML = '';
            usersData.forEach(user => {
                const userElement = createUserElement(user);
                usersContainer.appendChild(userElement);
            });
        }
    });
})