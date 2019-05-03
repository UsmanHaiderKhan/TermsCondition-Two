//console.log("usman");


/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('dt > a').on('click',
        function () {
            $('dt > a').removeClass('side-bar-active');
            $(this).addClass('side-bar-active');
        });
});

$(function () {
    $('dt > a').on('click',
        function () {
            $(".media-body > h2").removeClass('main-heading-color');
            var id = $(this).attr('href');

            //var a = $("#" + ".media-body > h2").html();
            //var path = id + a;
            //alert(path);
            $(".media-body h2").addClass("main-heading-color");
            //$(this).addClass('main-heading-color');


        });
});


/*===================== Scroll Top Function Script ======================*/
$(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".side-bar-border").addClass("on-sroll");

        } else {


            $(".side-bar-border").removeClass("on-sroll");


        }


    });
});
/*===================== Nav tabs active Function Script ======================*/
