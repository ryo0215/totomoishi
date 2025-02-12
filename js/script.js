$('.nav_toggle').on('click', function () {
    // オーバーレイを表示する
    $('.overlay').toggleClass('show');

    // ハンバーガーボタンのアイコンの変化
    $('.nav_toggle').toggleClass('show');

    // オーバーレイが表示された後にメニューが表示されるように遅延を設定
    setTimeout(function() {
        $('.nav').toggleClass('show');
    }, 300); // 300msの遅延でメニューが表示される
});

// オーバーレイをクリックしたらメニューを閉じる
$('.overlay').click(function() {
    $('.nav, .overlay, .nav_toggle').removeClass('show');
});

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000, // 7秒ごとに切り替え
        fade: true,
        speed: 1000, // フェードの速度
        dots: true,
        arrows: false, // 矢印なし
        infinite: true
    });
});

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000, // 7秒ごとに切り替え
        fade: true,
        speed: 1000, // フェードの速度
        dots: true, // ドットナビゲーションを有効
        arrows: false, // 矢印なし
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        customPaging: function (slider, i) {
            return '<li class="custom-dot"></li>';
        }
    });

    // slick のデフォルトのドットナビゲーションを削除
    $('.slick-slider .slick-dots').addClass('custom-dots');
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0 }); // 30%見えたら発火
  
    fadeInElements.forEach(el => observer.observe(el));
  });

  $(document).ready(function(){
    // Slickスライダーの初期化
    $('.your-slider').slick({
      dots: true, // ドットナビゲーションを表示
      arrows: false, // 必要に応じて矢印を非表示
      autoplay: true, // 自動再生
      autoplaySpeed: 2000, // 自動再生の間隔
      fade: true // フェード遷移
    });
  
    // スライダーが初期化された後に、ドットにフェードイン効果を適用
    $('.slick-dots').css('opacity', 1);
  });
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("successMessage").style.display = "block";
    this.reset();
});
