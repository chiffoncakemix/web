const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#menu-panel");
const menuItems = document.querySelectorAll("#menu-panel li");
const menuOptions = {
    duration:1400,
    easing:'ease',
    fill:'forwards',
};
//メニューを開く
menuOpen.addEventListener('click',() =>{
    //console.log("メニューを開く");
    menuPanel.animate({translate:['100vw',0]},menuOptions);

    //リンクをひとつずつ順に表示
    menuItems.forEach((menuItem,index) => {
        menuItem.animate(
        {
            opacity:[0,1],
            translate:['2rem',0],
        },
        {
            duration:2400,
            delay:300*index,
            easing:'ease',
            fill:'forwards',
        });
    });
});

//メニューを閉じる
menuClose.addEventListener('click',() =>{
    menuPanel.animate({translate:[0,'100vw']},menuOptions);
    //メニューリストを元の透明に戻す
    menuItems.forEach((menuItem) => {
        menuItem.animate({opacity:[1,0]},menuOptions);
    });
});
