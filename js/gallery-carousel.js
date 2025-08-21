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

function fadeSwap(imgElement, newSrc) {
    if (!imgElement) return;

    // Dim slightly (e.g., from 0.6 → 0.3)
    imgElement.style.opacity = 0.3;

    setTimeout(() => {
        imgElement.src = newSrc;
        // Fade back to normal
        imgElement.style.opacity = 0.6;
    }, 200); // shorter timeout for subtle effect
}

function updateThumbnails() {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    fadeSwap(prevThumbnail, images[prevIndex]);
    fadeSwap(nextThumbnail, images[nextIndex]);
}

if (carousel) {
    carousel.addEventListener('slide.bs.carousel', function (e) {
        currentIndex = Array.from(e.target.querySelectorAll('.carousel-item')).indexOf(e.relatedTarget);
        updateThumbnails();
    });
}

// Initialize thumbnails
updateThumbnails();