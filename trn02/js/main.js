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


// $('.product_slider').on('init reInit afterChange', function(){ 
//     let current = $('.product_slider .slick-center');
//     current.addClass('on').siblings().removeClass('on'); 
// });


$('.product_slider').slick({
    slidesToShow: 5,
    centerMode: true,
    arrows: false,
    dots: true,
    autoplay: true,
});

$('.product_list .s_left').on('click', function(){
    $('.product_slider').slick('slickPrev');
});
$('.product_list .s_right').on('click', function(){
    $('.product_slider').slick('slickNext');
});




$('.tab_link>li').on('click', function(){
    // console.log($(this), $(this).index());
    var idx = $(this).index();
    $('.tab_content>li').eq(idx).addClass('on').siblings().removeClass('on')  
    $(this).addClass('on').siblings().removeClass();
});




$('.footer #link').on('change', function(){
    var lik = $(this).val();
    // console.log(lik);
    if(lik) window.open(lik);  //if(lik) = 만약에 값이 있으면 링크를 띄워라
});


///////////////////////////////////
});