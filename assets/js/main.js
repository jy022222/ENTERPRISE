//스크롤 부드럽게
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)
window.onload = function () {
    $('body, html').animate({
        scrollTop: (0, 0)
    });
}
//gnb
$(window).scroll(function () {
    $(window).scrollTop() > 600 ? $('.header').addClass('show') : $('.header').removeClass('show');
});
$('.header .lang_area').click(function () {
    $('.header .lang_list').toggleClass('show');
});
ScrollTrigger.create({
    trigger: '.sc_challenge1',
    start: "100% 100%",
    end: "100% 100%",
    //markers: true,
    onEnter: function () {
        $('.header').addClass('black');
    },
    onLeaveBack: function () {
        $('.header').removeClass('black')
    }
})

//intro
barTl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_intro",
        start: "0% 0%",
        end: "100% 100%",
        // markers: true,
        scrub: 0,
    },
})
barTl1.to('.sc_intro .layer', 1, {
    opacity: 1
}, 'a')
barTl1.to('.sc_intro .txt_box .txt1', 1, {
    opacity: 1,
}, 'a')
barTl1.to('.sc_intro .txt_box .txt1', {
    opacity: 0,
})
barTl1.to('.sc_intro .txt_box .txt2', {
    opacity: 1,
})
barTl1.to('.sc_intro .txt_box .txt2', {
    opacity: 0,
})
barTl1.to('.sc_intro .txt_box .txt3', {
    opacity: 1,
})
barTl1.to('.sc_intro .txt_box .txt3', {
    opacity: 0,
})
barTl1.to('.sc_intro .txt_box .txt4', {
    opacity: 1,
})
barTl1.to('.sc_intro .scroll_down', {
    opacity: 0,
})

//showcase
barTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_showcase",
        start: "0% 0%",
        end: "100% 100%",
        // markers: true,
        scrub: 0,
    },
})
barTl2.to('.sc_showcase .layer', {
    opacity: 1,
}, 'a')
barTl2.to('.sc_showcase .txt_box', {
    opacity: 1,
}, 'a')

barTl2.to('.sc_showcase .layer', {
    opacity: 0,
}, 'b')
barTl2.to('.sc_showcase .txt_box .txt1', {
    xPercent: 100,
}, 'b')
barTl2.to('.sc_showcase .txt_box .txt3', {
    xPercent: -100,
}, 'b')

barTl2.to('.sc_showcase .txt_box', {
    opacity: 0,
})
barTl2.to('.sc_showcase .img_box .img1', {
    height: 0
})
barTl2.to('.sc_showcase .img_box .img2', {
    height: 0
})
barTl2.to('.sc_showcase .layer', {
    opacity: 1,
}, 'c')
barTl2.to('.sc_showcase .desc', {
    opacity: 1,
}, 'c')

//prove
gsap.set('.sc_prove1 .tit_wrap .tit1 span', {
    xPercent: -172
})
gsap.set('.sc_prove1 .tit_wrap .tit3 span', {
    xPercent: 134
})
gsap.set('.sc_prove2 .tit_wrap .tit1 span', {
    xPercent: -114
})
gsap.set('.sc_prove2 .tit_wrap .tit3 span', {
    xPercent: 120
})

$('.sc_prove1').each(function () {
    barTl3 = gsap.timeline({
        scrollTrigger: {
            trigger: $(this),
            start: "0% 80%",
            end: "100% 95%",
            // markers: true,
            scrub: 0,
        },
    })
    barTl3.from($(this).find('.box1'), {
        width: 0
    }, 'a')
    barTl3.from($(this).find('.box2'), {
        width: 0
    }, 'a')
    barTl3.from($(this).find('.tit_wrap .tit1 span'), {
        xPercent: 0
    }, 'a')
    barTl3.from($(this).find('.tit_wrap .tit3 span'), {
        xPercent: 0
    }, 'a')
})

