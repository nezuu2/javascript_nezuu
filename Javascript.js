window.onload = function( ev )
{
    const   ca = document.getElementById( 'main' );
    const   g = ca.getContext( '2d' );

    //document.onclick = inputChange;

    g.font = "55px monospace";  g.fillStyle = "#00ff00";
    g.fillText( "Javascriptで試しにプログラミングして見た！", 18, 75 );

    g.font = "48px monospace";  g.fillStyle = "#ffffff";
    g.fillText( "ボタンを下に表示してみた！。", 30, 140 );

    g.fillStyle = "#6f6f6f",
    g.fillRect( 22, 160, 700, 80 );

    g.font = "48px monospace";  g.fillStyle = "white";
    g.fillText( "試しにクリックしてみてください！。", 30, 140+72 );

    g.font = "42px monospace";  g.fillStyle = "#dedede";
    g.fillText( "本サイトの開設日 2019/5/30", 1340, 890 );

}
//    function loop() {
//        window.requestAnimationFrame(loop);
//    }

//    loop();