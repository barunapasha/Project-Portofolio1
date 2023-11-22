document.addEventListener('DOMContentLoaded', function() {
    const navbarAbout = document.querySelector('.navbar a[href="#about"]');
    const aboutPage = document.querySelector('.about-page');

    navbarAbout.addEventListener('click', function(event) {
        event.preventDefault();
        aboutPage.scrollIntoView({behavior: 'smooth'});
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarHome = document.querySelector('.navbar a[href="#home"]');
    const homePage = document.querySelector('.home-page');

    navbarHome.addEventListener('click', function(event) {
        event.preventDefault();
        homePage.scrollIntoView({behavior: 'smooth'});
    });
});