$('.sc_prove2').each(function () {
    barTl3 = gsap.timeline({
        scrollTrigger: {
            trigger: $(this),
            start: "0% 80%",
            end: "100% 95%",
            // markers: true,
            scrub: 0,
        },
    })
    barTl3.from($(this).find('.box1'), {
        width: 0
    }, 'a')
    barTl3.from($(this).find('.box2'), {
        width: 0
    }, 'a')
    barTl3.from($(this).find('.tit_wrap .tit1 span'), {
        xPercent: 0
    }, 'a')
    barTl3.from($(this).find('.tit_wrap .tit3 span'), {
        xPercent: 0
    }, 'a')
})

//dark 테마
ScrollTrigger.create({
    trigger: `[data-theme="dark"]`,
    start: "0% 60%",
    end: "100% 100%",
    // markers:true,
    toggleClass: {
        targets: "body",
        className: "dark"
    }
})

//possibility
gsap.to('.sc_possibility .slide_inner', {
    scrollTrigger: {
        trigger: ".sc_possibility",
        start: "0% 0%",
        end: "100% 100%",
        // markers: true,
        scrub: 0,
        invalidateOnRefresh: true,
    },
    xPercent: -100,
    x: function () {
        return window.innerWidth;
    },
})

//challenge
barTl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_challenge2 .color_bar",
        start: "0% 95%",
        end: "100% 80%",
        scrub: 0,
    },
})
barTl4.from('.sc_challenge2 .color_bar .bar1', {
    xPercent: -50
}, 'a')
barTl4.from('.sc_challenge2 .color_bar .bar2', {
    xPercent: -50
}, 'a')
barTl4.from('.sc_challenge2 .color_bar .bar3', {
    xPercent: 50
}, 'a')

barTl4_1 = gsap.timeline({
    scrollTrigger: {
        trigger: `.sc_challenge2 .color_bar`,
        start: "0% 60%",
        end: "100% 30%",
        // markers:true,
        scrub: 0,
        invalidateOnRefresh: true,
        onEnter: function () {
            $('.sc_challenge2 .color_bar').addClass('on')
        },
        onLeaveBack: function () {
            $('.sc_challenge2 .color_bar').removeClass('on')
        }
    },
})
barTl4_1.to('.sc_challenge2 .bar_txt', {
    opacity: 1
})

//service
setTimeout(() => {
    service1Tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc_service .sticky_cont1",
            start: "0% 0%",
            end: "100% 100%",
            // markers: true,
            scrub: 0,
        },
    })
    service1Tl.to('.sc_service .sticky_cont1 .content', {
        x: function () {
            return -($('.sc_service .sticky_cont1 .slide_head').outerWidth() + 100)
        },
    })
    service1Tl.to('.sc_service .sticky_cont1 .slide_item:nth-child(1)', {
        x: 100
    }, 'a')
    service1Tl.to('.sc_service .sticky_cont1 .slide_item:nth-child(2)', {
        xPercent: -100,
        x: 100
    }, 'a')
    service1Tl.to('.sc_service .sticky_cont1 .slide_item:nth-child(3)', {
        xPercent: -200,
        x: 100
    }, 'a')
    service1Tl.to('.sc_service .sticky_cont1 .slide_item:nth-child(4)', {
        xPercent: -300,
        x: 100
    }, 'a')

    service1Tl.to('.sc_service .sticky_cont1 .slide_item .icon .img1', {
        opacity: 0,
    }, 'a-=0.1')
    service1Tl.to('.sc_service .sticky_cont1 .slide_item .icon .img2', {
        opacity: 1
    }, 'a+=0.2')
}, 300)

ScrollTrigger.create({
    trigger: `.sticky_cont2`,
    start: "0% 0%",
    end: "100% 100%",
    onEnter: function () {
        $('.sc_service .sticky_cont1').addClass('hide')
        $('.sc_service .sticky_cont2').addClass('show')
    },
    onLeaveBack: function () {
        $('.sc_service .sticky_cont1').removeClass('hide')
        $('.sc_service .sticky_cont2').removeClass('show')
    }
});

ScrollTrigger.create({
    trigger: `.sticky_cont3`,
    start: "0% 0%",
    end: "100% 100%",
    onEnter: function () {
        $('.sc_service .sticky_cont3 .col_left').addClass('show')
        $('.sc_service .sticky_cont2').removeClass('show')
    },
    onLeaveBack: function () {
        $('.sc_service .sticky_cont3 .col_left').removeClass('show')
        $('.sc_service .sticky_cont2').addClass('show')
    }
});

service1T2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_service .sticky_cont3",
        start: "0% 0%",
        end: "100% 100%",
        //markers: true,
        scrub: 0,
    },
})

service1T2.to('.sc_service .sticky_cont3 .slide_item:nth-child(1)', {
    xPercent: -120
}, 'b')
service1T2.to('.sc_service .sticky_cont3 .slide_item:nth-child(2)', {
    xPercent: -220,
    //x: 100
}, 'b')
service1T2.to('.sc_service .sticky_cont3 .slide_item:nth-child(3)', {
    xPercent: -320,
    //x: 100
}, 'b')
service1T2.to('.sc_service .sticky_cont3 .slide_footer', {
    opacity: 1,
}, 'c')
service1T2.to('.sc_service .sticky_cont3 .card .light', {
    opacity: 1,
}, 'c')

//sc_bank
gsap.to('.sc_bank .slide_inner', {
    scrollTrigger: {
        trigger: ".sc_bank",
        start: "0% 0%",
        end: "100% 100%",
        // markers: true,
        scrub: 0,
        invalidateOnRefresh: true,
    },
    xPercent: -100,
    x: function () {
        return window.innerWidth;
    },
}, 'a')
barTl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_bank",
        start: "0% 0%",
        end: "0% 50%",
        scrub: 0,
    },
})
ScrollTrigger.create({
    trigger: '.sc_bank',
    start: "0% 0%",
    end: "100% 100%",
    //markers: true,
    onEnter: function () {
        $('.arrow_index').addClass('show')
    },
    onLeaveBack: function () {
        $('.arrow_index').removeClass('show')
    }
})
ScrollTrigger.create({
    trigger: '.sc_bank',
    start: "50% 100%",
    end: "100% 100%",
    //markers: true,
    onEnter: function () {
        $('.sc_bank .arrow_index .txt_box .txt2').addClass('show');
        $('.sc_bank .arrow_index .txt_box .txt1').addClass('hide');
    },
    onLeaveBack: function () {
        $('.sc_bank .arrow_index .txt_box .txt2').removeClass('show');
        $('.sc_bank .arrow_index .txt_box .txt1').removeClass('hide');
    }
})

//creator
barTl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_creator",
        start: "0% 0%",
        end: "+=100%",
        markers: false,
        scrub: 1.3,
    },
})

barTl7.to('.sc_creator .txt_wrap', {
    opacity: 1,
    ease: 'none'
})

//use
gsap.to('.sc_use .slide_inner', {
    scrollTrigger: {
        trigger: ".sc_use",
        start: "0% 0%",
        end: "100% 100%",
        //   markers: true,
        scrub: 0,
        invalidateOnRefresh: true,
    },
    xPercent: -100,
    x: function () {
        return window.innerWidth;
    },
})

//join
ScrollTrigger.create({
    trigger: '.footer',
    start: "0% 100%",
    end: "100% 0%",
    // markers: true,
    toggleClass: {
        targets: ".join",
        className: "show"
    }
})

//top버튼
let lastScroll = 0;
$(window).scroll(function () {
    current = $(this).scrollTop();
    if (current > lastScroll) {
        $('.btn_top').removeClass('show');
    } else {
        $('.btn_top').addClass('show');
    }
    lastScroll = current;
})

ScrollTrigger.create({
    trigger: `.join`,
    start: "0% 100%",
    end: "0% 100%",
    //markers: true,
    onEnter: function () {
        $('.btn_top').addClass('abs')
    },
    onEnterBack: function () {
        $('.btn_top').removeClass('abs')
    }
});

$(".btn_top").click(function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
