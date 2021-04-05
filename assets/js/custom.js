(function($) {
    'use strict';

    // Mean Menu JS
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Header Sticky
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Search Menu JS
    $(".search-box i").on("click", function() {
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function() {
        $(".search-overlay").removeClass("search-overlay-active");
    });

    // Hero slider
    $('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    })

    // Hero slider Two
    $('.hero-slider-two').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    })

    // Speciality Slider
    $('.speciality-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    // Testimonials Slider
    $('.testimonials-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
    })

    // Partner Slider
    $('.partner-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    // Popup Video
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Services Slider
    $('.services-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    })

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Hero slider Three
    $('.hero-slider-three').owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        nav: false,
        autoHeight: true,
        autoplay: false,
        autoplayHoverPause: false,
        dots: false,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    })

    //  Services Slider Two
    $('.services-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    //  Clients Slider
    $('.clients-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })

    //  Accrodion JS
    $('#accordion h3').on('click', function() {
        // capture all icons
        var iconChevron = $('.bx-chevron-right'),

            // capture current icon
            currentIcon = $(this).children('.bx-chevron-right');

        // Rotate none clicked icons back to original position
        $(iconChevron).not(currentIcon).removeClass('is-rotate');

        // Need rotate chevron on click 
        $(this).children('.bx-chevron-right').toggleClass('is-rotate');

        // Toggle is-hidden class on clicked and add it to previously clicked
        $(this).next()
            .toggleClass('is-hidden')
            .siblings('.drawer').addClass('is-hidden');
    });

    //  Blog Slider
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    // Gallery JS
    $('.ferry-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    // Accordion JS
    $('.accordion > li:eq(0) .title').addClass('active').next().slideDown();
    $('.accordion .title').click(function(j) {
        var dropDown = $(this).closest('li').find('.accordion-content');
        $(this).closest('.accordion').find('.accordion-content').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('.title.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });

    // Count Time JS
    function makeTimer() {
        var endTime = new Date("november  30, 2022 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 300);

    // Feedback Slider
    $('.feedback-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    // Subscribe form JS
    $(".newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    // AJAX MailChimp JS
    $(".newsletter-form").ajaxChimp({
        url: "https://EnvyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Go to Top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.go-top').addClass('active');
        } else {
            $('.go-top').removeClass('active');
        }
    });
    $(function() {
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });

        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

    // Preloader JS
    jQuery(window).on('load', function() {
        jQuery(".preloader").fadeOut(500);
    });


    $(function() {
        $("#getQuoteForm").on('click', function() {
            var connect = $("#locationSelection :selected").text();
            var formData = {
                name: $("input[name='name']").val(),
                email: $("input[name='email']").val(),
                weight: $("input[name='weight']").val(),
                phoneNumber: $("input[name='phoneNumber']").val(),
                commodity: $("input[name='commodity']").val(),
                destination: connect,
                getQuote: 'quote'
            }
            console.log(formData);
            // return;
            if (formData.name == "" && formData.email == "" && formData.phoneNumber == "" && formData.weight == "" && formData.commodity == "") {

                if (formData.name != "") {
                    document.getElementById('nameErr').innerHTML = ""
                } else {
                    document.getElementById('nameErr').innerHTML = "Name is required"
                }
                if (formData.email != "") {
                    document.getElementById('emailErr').innerHTML = ""
                } else {
                    document.getElementById('emailErr').innerHTML = "Email is required"
                }
                if (formData.phoneNumber != "") {
                    document.getElementById('phoneNumberErr').innerHTML = ""
                } else {
                    document.getElementById('phoneNumberErr').innerHTML = "Phone Number is required"
                }
                if (formData.weight != "") {
                    document.getElementById('weightErr').innerHTML = ""
                } else {
                    document.getElementById('weightErr').innerHTML = "Weight is required"
                }
                if (formData.commodity != "") {
                    document.getElementById('commodityErr').innerHTML = ""
                } else {
                    document.getElementById('commodityErr').innerHTML = "Commodity is required"
                }



            } else {
                $.ajax({
                    url: 'https://0hsd6n4ijh.execute-api.ap-south-1.amazonaws.com/sendmail/sendmail',
                    type: 'POST',
                    data: JSON.stringify(formData),
                    dataType: "json",
                    cache: false,
                    processData: false,
                    crossDomain: true,
                    success: function(data) {

                    },
                    error: function(data) {
                        $("#openModal").modal('show');
                        $("input[name='name']").val('');
                        $("input[name='email']").val('');
                        $("input[name='weight']").val('');
                        $("input[name='phoneNumber']").val('');
                        $("input[name='commodity']").val('');

                    }
                });

            }
        })
    })

    //Phone icons and validation

    var telInput = $("#phone"),
        errorMsg = $("#error-msg"),
        validMsg = $("#valid-msg");

    // initialise plugin
    telInput.intlTelInput({

        allowExtensions: true,
        formatOnDisplay: true,
        autoFormat: true,
        autoHideDialCode: true,
        autoPlaceholder: true,
        defaultCountry: "auto",
        ipinfoToken: "yolo",

        nationalMode: false,
        numberType: "MOBILE",
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do', 'in'],
        preferredCountries: ['sa', 'ae', 'qa', 'om', 'bh', 'kw', 'ma'],
        preventInvalidNumbers: true,
        separateDialCode: true,
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
    });

    var reset = function() {
        telInput.removeClass("error");
        errorMsg.addClass("hide");
        validMsg.addClass("hide");
    };

    // on blur: validate
    telInput.blur(function() {
        reset();
        if ($.trim(telInput.val())) {
            if (telInput.intlTelInput("isValidNumber")) {
                validMsg.removeClass("hide");
            } else {
                telInput.addClass("error");
                errorMsg.removeClass("hide");
            }
        }
    });

    // on keyup / change flag: reset
    telInput.on("keyup change", reset);




})(jQuery);