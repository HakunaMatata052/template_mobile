var banner = new Swiper('.banner-box', {
    slidesPerView: 'auto',
    autoplay: true,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});


var productTab = new Swiper('.product-tabs', {
    slidesPerView: 4,   
    initialSlide :2,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



var productContent = new Swiper('.product-content', {
    spaceBetween: 30,
    initialSlide :2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function() {
            $(".products-dd .porducts-b1 .selected").removeClass('selected');
            $(".products-dd .porducts-b1 .swiper-slide").eq(this.activeIndex).addClass('selected');
        }
    }

});
productContent.controller.control = productTab
productTab.controller.control = productContent




var swiper = new Swiper('.case-box', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



var swiper = new Swiper('.adv-box', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 15,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});



var swiper = new Swiper('.witness-box', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 2,
    loop: true,
    loopFillGroupWithBlank: false,


});




// 新闻
$(function() {
    var tabsNews = new Swiper('#tabs-news', {
        speed: 500,
        parallax: true,
        on: {
            slideChangeTransitionStart: function() {
                $(".news .tabs .active").removeClass('active');
                $(".news .tabs a").eq(this.activeIndex).addClass('active');
            }
        }
    });
});
// 新闻结束
new Inertia(document.getElementById('kefu-ball'));