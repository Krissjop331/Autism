// document.addEventListener('DOMContentLoaded', () => {
//     let userData = JSON.parse(localStorage.getItem('user')) || [];
//     console.log(userData)
//     if (userData) {
//         let profileForm = document.getElementById('profile-form');
//         let nameInput = profileForm.querySelector('input[name="name"]');
//         let birthdayInput = profileForm.querySelector('input[name="birthday"]');
//         let emailInput = profileForm.querySelector('input[name="email"]');
//         let phoneInput = profileForm.querySelector('input[name="phone"]');
//         let passwordInput = profileForm.querySelector('input[name="password"]');

//         nameInput.value = userData.name || '';
//         birthdayInput.value = userData.birthday || '';
//         emailInput.value = userData.email || '';
//         phoneInput.value = userData.phone || '';
//         passwordInput.value = userData.password || '';

//         let editButton = document.getElementById('sub');
//         let notification = document.getElementById('notification');
//         let notificationMessage = document.getElementById('notification-message');
//         let closeNotification = document.getElementById('close-notification');

//         if (editButton) {
//             editButton.addEventListener('click', () => {
//                 let newName = nameInput.value;
//                 let newBirthday = birthdayInput.value;
//                 let newEmail = emailInput.value;
//                 let newPhone = phoneInput.value;
//                 let newPassword = passwordInput.value;

//                 userData.name = newName;
//                 userData.birthday = newBirthday;
//                 userData.email = newEmail;
//                 userData.phone = newPhone;
//                 userData.password = newPassword;

//                 localStorage.setItem('user', JSON.stringify(userData));

//                 notificationMessage.textContent = 'Данные успешно обновлены!';
//                 notification.style.backgroundColor = '#4CAF50';
//                 notification.style.display = 'block';

//                 setTimeout(() => {
//                     notification.style.display = 'none';
//                 }, 3000);
//             });
//         }

//         closeNotification.addEventListener('click', () => {
//             notification.style.display = 'none';
//         });
//     }


//     // Показ в меню админа

//     let menuContent = document.querySelector('.menu-content nav');
//     if (userData.role == 'admin') {
//         let linkAdmin = document.createElement('a');
//         let divAdmin = document.createElement('div');
//         divAdmin.innerHTML = `
//         <svg width="800" height="800" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M276.941 440.584v565.722c0 422.4 374.174 625.468 674.71 788.668l8.02 4.292 8.131-4.292c300.537-163.2 674.71-366.268 674.71-788.668V440.584l-682.84-321.657L276.94 440.584zm682.73 1479.529c-9.262 0-18.523-2.372-26.993-6.89l-34.9-18.974C588.095 1726.08 164 1495.906 164 1006.306V404.78c0-21.91 12.65-41.788 32.414-51.162L935.727 5.42c15.134-7.228 32.866-7.228 48 0l739.313 348.2c19.765 9.374 32.414 29.252 32.414 51.162v601.525c0 489.6-424.207 719.774-733.779 887.943l-34.899 18.975c-8.47 4.517-17.731 6.889-27.105 6.889zm467.158-547.652h-313.412l-91.595-91.482v-83.803H905.041v-116.78h-83.69l-58.503-58.504c-1.92.113-3.84.113-5.76.113-176.075 0-319.285-143.21-319.285-319.285 0-176.075 143.21-319.398 319.285-319.398 176.075 0 319.285 143.323 319.285 319.398 0 1.92 0 3.84-.113 5.647l350.57 350.682v313.412zm-266.654-112.941h153.713v-153.713L958.462 750.155l3.953-37.27c1.017-123.897-91.595-216.621-205.327-216.621S550.744 588.988 550.744 702.72c0 113.845 92.612 206.344 206.344 206.344l47.21-5.309 63.811 63.7h149.873v116.78h116.781v149.986l25.412 25.299zm-313.4-553.57c0 46.758-37.949 84.706-84.706 84.706-46.758 0-84.706-37.948-84.706-84.706s37.948-84.706 84.706-84.706c46.757 0 84.706 37.948 84.706 84.706" fill-rule="evenodd"/></svg>
//         <p>Admin</p>`

//         linkAdmin.href = `/admin/${userData.id}`;
//         linkAdmin.setAttribute('id', 'admin-link');
//         linkAdmin.classList.add('nav-link');
//         linkAdmin.appendChild(divAdmin);
//         menuContent.appendChild(linkAdmin);
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    let userData = JSON.parse(localStorage.getItem('user')) || [];
    console.log(userData);
    if (userData) {
        let profileForm = document.getElementById('profile-form');
        let nameInput = profileForm.querySelector('input[name="name"]');
        let birthdayInput = profileForm.querySelector('input[name="birthday"]');
        let emailInput = profileForm.querySelector('input[name="email"]');
        let phoneInput = profileForm.querySelector('input[name="phone"]');
        let passwordInput = profileForm.querySelector('input[name="password"]');

        nameInput.value = userData.name || '';
        birthdayInput.value = userData.birthday || '';
        emailInput.value = userData.email || '';
        phoneInput.value = userData.phone || '';
        passwordInput.value = userData.password || '';

        let editButton = document.getElementById('sub');
        let notification = document.getElementById('notification');
        let notificationMessage = document.getElementById('notification-message');
        let closeNotification = document.getElementById('close-notification');

        if (editButton) {
            editButton.addEventListener('click', () => {
                let newName = nameInput.value;
                let newBirthday = birthdayInput.value;
                let newEmail = emailInput.value;
                let newPhone = phoneInput.value;
                let newPassword = passwordInput.value;

                userData.name = newName;
                userData.birthday = newBirthday;
                userData.email = newEmail;
                userData.phone = newPhone;
                userData.password = newPassword;

                localStorage.setItem('user', JSON.stringify(userData));

                notificationMessage.textContent = 'Данные успешно обновлены!';
                notification.style.backgroundColor = '#4CAF50';
                notification.style.display = 'block';

                setTimeout(() => {
                    notification.style.display = 'none';
                }, 3000);
            });
        }

        closeNotification.addEventListener('click', () => {
            notification.style.display = 'none';
        });



        // ... (your existing code)
    }

    // ... (your existing code)
});