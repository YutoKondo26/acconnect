// slick01
$('#slick01').slick({
  autoplay: false,//自動的に動き出すか
  autoplaySpeed: 5000,//次のスライドに切り替わる待ち時間
  speed:500,//スライドの動きのスピード。初期値は300。

  infinite: true,//スライドをループさせるかどうか。初期値はtrue。

  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効

   centerMode: true,//前後の写真がちょい見えする
   centerPadding: '10%',

   responsive: [//レスポンシブ
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      //ここにかく
    }
  },
]

});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});


// $('.slick-center').slick({
//   centerMode: true,
//   centerPadding: '0px',
//   slidesToShow: 1,

// });

