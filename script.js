// ================== FAQ ACCORDION ==================
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const openItem = document.querySelector('.accordion-body.show');

        // Fecha outro item aberto
        if(openItem && openItem !== body){
            openItem.classList.remove('show');
            openItem.style.display = 'none';
        }

        // Alterna estado do clique atual
        if(body.classList.contains('show')){
            body.classList.remove('show');
            body.style.display = 'none';
        } else {
            body.classList.add('show');
            body.style.display = 'block';
        }
    });
});

// ================== CARROSSEL DE DEPOIMENTOS ==================
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let index = 0;

// Função para atualizar posição do carrossel
function updateCarousel() {
    const cardWidth = track.children[0].getBoundingClientRect().width + 20;
    track.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Botões de navegação
prevBtn.addEventListener('click', () => {
    index--;
    if(index < 0) index = track.children.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    index++;
    if(index >= track.children.length) index = 0;
    updateCarousel();
});

// Auto slide a cada 5 segundos
setInterval(() => {
    index++;
    if(index >= track.children.length) index = 0;
    updateCarousel();
}, 5000);

// ================== ANIMAÇÕES AO SCROLL ==================
const animateElements = document.querySelectorAll('.animate-slide, .animate-fade');

function checkAnimation() {
    const triggerBottom = window.innerHeight * 0.85;

    animateElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < triggerBottom){
            el.classList.add('show-animation');
        }
    });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);

// ================== PARALLAX HERO (opcional leve) ==================
const hero = document.querySelector('.hero.premium');
window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    if(hero){
        hero.style.backgroundPositionY = offset * 0.5 + 'px';
    }
});
