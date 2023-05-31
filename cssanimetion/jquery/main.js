function animations(){
    //animationTrigger要素の左の位置を持ってくる
    $('.animationsTrigger').each(function(){
        const position = $(this).offset().top;
        //取ってきたものをpositionに入れる
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if(scroll > position - windowHeight + 100){
            $(this).addClass('animations');
        }else{
            $(this).removeClass('animations');
        }
    })
}

//windowをスクロールした時にアニメーションという関数を発動してくださいねという意味
$(window).scroll(function(){
    animations();
});