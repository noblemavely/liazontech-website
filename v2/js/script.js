jQuery(document).ready(function(){
    "use strict";

    $("nav ul li ul li ul").parent().addClass("has-dropdown");

    /*=================== Sticky Header  ===================*/
    if($("header").hasClass('stick')){
        var header_stick = $("header.stick").offset().top;
    }
    var header_height = $("header.stick").innerHeight();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > header_stick) {
            $("header.stick").addClass("sticky");
        } else {
            $("header.stick").removeClass("sticky");
        }
    });


    /*=================== Side Header Button  ===================*/
    $(".sideheader > span").on("click",function(){
        $(this).parent().toggleClass("slidein");
        $("body").toggleClass("move");
    });

    /*=================== Responsive Button Menu And Links Slide In ===================*/
    $(".responsive-bar span").on("click", function(e) {
        var target = $(e.target);
        var data_menu = $(e.target.attributes['data-target']).val();
        if (target.is('.open-menu') || data_menu == 'menu') {
            $(".responsive-links.other").removeClass("slidein");
            $(".responsive-links.menu").toggleClass("slidein");
        }
        if (target.is('.open-links') || data_menu == 'links') {
            $(".responsive-links.menu").removeClass("slidein");
            $(".responsive-links.other").toggleClass("slidein");
        }
    });


    $("html").on("click", function() {
        $(".responsive-links.other").removeClass("slidein");
        $(".responsive-links.menu").removeClass("slidein");
    });

    $(".responsive-header").on("click", function(e) {
        e.stopPropagation();
    })

    /*=================== Responsive Menu And Links Dropdown ===================*/
    $(".responsive-links ul li.menu-item-has-children > a, .sideheader ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().siblings().removeClass("active").find("ul").slideUp();
        $(this).next("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });
    $(".responsive-links ul li .lang-selector span").on("click", function() {
        $(this).next("ul").slideToggle();
        return false;
    })



    $(".cart-open").on("click",function(){
        $(this).parent().find(".cart").slideToggle();
        return false;
    });
    $(".open-search").on("click",function(){
        $(this).parent().find("form").slideToggle();
        $(this).toggleClass("close");
        return false;
    });


    /*=================== Accordion ===================*/
    $('.toggle .content').hide();
    $('.toggle h3:first').addClass('active').next().slideDown(500).parent().addClass("activate");
    $('.toggle h3').on("click", function() {
        if ($(this).next().is(':hidden')) {
            $('.toggle h3').removeClass('active').next().slideUp(500).removeClass('animated zoomIn').parent().removeClass("activate");
            $(this).toggleClass('active').next().slideDown(500).addClass('animated zoomIn').parent().toggleClass("activate");
        }
    });

    /* =============== Ajax Contact Form ===================== */
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
            $('#message').hide();
            $('#submit')
            .after('<img src="images/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');
            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
                verify: $('#verify').val()
            },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
            );
        });
        return false;
    });


    /*=================== Enscroll ===================*/  
    if ($.isFunction($.fn.enscroll)) {
        $('.responsive-links, .scrolling').enscroll({
            showOnHover: false,
            verticalTrackClass: 'track3',
            verticalHandleClass: 'handle3'
        });
    }



    /*=================== LightBox ===================*/  
    if ($.isFunction($.fn.poptrox)) {
        var foo = $('.lightbox');
        foo.poptrox({
            usePopupCaption: true
        });
    }


    $(".product-img-show.active").fadeIn();
    $(".product-thumbs > a").on("mouseenter",function(){
        var id = $(this).attr("href");
        $(this).parent().parent().find(".product-img-show").each(function(){
            if($(this).attr("data-id") == id){
                $(this).parent().parent().find(".product-img-show").fadeOut().removeClass("active");
                $(this).fadeIn().addClass("active");
            }
        });
    })

    /* ============ Count Down ================*/
    if ($.isFunction($.fn.downCount)) {
        $('.countdown').downCount({
            date: '01/26/2018 12:00:00',
            offset: +10
        });
    }

    /* ============ Select 2 ================*/
    if ($.isFunction($.fn.select2)) {
        $("select").select2();
    }

    /* ============ Bootstrap Number ================*/
    if ($.isFunction($.fn.bootstrapNumber)) {
        $('#counter3').bootstrapNumber();
        $('#counter4').bootstrapNumber();
        $('#counter').bootstrapNumber();
        $('#counter2').bootstrapNumber();
    }

    /* ============ Owl Carousel ================*/
    if ($.isFunction($.fn.owlCarousel)) {
        /* ============ Sponsors Carousel ================*/
        $('.sponsors-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:false,
            margin:10,
            items:6,
            responsive:{
                1200:{items:6},
                980:{items:4},
                768:{items:3},
                480:{items:2},
                0:{items:2}
            }
        });

        /* ============ Full Product Carousel ================*/
        $('.full-product-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:10,
            singleItem:true,
            items:1,
            animateIn:"fadeIn",
            animateOut:"fadeOut"
        });

        /* ============ Images Carousel ================*/
        $('.images-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:false,
            margin:0,
            items:6,
            responsive:{
                1200:{items:6},
                980:{items:4},
                768:{items:3},
                480:{items:2},
                0:{items:1}
            }
        });

        /* ============ Featured Posts Carousel ================*/
        $('.feature-post-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:true,
            nav:false,
            margin:10,
            singleItem:true,
            items:1
        });

        /* ============ Fancy Text Carousel ================*/
        $('.fancy-text-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:10,
            singleItem:true,
            items:1,
            animateIn:"fadeIn",
            animateOut:"fadeOut"
        });

        /* ============ Skills Carousel ================*/
        $('.skills-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:false,
            dots:true,
            nav:false,
            margin:30,
            items:2,
            responsive:{
                1200:{items:2},
                980:{items:2},
                768:{items:2},
                480:{items:2},
                0:{items:1}
            }
        }); 

        /* ============ About Project Carousel ================*/
        $('.about-project-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:0,
            items:3,
            responsive:{
                1200:{items:3},
                980:{items:3},
                768:{items:2},
                480:{items:2},
                0:{items:1}
            }
        });

        /* ============ CEO Carousel ================*/
        $('.ceo-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:10,
            singleItem:true,
            items:1,
            animateIn:"fadeIn",
            animateOut:"fadeOut"
        });


        /* ============ Simple Carousel ================*/
        $('.simple-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:10,
            items:3,
            responsive:{
                1200:{items:3},
                980:{items:3},
                768:{items:2},
                480:{items:1},
                0:{items:1}
            }
        });

        /* ============ Team Intro Carousel ================*/
        $('.team-intro-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:0,
            singleItem:true,
            items:1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });

        /* ============ About Text Carousel ================*/
        $('.about-text-carouel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:0,
            singleItem:true,
            items:1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });

        /* ============ Logos Carousel ================*/
        $('.logos-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:0,
            items:6,
            responsive:{
                1200:{items:6},
                980:{items:4},
                768:{items:3},
                480:{items:2},
                0:{items:1}
            }
        });

        /* ============ About Project Carousel ================*/
        $('.big-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:false,
            nav:true,
            margin:0,
            singleItem:true,
            items:1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });

        /* ============ News Carousel Widget ================*/
        $('.news-carousel-widget').owlCarousel({
            autoplay:true,
            autoplayTimeout:30000,
            smartSpeed:2000,
            loop:true,
            dots:true,
            nav:false,
            margin:10,
            items:2,
            responsive:{
                1200:{items:2},
                980:{items:2},
                768:{items:2},
                480:{items:1},
                0:{items:1}
            }
        });
    }

    /* ============ Slick Carousel ================*/
    if ($.isFunction($.fn.slick)) {
        $('.fancy-post-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true
        });

        $('.tabs-selectors').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical:true,
            asNavFor: '.tabs-content',
            dots: false,
            arrows:true,
            centerMode:false,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 780,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1
                }
            },
            {       
                breakpoint: 480,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }]
        }); 

        $('.tabs-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.tabs-selectors'
        });

        $('.testimonials-thumbs').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-messages',
            dots: false,
            arrows:true,
            centerMode:true,
            focusOnSelect: true,
            responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:1
                }
            },
            {       
                breakpoint: 480,
                settings: {
                    centerMode:false,
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }       
            ]
        }); 
        
        $('.testimonial-messages').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.testimonials-thumbs'
        });
    }

});


$(window).on('load',function(){
    /* ============ Scrolly ================*/
    if ($.isFunction($.fn.scrolly)) {
        $('.parallax').scrolly({bgParallax: true});
    }

});






