$("body").prepend("<h1>jqueryでh1タグを上に表示したよ</h1>");
$("body").append("<h1>jqueryでh1タグを下に表示したよ</h1>");

$("body").css("color","#00ffff");
$(".h1").fadeOut(1000);
$(".h1").fadeIn(2000);
$(".h1").html("jqueryで昼間テキストを表示したよ");
//ローディング画面の表示

/*
$(window).on('load',function(){
    $("#loading").delay(1500).fadeOut('slow');
    //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#loading_box").delay(1200).fadeOut('slow');//ローディング画像を1.2秒（1200ms）待機してからフェードアウト
});
*/
