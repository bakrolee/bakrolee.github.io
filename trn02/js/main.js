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
})

$('.main_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false, // 포커스는 클릭같은 것
});




///////////////////////////////////
});