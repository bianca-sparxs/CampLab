$(function () {


    class Shape {
        //takes in the path of each SVG, which cshape in the array it is
        constructor(path, n) {
            this.container = path.parentNode;
            this.shape = path
            this.c_shape_list = [ "M87.5,20.4L60.6,66.9l-27.8,48.4l36.4-0.1l58.6-0.4l0-94.3h-21.8H87.5z", "M54.6,20.4H32.8l0,94.3l58.6,0.4l36.4,0.1L99.9,66.9L73,20.4H54.6z"];
            this.c_shape = this.setCshapes(n);
            this.directionx = 1000 * Math.random();
            this.directiony = 1000 * Math.random();
            this.duration = 10000 * Math.random();
            this.anime = 
            {
                targets: this.shape,
                d: this.c_shape,
                // translateX: this.directionx,
                // translateY: this.directiony,
                easing: 'easeInOutQuad',
                direction: 'alternate',
                delay: 2000,
                duration: this.duration,
                loop: true
            };



            this.animate();

            
        }

        setCshapes(n) {
            return this.c_shape_list[n];
        }

        to_c() {
            // move.pause();
            console.log("mouse entered");
            anime({
                targets: this.parentNode,
                duration: 200,
                translateX: 200
                // changeBegin: function(anim) { moving.pause()}
            })
        }

        from_c() {
            // move.play();
            console.log("mouse out")

            anime({
                targets: this.parentNode,
                duration: 2000,
                translateX: -200
            })
        }

        

        animate() {
            anime(this.anime);
            $(this.shape).hover( this.to_c, this.from_c)
        }

        
    }
    console.log($('.cir'));

    let c_shape_path = [ "M87.5,20.4L60.6,66.9l-27.8,48.4l36.4-0.1l58.6-0.4l0-94.3h-21.8H87.5z", "M54.6,20.4H32.8l0,94.3l58.6,0.4l36.4,0.1L99.9,66.9L73,20.4H54.6z"];


    



    let shapes = [];
    let items = $('.cir').children('path');
    let counter = 0

    items.each( function() {
        console.log(counter)
        // console.log(this.parentNode)
        let obj = new Shape(this, counter)
        // obj.c_shape = c_shape_path[counter]
        shapes.push(obj);
        counter++
        
    });

    console.log("The items")
    console.log(items)
    console.log(shapes);


    // shapes.each(animate);

    // for (var i = 0; i < shapes.length; i++){
    //     animate(shapes[i])
    // }
    // function onHover () {

    // }




    //problem with this probably you want a div to chnage shape when actually
    //you should have a svg inside the div and animate that

    //anime js doesn't take var

    //TMRW: use svg, change into something, add multiple svg's
    // var moving = anime({
    //     targets: '.cir',
    //     translateX: 250,
    //     translateY: 10,
    //     easing: 'easeInOutSine',
    //     duration: 3000,
    //     direction: 'alternate',
    //     loop: true
    //   });

    // var circle = $('.circle')
    // var sveg = $('.cir ').children('path')
    // var path = $('.points')
    // // console.log(path)
    // // console.log(sveg)

    
    // function onHover () {
    //     anime({
            
    //     })
    // }

    
    // $('.cir').hover(
    //     function() {
    //         // moving.pause();
    //         anime({
    //             targets: ".point",
    //             duration: 2000,
    //             d: "M87.5,20.4L60.6,66.9l-27.8,48.4l36.4-0.1l58.6-0.4l0-94.3h-21.8H87.5z",
    //             changeBegin: function(anim) { moving.pause()}
    //         })
            
    //     },
    //     function () {
    //         anime({
    //             targets: ".point",
    //             duration: 5000,
    //             d: "M29.4,54.1c-6.6,8.4-8.8,14.2-8,20c1.7,12.2,16.7,22.6,26.7,20c11.5-3,11.3-22.1,18.7-22.7c11.5-0.9,15.1,45.1,32,48C115,122.1,147,86,137.5,52.7c-5.8-20.1-25-33.1-42.7-36C62.8,11.4,40.6,39.8,29.4,54.1z",
    //             changeComplete: function(anim) {
    //                 console.log("done!");
    //                 moving.play();
    //             }
    //         })
            
    //     }
    // )

    // const items = $()

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