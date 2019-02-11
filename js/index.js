
$(function () {
    $('.incase .left-swiper .swiper-wrapper').html($('.incase .current-swiper .swiper-wrapper').html());
    $('.incase .left-swiper .swiper-wrapper').prepend($('.incase .left-swiper .swiper-wrapper .swiper-slide').last())
    $('.incase .right-swiper .swiper-wrapper').html($('.incase .left-swiper .swiper-wrapper').html());
    $('.incase .right-swiper .swiper-wrapper').prepend($('.incase .right-swiper .swiper-wrapper .swiper-slide').last())
    var currentSwiper = new Swiper('.incase .current-swiper', {
        loop: true,
        pagination: {
            el: '.incase .swiper-pagination'
        }
    });
    var leftSwiper = new Swiper('.incase .left-swiper', {
        loop: true,
        simulateTouch: false
    });
    var rightSwiper = new Swiper('.incase .right-swiper', {
        loop: true,
        simulateTouch: false
    });
    currentSwiper.controller.control = [leftSwiper, rightSwiper];
});

// banner滚动 	
$(function () {
    var banner = new Swiper('.banner .swiper-container ', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: true
    });

});


var tabsgood = new Swiper('#tabs-pdo', {
    speed: 500,
    parallax: true,
    on: {
        slideChangeTransitionStart: function () {
            $(".pdo .tabs .active").removeClass('active');
            $(".pdo .tabs a").eq(this.activeIndex).addClass('active');
        }
    }
});


// banner 
// 优势滚动 
var mySwiper2 = new Swiper('#topProducts', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 4,
    on: {
        tap: function () {
            mySwiper3.slideTo(mySwiper2.clickedIndex)
        }
    }
})
var mySwiper3 = new Swiper('#swiper-container3', {
    speed: 500,
    parallax: true,
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
        shadow: false,
        shadowOffset: 100,
        shadowScale: 0.6
    },
    pagination: {
        el: '.swiper-pagination'
    },
    on: { slideChangeTransitionStart: function () {
        updateNavPosition()
    }
    }

})

function updateNavPosition() {
    $('#topProducts .active-nav').removeClass('active-nav')
    var activeNav = $('#topProducts .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


    if (!activeNav.hasClass('swiper-slide-visible')) {
        console.log(1);
        if (activeNav.index() > mySwiper2.activeIndex) {
            console.log(2);
            var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
            mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
        }
        else {
            console.log(3);
            mySwiper2.slideTo(activeNav.index())
        }
    }
}
// 新闻滚动开始 
var newsswiper = new Swiper('.index_news .swiper-container', {
    speed: 500,
    parallax: true

});


var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();
new Inertia(document.getElementById('kefu-ball'));



