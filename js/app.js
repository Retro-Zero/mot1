const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true
    },

    // Navigation
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Auto play
    autoplay: {
        delay: 3000
    },
});