document.querySelector('.scroll-button.left').addEventListener('click', () => {
    document.querySelector('.gallery__track').scrollBy({left: -300, behavior: 'smooth' });
});

document.querySelector('.scroll-button.right').addEventListener('click', () => {
    document.querySelector('.gallery__track').scrollBy({left: 300, behavior: 'smooth' });
});