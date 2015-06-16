package ;

import js.html.*;
import js.Lib;
import js.Browser;

class Main {

    public function new()
    {
    }
    public function canvas()
    {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        // Create gradient
        var grd = ctx.createLinearGradient(0,0,200,0);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(10,10,150,80);
    }
}
