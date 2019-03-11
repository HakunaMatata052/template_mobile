
			$(function() {
				$('.banner .left-swiper .swiper-wrapper').html($('.banner .current-swiper .swiper-wrapper').html());
				$('.banner .left-swiper .swiper-wrapper').prepend($('.banner .left-swiper .swiper-wrapper .swiper-slide').last())
				$('.banner .right-swiper .swiper-wrapper').html($('.banner .left-swiper .swiper-wrapper').html());
				$('.banner .right-swiper .swiper-wrapper').prepend($('.banner .right-swiper .swiper-wrapper .swiper-slide').last())
				var currentSwiper = new Swiper('.current-swiper', {
					loop: true,
					pagination: {
						el: '.banner .swiper-pagination',
					}
				});
				var leftSwiper = new Swiper('.left-swiper', {
					loop: true,
					simulateTouch: false
				});
				var rightSwiper = new Swiper('.right-swiper', {
					loop: true,
					simulateTouch: false
				});
				currentSwiper.controller.control = [leftSwiper, rightSwiper];
			});
			$(function() {
				var hotProduct = new Swiper('.hot-product .menu-content .swiper-container ', {
					slidesPerView: 'auto',
					spaceBetween: 20,
					on: {
						touchEnd: function(event) {
							var width = -(this.slides.css('width').replace('px', '') * (this.slides.length - 1) + 195 - this.slides.css('width').replace('px', '') * 2);
							var href = this.slides.find('.last-slide a').attr('href');
							if(width > this.translate) {
								window.location.href = href;
								this.slides.find('.last-slide a').text('即将跳转')
							}
						},
						touchMove: function(event) {
							var width = -(this.slides.css('width').replace('px', '') * (this.slides.length - 1) + 195 - this.slides.css('width').replace('px', '') * 2);
							var href = this.slides.find('.last-slide a').attr('href');
							if(width > this.translate) {
								this.slides.find('.last-slide a').text('即将跳转')
							} else {
								this.slides.find('.last-slide a').text('左滑查看更多')
							}
						}
					}
				});
				var tabsProduct = new Swiper('#tabs-product', {
					speed: 500,
					parallax : true,
					on: {
						slideChangeTransitionStart: function() {
							$(".product-center .tabs .active").removeClass('active');
							$(".product-center .tabs a").eq(this.activeIndex).addClass('active');
						}
					}
				});
				var ys = new Swiper('.ys .swiper-container', {
					loop: true,
					effect: 'flip',
					//autoplay: true,
					pagination: {
						el: '.ys .swiper-pagination',
					}

				});
				var caseShow = new Swiper('.case .swiper-container', {
					watchSlidesProgress: true,
					slidesPerView: 'auto',
					centeredSlides: false,
					loop: true,
					loopedSlides: 3,
					//autoplay: true,
					on: {
						progress: function(progress) {
							for(i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								var slideProgress = this.slides[i].progress;
								modify = 1;
								if(Math.abs(slideProgress) > 1) {
									modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
								}
								translate = slideProgress * modify * 160 + 'px';
								scale = 1 - Math.abs(slideProgress) / 5;
								zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
								slide.transform('translateX(' + translate + ') scale(' + scale + ')');
								slide.css('zIndex', zIndex);
								slide.css('opacity', 1);
								if(Math.abs(slideProgress) > 3) {
									slide.css('opacity', 0);
								}
							}
						},
						setTransition: function(transition) {
							for(var i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i)
								slide.transition(transition);
							}

						}
					}

				});
				var tabsNews = new Swiper('#tabs-news', {
					speed: 500,
					parallax : true,
					on: {
						slideChangeTransitionStart: function() {
							$(".news .tabs .active").removeClass('active');
							$(".news .tabs a").eq(this.activeIndex).addClass('active');
						}
					}
				});

			});
			new Inertia(document.getElementById('kefu-ball'));