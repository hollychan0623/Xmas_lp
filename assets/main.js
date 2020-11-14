$(function(){
	//menu event
	$('.christmas-header__humberger').on('click',function(){
		$('body').toggleClass('active');
	});

	//scroll event
	var topBtn = $('.christmas-btn__top');
	var movieFix = $('.christmas-top__movie');
    $(window).scroll(function () {

    	//top
        if ($(this).scrollTop() > 200) {
            topBtn.addClass('active');
            movieFix.css('position', 'relative');
        } else {
            topBtn.removeClass('active');
        }

        //movie
        if ($(this).scrollTop() > 1000) {
            movieFix.css('position', 'relative');
        } else {
            movieFix.css('position', 'fixed');
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});