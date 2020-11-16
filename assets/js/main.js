$(function(){
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
        if ($(this).scrollTop() > 500) {
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

$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
  }); 

  // ハンバーガーメニューOPEN
(function($) {
    $(function () {
      $('#nav-toggle').on('click', function() {
        $('.wrap').toggleClass('open');
      });
    });
  })(jQuery);