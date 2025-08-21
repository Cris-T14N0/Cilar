// Update thumbnail previews (minimal JavaScript for thumbnail updates)
const carousel = document.querySelector('#lojaCarousel');
const prevThumbnail = document.querySelector('#prevThumbnail img');
const nextThumbnail = document.querySelector('#nextThumbnail img');

const images = [
    'images/loja/exterior.jpg',
    'images/loja/quiosque.jpg',
    'images/loja/produtos_casa.jpg',
    'images/loja/roupa.jpg',
    'images/loja/tecnologia.jpg',
    'images/loja/flores_falsas.jpg',
    'images/loja/linhas.jpg',
    'images/loja/cobertores.jpg'
];

images.forEach(src => {
    const img = new Image();
    img.src = src;
});

let currentIndex = 0;

function updateThumbnails() {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    if (prevThumbnail) prevThumbnail.src = images[prevIndex];
    if (nextThumbnail) nextThumbnail.src = images[nextIndex];
}

if (carousel) {
    carousel.addEventListener('slide.bs.carousel', function (e) {
        currentIndex = Array.from(e.target.querySelectorAll('.carousel-item')).indexOf(e.relatedTarget);
        updateThumbnails();
    });
}

// Initialize thumbnails
updateThumbnails();