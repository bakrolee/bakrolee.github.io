$(function(){
/////////////////////////////////

$('.top_banner i').on('click', function(){
    $('.top_banner').slideUp(1500);
});

$('.main_slider').on('init reInit afterChange', function(){ //afterChange = 슬라이드가 넘어간 뒤, 직후
    let current = $('.slick-current');
    current.addClass('on').siblings().removeClass('on'); 
    //addClass만 하면 .on이 계속 붙어있는 상태
    //.siblings().removeClass('on'); 얘를 붙여줘야 떼짐. -> 안 떼지면 처음 이후로는 계속 빨간색으로 남아있음. 토글이랑 비슷
});

$('.main_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false, // 포커스는 클릭같은 것
});

$('.movie .dec i:nth-of-type(1)').on('click', function(){
    $('.movie video').trigger('play');
});

$('.movie .dec i:nth-of-type(2)').on('click', function(){
    $('.movie video').trigger('pause');
});

$('#myMovie').YTPlayer({
    videoURL:'https://youtu.be/aR-KAldshAE',
                containment:'.utube',  
                autoPlay:true, mute:true, 
                startAt:0, 
                opacity:1,
                showControls: false,
                playOnlyIfVisible: true,
});

$('.utube i:nth-of-type(1)').on('click', function(){
    $('#myMovie').YTPPlay();
});

$('.utube i:nth-of-type(2)').on('click', function(){
    $('#myMovie').YTPPause();
});


/// 5.10 개인연습 (선행)

$('.product_slider').slick({
    arrows: false,
    slidesToShow: 5,
    dots: true,
    autoplay: false,
});

$('.product .xi-arrow-left').on('click', function(){
    $('.product_slider').slick('slickNext');
});
$('.product .xi-arrow-right').on('click', function(){
    $('.product_slider').slick('slickPrev');
});


$('.tab_menu li').on('click', function(){
    $('.tab_menu li').addClass('on');
});

///////////////////////////////////
});