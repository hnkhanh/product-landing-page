$('document').ready(function(){

    $('ul.main-menu > li').click(function(e) {
        e.preventDefault();
        //change active element's color
        $('ul.main-menu > li').removeClass('active');
        $(this).addClass('active');
        //scroll to active element
        var ref = $(this).find('a').attr('href');
        $('html, body').animate({
        scrollTop: $(ref).offset().top
        }, 1000);
    });
})

//======>  Mobile Menu Activation
$('.main-navigation').meanmenu({
    meanScreenWidth: "992",
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: "<i class='fas fa-times'></i>",
    meanMenuOpen: "<i class='fas fa-bars'></i>",
    meanExpand: "",
});