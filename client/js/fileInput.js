document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile_image');
    const profileImageInput = document.getElementById('profileImageInput');
    const user = JSON.parse(localStorage.getItem('user'));

    profileImage.addEventListener('click', function() {
        profileImageInput.click();
    });

    profileImageInput.addEventListener('change', handleImageChange);
    profileImage.style.background = user.image !== 'default' ? `url(${user.image}) center/cover` : '#b3b3b3';
    profileImage.querySelector('.profile_image svg').style.display = user.image !== 'default' ? 'none' : 'flex';

    function handleImageChange() {
        const file = profileImageInput.files[0];

        if (file) {
            const fileName = file.name;
            const allowedExtensions = ['jpg', 'png', 'svg', 'gif', 'webp', 'image/webp'];
            const fileExtension = fileName.split('.').pop().toLowerCase();

            const reader = new FileReader();

            reader.onload = function(e) {
                const imageUrl = e.target.result;

                if (allowedExtensions.includes(fileExtension)) {
                    setProfileImageBackground(imageUrl);
                    user.image = imageUrl; // Сохраняем новое изображение в user
                    localStorage.setItem('user', JSON.stringify(user)); // Обновляем localStorage
                } else {
                    resetProfileImage();
                }
            };

            reader.readAsDataURL(file);
        }
    }

    function setProfileImageBackground(imageUrl) {
        profileImage.style.background = `url(${imageUrl}) center/cover`;
        profileImage.querySelector('.profile_image svg').style.display = 'none';
    }

    function resetProfileImage() {
        profileImage.style.background = '#b3b3b3';
        profileImage.querySelector('.profile_image svg').style.display = 'flex';
    }
});