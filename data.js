$(function () {

    const DATA_POINT = 200;
    const DOT_SIZE  = 10;
    const PG_WIDTH = window.innerWidth;
    const PG_HEIGHT = window.innerHeight;

    function tinyedot(x, y) {
        let data =  {
            x: x,
            y: y,
            r: DOT_SIZE
        }
        return data
    }

    function dotarray() {
        ihenile = [];
        for (var i = 0; i < DATA_POINT; i++) {
            var x = PG_WIDTH * Math.random()
            var y = PG_HEIGHT * Math.random()
            ihenile.push(tinyedot(x, y))
        }
    }

    let ihenile = [];
    dotarray();
    console.log(ihenile);

    let cnvs = $("#ndeewo").get(0);
    var ctx = cnvs.getContext("2d");

 

    function initDots(selector) {
        for ( let x = 0; x < ihenile.length; x++) {
            ctx.strokeStyle = "blue"
            ctx.beginPath();
            ctx.arc(ihenile[x].x, ihenile[x].y, DOT_SIZE, 0, Math.PI *2, false);
            ctx.stroke();

            $(selector).add("<span></span>")
        }

    }

    function draw () {
        cnvs.width = $(window).width();
        cnvs.height = window.innerHeight;
        initDots(cnvs)
    }
    
    draw();

})