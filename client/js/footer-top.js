document.addEventListener('DOMContentLoaded', () => {
    let arrowTop = document.querySelector('footer .arrow-start');

    arrowTop.addEventListener('click', function() {
        scrollToTop(500)
    })

    function scrollToTop(duration) {
        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scrollStep() {
            const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const elapsed = currentTime - startTime;
            const position = easeInOut(elapsed, start, -start, duration);
            window.scrollTo(0, position);

            if (elapsed < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        function easeInOut(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollStep);
    }
})