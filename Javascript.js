window.onload = function( ev )
{
    const   ca = document.getElementById( 'main' );
    const   g = ca.getContext( '2d' );

    //document.onclick = inputChange;

    g.font = "55px monospace";  g.fillStyle = "#00ff00";
    g.fillText( "Javascriptで試しにプログラミングして見た！", 18, 75 );

    g.font = "48px monospace";  g.fillStyle = "#ffffff";
    g.fillText( "こんにちは世界！｜HelloWorld!", 30, 140 );

    g.font = "42px monospace";  g.fillStyle = "#dedede";
    g.fillText( "本サイトの開設日 2019/5/30", 1340, 890 );

}
//    ゲーム作ろうとして失敗したソースコード↓
//    function loop() {
//        window.requestAnimationFrame(loop);
//    }

//    loop();
