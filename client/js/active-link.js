document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPage = window.location.href;

    // Get the links
    var homeLink = document.getElementById('home-link');
    var learnLink = document.getElementById('learn-link');
    var homeLinkFooter = document.getElementById('home-link-footer');
    var learnLinkFooter = document.getElementById('learn-link-footer');
    var homeLinkMob = document.querySelector(".menu-mobile #home-link");
    var learnLinkMob = document.querySelector(".menu-mobile #learn-link");

    // Check if the current page URL matches the link and add the active class
    if (currentPage.endsWith('/') || currentPage.includes('/home')) {
        homeLink.classList.add('active-link');
        homeLinkFooter.classList.add('active-link');
        homeLinkMob.classList.add('active-link');
    } else if (currentPage.includes('/learn')) {
        learnLink.classList.add('active-link');
        learnLinkFooter.classList.add('active-link');
        learnLinkMob.classList.add('active-link');
    }
});