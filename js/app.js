// variables

const gallery = document.querySelectorAll('.gallery-content .img-card img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');

const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.list-container');
let on_off = true;

// Responsive Menu
btnMenu.addEventListener('click', () => {
     
    if (on_off) {
       menu.style.left = "0";
       menu.style.transition = "300ms";
       on_off = false;
    }else{
        on_off = false;
        menu.style.left = "-100%";
        menu.style.transition = "300ms";
        on_off = true;
    }

});


// Galerias
gallery.forEach( (images) => {
    images.addEventListener('click', (e) => {
        modal.style.display = 'block';

        const srcImg = e.target.src;
        const altImg = e.target.alt;

        imgModal.src = srcImg;
        caption.innerHTML = altImg;
    });
});


// cerrar modal

document.querySelector('#closeModal').addEventListener('click', () => {
    modal.style.display = 'none';
});