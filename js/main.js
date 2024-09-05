// ページ内リンクの設定
jQuery(function(){
    var headerHight = 80; //ヘッダーの高さをpx指定
    //*ページ内リンクの指定
    jQuery("a[href^='#']").click(function(){
        var href= jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'body' : href);
        var position = target.offset().top-headerHight;
        jQuery("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
    });
    //*ページ外リンクの指定*/      
    var url = jQuery(location).attr('href');
    if (url.indexOf("?id=") == -1) {
    // ほかの処理
    }else{
        var url_sp = url.split("?id=");
        var hash     = '#' + url_sp[url_sp.length - 1];
        var target2 = jQuery(hash);
        var position2 = target2.offset().top-headerHight;
        jQuery("html, body").animate({scrollTop:position2}, 550, "swing");
    }
});


// ハンバーガーメニュー
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


  //アコーディオンをクリックした時の動作
  $('.Question').on('click', function () {//タイトル要素をクリックしたら
    var findElm = $(this).next(".Box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    } else {//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });