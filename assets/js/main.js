
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

  $(function() {
    var topBtn = $('#wrapping-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
  }); 
  
$(function(){
	//scroll event
	var topBtn = $('.christmas');
	var movieFix = $('.christmas-top__movie');
    $(window).scroll(function () {

    	//top
        if ($(this).scrollTop() > 0) {
            topBtn.addClass('active');
            movieFix.css('position', 'fixed');
        } else {
            topBtn.removeClass('active');
        }

        //movie
        if ($(this).scrollTop() > 1000) {
            movieFix.css('display', 'none');
        } else {
            movieFix.css('position', 'absolute');
        }
    });
    // topBtn.click(function () {
    //     $('body,html').animate({
    //         scrollTop: 0
    //     }, 500);
    //     return false;
    // });
});

// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
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


 

//   メリークリスマスアニメーション
/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
    var s,
    spanizeLetters = {
      settings: {
        letters: $('.js-spanize'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function(){
        s.letters.html(function (i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
    spanizeLetters.init();
  })(jQuery);