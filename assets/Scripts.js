const images = [
    'assets/Imgs/pexels-guilherme-rossi-1755683.jpg', 
    'assets/Imgs/ME7_7050.jpg',
    'assets/Imgs/Screenshot (57).png'
];

let currentIndex = 0;
const sliderButtons = document.querySelectorAll('.slider-button');

function changeBackground() {
    document.querySelector('.background-container').style.backgroundImage = `url(${images[currentIndex]})`;
    sliderButtons.forEach((button, index) => {
        button.classList.toggle('active', index === currentIndex);
    });
    currentIndex = (currentIndex + 1) % images.length;
}

function setSlide(index) {
    currentIndex = index;
    changeBackground();
}

setInterval(changeBackground, 5000); // Change background every 5 seconds

// Initial background image
changeBackground();

// Dropdown menu functionality
const servicesLink = document.getElementById('services-link');
const dropdownMenu = document.getElementById('services-dropdown');

servicesLink.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});

servicesLink.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdownMenu.matches(':hover')) {
            dropdownMenu.style.display = 'none';
        }
    }, 300);
});

dropdownMenu.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});

dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});

servicesLink.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
