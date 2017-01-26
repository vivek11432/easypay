$(document).ready(function () {



            var scroll_pos = 0;
            $(document).scroll(function () {

                if ($(document).width() > 768) {
                    scroll_pos = $(this).scrollTop();
                    if (scroll_pos > 20) {
                        $("header").css('background-color', '#6E8FD2').fadeIn(1000);
                    } else {
                        $("header").css('background-color', 'transparent');
                    }
                } else {
                    $("header").css('background-color', '#6E8FD2').fadeIn(1000);
                }
            });


            $(window).resize(function () {
                if ($(document).width() > 768) {
                    scroll_pos = $(this).scrollTop();
                    if (scroll_pos > 20) {
                        $("header").css('background-color', '#6E8FD2').fadeIn(1000);
                    } else {
                        $("header").css('background-color', 'transparent');
                    }
                }
                else {
                    $("header").css('background-color', '#6E8FD2').fadeIn(1000);
                }
            })

        });