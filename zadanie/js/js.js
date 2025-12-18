// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, JS работает!');
    
    // Проверяем, есть ли слайдер на странице
    if (document.querySelector('.before-after-slider')) {
        initSwiper();
    }
    
    // Инициализируем бургер меню
    initBurgerMenu();
    
    // Инициализируем кнопку записи
    initConsultButton();
});

// Функция инициализации Swiper
function initSwiper() {
    console.log('Инициализация Swiper...');
    
    // Проверяем, загружена ли библиотека Swiper
    if (typeof Swiper === 'undefined') {
        console.error('Библиотека Swiper не загружена!');
        return;
    }
    
    try {
        const beforeAfterSlider = new Swiper('.before-after-slider', {
            loop: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                }
            }
        });
        
        console.log('Swiper успешно инициализирован!');
    } catch (error) {
        console.error('Ошибка при инициализации Swiper:', error);
    }
}

// Функция бургер меню
function initBurgerMenu() {
    console.log('Инициализация бургер меню...');
    
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu');
    
    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            console.log('Клик по бургеру');
            burger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        console.log('Бургер меню инициализировано');
    } else {
        console.warn('Элементы бургер меню не найдены');
    }
}

// Инициализация формы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initConsultationForm();
});