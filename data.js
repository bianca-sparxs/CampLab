$(function () {

    const CELL_FORM =[
        [
        "M97.58,37.2C92.18,46.5,82.08,64,79.18,69C69.18,86.4,59.28000000000001,103.4,48.080000000000005,122.9H64.18C76.28,122.9,112.08000000000001,124.10000000000001,112.08000000000001,122.80000000000001C111.98000000000002,112.80000000000001,112.08000000000001,90.00000000000001,112.08000000000001,77.10000000000001C112.08000000000001,56.20000000000001,112.58000000000001,44.900000000000006,112.08000000000001,12.100000000000009C99.78,33.1,105.48,23.5,97.58,37.2Z",
    ],[ 
    "M48.3,12.1c-0.5,32.8,0,44.1,0,65c0,12.9,0.1,35.7,0,45.7c0,1.3,35.8,0.1,47.9,0.1c8.9,0,16.1,0,16.1,0c-11.2-19.5-21.1-36.5-31.1-53.9C78.3,64,68.2,46.5,62.8,37.2C54.9,23.5,60.6,33.1,48.3,12.1z"
        ]
    ]

    class Shape {

        //takes in the path of each SVG, which cshape in the array it is
        constructor(path, n) {
            this.container = path.parentNode;
            this.orig = path.getAttribute("d").toString();
            this.shape = path;
            this.pos = this.container.getBoundingClientRect();
            console.log(this.pos)

            //c_shapes are the completed shape that the svg path will morph into
            this.c_shape_list = [ "M87.5,20.4L60.6,66.9l-27.8,48.4l36.4-0.1l58.6-0.4l0-94.3h-21.8H87.5z", "M54.6,20.4H32.8l0,94.3l58.6,0.4l36.4,0.1L99.9,66.9L73,20.4H54.6z"];
            this.c_shape = this.setCshapes(n);
            this.d = this.setForms(n);

            this.directionx = this.findX();
            this.directiony = this.findY();
            // console.log("moving x is: " + this.directionx.toString() + " moving y is: " + this.directiony.toString())

            this.duration = 10000 * Math.random();

            this.timeline = anime.timeline({
                duration: this.duration
            });

            this.move = 
            anime({
                targets: this.container,
                translateX: this.directionx,
                translateY: this.directiony,
                easing: 'easeInOutQuad',
                direction: 'alternate',
                // delay: 2000,
                duration: 2000,
                loop: true
            });
            this.anime = 
            anime({
                targets: this.shape,
                d: this.d,
                easing: 'easeOutQuad',
                // easing: 'cubicBezier(.5, .05, .1, .3)',
                direction: 'alternate',
                duration: 2000,
                loop: true
            });

            
			// this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
			// this.DOM.el.addEventListener('touchend', this.mouseleaveFn);

            this.animate();
            
        }

        setCshapes(n) {
            return this.c_shape_list[n];
        }
        setForms(n) {
            return CELL_FORM[n];
        }

        findX() {
            let dist = prm_mrdn - this.pos.left
            if (this.pos.left < prm_mrdn) { 
                return dist - (this.pos.width / 2) 
            }
            else { return dist - (this.pos.width / 2) }
        }

        findY() {
            let dist = eqtr - this.pos.top
            if (this.pos.top < eqtr) { 
                return dist - (this.pos.top / 2) 
            }
            else { return dist - (this.pos.height / 2) }
        } 




        

        to_c() {

            anime({
                targets: this.shape,
                d: this.c_shape,
                duration: 200,
                // changeBegin: function(anim) { this.move.pause()}
            })
        }

        from_c() {
            // this.anime.play();
            // this.move.play();
            

            anime({
                targets: this.shape,
                d: this.orig,
                duration: 200,
            })
        }

        

        animate() {
            // this.timeline.add({

            // })
            
            this.move.play();
            this.anime.play();
            
            this.container.addEventListener('mouseenter', this.to_c.bind(this));
			this.container.addEventListener('mouseleave', this.from_c.bind(this));
        }

        
    }
    console.log($('.cir'));

    



    let shapes = [];
    let items = $('.cir').children('path'); //the specific SVG paths, not the container that holds it
    let counter = 0;
    //TODO: do jquery, on resize, calculate eath prime merdian and equator
    let earth = $('.container').get(0).getBoundingClientRect() //container holding all the SVG elements
    let eqtr = (earth.height + earth.top) / 2;
    let prm_mrdn = (earth.width + earth.left) / 2;
    
    
    // console.log(earth)



    // console.log(" prime meridian is " + prm_mrdn.toString() + " and equator is " + eqtr.toString())
    // let check = earth.right - $('.container').width() / 2;
    // console.log("apprx prm mer is: " + check.toString())

    

    items.each( function() {
        console.log(counter)
        // console.log(this.getBoundingClientRect())
        let obj = new Shape(this, counter)
        shapes.push(obj);
        counter++
        
    });

    $('.cir').hover (
        function () {
            $(shapes).each( function() {
                this.move.pause();
                this.anime.pause();
            })
        },

        function () {
            $(shapes).each( function() {
                this.anime.play();
                this.move.play();
            })
        }
    )

    // console.log("The items")
    // console.log(items)
    // console.log(shapes);


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
    // console.log(ihenile);

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