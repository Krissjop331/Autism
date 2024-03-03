let linkSigninMob, linkSignupMob, linkProfileMob, linkLogoutMob, linkAdminMob;

function addElements(block, elements) {
    elements.forEach(element => block.appendChild(element));
}

document.addEventListener('DOMContentLoaded', () => {
    let linkBlockAuthDesk = document.querySelector('header .menu-desk .link-block');

    if (!linkBlockAuthDesk) {
        linkBlockAuthDesk = document.querySelector('.menu .link');
        console.log(linkBlockAuthDesk);
    }

    const linkBlockAuthMobile = document.querySelector('header .menu-mobile .content_burger nav');

    let linkSignin = createNavLink('/signin', 'Sign In', 'signin-link');
    let linkSignup = createNavLink('/signup', 'Sign Up', 'signup-link');
    let linkLogout = createNavLink('/', 'Logout', 'logout-link');
    linkSigninMob = createNavLink('/signin', 'Sign In', 'signin-link-mob');
    linkSignupMob = createNavLink('/signup', 'Sign Up', 'signup-link-mob');
    linkLogoutMob = createNavLink('/', 'Logout', 'logout-link-mob');


    function createNavLink(href, text, id) {
        let link = document.createElement('a');
        link.setAttribute('href', href);
        link.setAttribute('class', 'nav-link');
        link.setAttribute('id', id);
        link.innerHTML = text;
        return link;
    }

    function updateAuthElements(isAuth) {
        // Очищаем существующий контент
        if (linkBlockAuthDesk && linkBlockAuthMobile) {
            linkBlockAuthDesk.innerHTML = '';

            linkBlockAuthMobile.innerHTML = `<a href="/" class="nav-link" id="home-link">Home</a>
        <a href="/learn" class="nav-link" id="learn-link">Learn</a>`;

            if (isAuth === 'true') {
                let buttonSignup = document.querySelector('.wrapper .content .buttons #signup_button');
                if (buttonSignup) {
                    buttonSignup.remove();
                }
                let user = JSON.parse(localStorage.getItem('user'));
                let linkProfile = createNavLink(`/profile/${user.id}`, 'Profile', 'profile-link');

                let linkAdmin = createNavLink(`/admin/${user.id}`, 'Admin', 'admin-link');
                linkProfileMob = createNavLink(`/profile/${user.id}`, 'Profile', 'profile-link-mob');

                linkAdminMob = createNavLink(`/admin/${user.id}`, 'Admin', 'admin-link-mob');
                if (user.role == 'admin') {
                    addElements(linkBlockAuthDesk, [linkAdmin]);
                    addElements(linkBlockAuthMobile, [linkAdminMob]);
                }
                addElements(linkBlockAuthDesk, [linkProfile, linkLogout]);
                addElements(linkBlockAuthMobile, [linkProfileMob, linkLogoutMob]);

            } else {
                addElements(linkBlockAuthDesk, [linkSignin, linkSignup]);




                localStorage.removeItem('user')
                linkBlockAuthMobile.innerHTML = `<a href="/" class="nav-link" id="home-link">Home</a>
        <a href="/learn" class="nav-link" id="learn-link">Learn</a>`
                addElements(linkBlockAuthMobile, [linkSigninMob, linkSignupMob]);
            }
        }



    }

    function checkAndUpdateAuth() {
        let isAuth = localStorage.getItem('isAuth');
        updateAuthElements(isAuth);
    }

    setInterval(checkAndUpdateAuth, 5000);
    checkAndUpdateAuth();

    // События кнопок
    linkLogout.addEventListener('click', () => {
        localStorage.setItem('isAuth', false);
        setTimeout(() => {
            checkAndUpdateAuth();
            localStorage.removeItem('user');
            window.location.href = '/';
        }, 100);
    });

    linkLogoutMob.addEventListener('click', () => {
        localStorage.setItem('isAuth', false);
        setTimeout(() => {
            checkAndUpdateAuth();
            localStorage.removeItem('user');
            window.location.href = '/';
        }, 100);
    });
});