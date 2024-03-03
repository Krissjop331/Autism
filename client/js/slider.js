document.addEventListener('DOMContentLoaded', () => {
    // Check if user is authenticated
    if (isUserAuthenticated()) {
        // Show the slider if the user is authenticated
        showSlider();
    } else {
        // Hide the slider if the user is not authenticated
        hideSlider();
    }

    // Add event listeners for sliders
    addSliderEventListeners();
});

function isUserAuthenticated() {
    const isAuth = localStorage.getItem('isAuth');
    return isAuth && isAuth === 'true';
}

function showSlider() {
    if (sliderFeatured) {
        sliderFeatured.style.display = 'block';
    }
    // Load user-specific content here, if needed
    // For example, loading user's favorite news into the slider
}

function hideSlider() {
    if (sliderFeatured) {
        sliderFeatured.style.display = 'none';
    }
}

function addSliderEventListeners() {
    // Event listeners for sliderFeatured
    sliderFeatured.addEventListener('mousedown', handleMouseDown);
    sliderFeatured.addEventListener('touchstart', handleTouchStart);
}

function handleMouseDown(e) {
    e.preventDefault();
    startX = e.clientX;
    scrollLeft = sliderFeatured.scrollLeft;
    sliderFeatured.style.cursor = 'grabbing';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

function handleMouseUp() {
    sliderFeatured.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(e) {
    const x = e.clientX;
    const walk = (x - startX) * 3;
    sliderFeatured.scrollLeft = scrollLeft - walk;
}

function handleTouchStart(e) {
    e.preventDefault();
    startX = e.touches[0].clientX;
    scrollLeft = sliderFeatured.scrollLeft;
    sliderFeatured.style.cursor = 'grabbing';
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
}

function handleTouchEnd() {
    sliderFeatured.style.cursor = 'grab';
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
}

function handleTouchMove(e) {
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 3;
    sliderFeatured.scrollLeft = scrollLeft - walk;
}

// Variables for slider event handling
let startX;
let scrollLeft;

// Selecting the sliderFeatured
const sliderFeatured = document.getElementById('slider_featured');