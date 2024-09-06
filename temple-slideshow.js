document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.card__article');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    };

    const run = () => {
        articles.forEach(article => {
            if (isInViewport(article)) {
                article.classList.add('visible');
            } else {
                article.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', run);
    window.addEventListener('resize', run);

    run(); // Run on page load as well
});