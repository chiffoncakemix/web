//ブラウザで読み込んだ時に呼び出す関数 即時関数
$(() => {
    console.log("call.");
    $.ajax({
            type:"POST", //二つ以上の要素を記述するときは,が必要
            dataType:"json", //サーバーから返されるデータの型
            url:"./ajax.json" //同じ階層にあるmember.json
        })
        .done((data) =>{    //通信に成功した時はdataという変数に取得した値が返ってくる
            console.log("success",data);
        })
        .fail((error) => {
            console.log("fail",error);
        })
        .always(() => {
            console.log("ajaxComplete");
        });
        //doneは通信に成功した時、failは通信に失敗した時、alwaysは成功失敗関係なく処理が終了した後に実行
    });
$('#btn').click(function(){
    alert("click");
});