$(function () {

    const CELL_FORM =[
        [
            "M138.35,81.18c-1.18-4.71,11.95-31.26-8.79-34.81c-18.93-3.24-22.22,14.82-26.2,32.61c-2.54,11.38-15.19,27.37-5.68,33.34c6,3.77,2.07,3.49,18.5,4.76c18.79,1.45,12.9,3.51,18.79,0C144.29,111.52,141.12,92.25,138.35,81.18z",
            "M127.91,81.18c0-4.86,0.35-20.6,0-37.16c-9.17,15.95-10.86,18.88-20.16,34.96c-5.86,10.9-19.6,32.79-23.14,40.04c1.16,0,13.69,0,31.57,0c1.37,0,10.95,0,11.73,0C127.91,117.55,127.91,93.05,127.91,81.18z"
         ],
        [ 
            "M113.43,94.05c3.77,2.11,4.4,9.99,8.66,10.72c5.55,0.95-0.49,8.75,5.82,9.1c13.67,0.76,25.69,2.52,33.61,0.07c7.5-2.32,6.03-21.53,2.75-32.12c-3.58-11.55-24.78-36.07-34.21-35.31c-9.52,0.77,7.28,21-6.87,24.05c-7.82,1.68-10.47,7.09-14.98,10.85c-3.26,2.72-6.87,2.39-5.63,8.11C103.36,93.14,109.88,92.06,113.43,94.05z",
            "M127.91,94.05c0,1.26,0,8.04,0,10.72c0,5.63,0,10.28,0,14.26c16.57,0,33.89,0,43.3,0c-2.13-3.54-12.73-22.12-18.3-31.71c-5.71-9.82-23.38-40.51-25-43.29c0,3.35,0,12.06,0,26.53c0,6.04-0.02,8.5-0.02,10.69c0.02,4.18,0.02,2.43,0.02,8.28C127.91,90.41,127.91,93.01,127.91,94.05z"
        ],
        ["M99.42,102.69c3.77,2.11,8.39,1.86,12.16-0.24c4.42-2.45,10.01-4.49,16.32-4.14c13.67,0.76,19.09,12.07,27.02,9.62c7.5-2.32,12.63-15.52,9.34-26.11c-3.58-11.55-16.4-17.52-25.83-16.76c-9.52,0.77-10.04,7.95-24.18,10.99c-7.82,1.68-11.71,0.36-16.21,4.12c-3.26,2.72-6.74,8.02-5.5,13.74C93.33,97.54,95.87,100.7,99.42,102.69z"]
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
            this.c_shape_list = [ "m 87.5,20.4L60.6,66.9l-27.8,48.4l36.4-0.1l58.6-0.4l0-94.3h-21.8H87.5z", "m 54.6,20.4H32.8l0,94.3l58.6,0.4l36.4,0.1L99.9,66.9L73,20.4H54.6z"];
            this.c_shape = this.setCshapes(n);
            this.d = this.setForms(n);

            this.directionx = this.findX();
            this.directiony = this.findY();
            // console.log("moving x is: " + this.directionx.toString() + " moving y is: " + this.directiony.toString())

            this.duration = 2000;

            this.move = anime.timeline({
                duration: this.duration,
                easing: 'easeInOutQuad',
                // easing: 'steps(7)',
                complete: function() {this.restart();}
            });

            this.biakota = 
            {
                targets: this.container,
                // keyframes: [ 
                //     {translateX: this.directionx,
                //     translateY: this.directiony,},
                //     {translateX: 0,
                //         translateY: 0, delay: 5000}


                // ],
 
                translateX: this.directionx,
                translateY: this.directiony,
                // direction: 'alternate',
                // delay: 2000,
                duration: this.duration,
                // loop: true
            };
            this.anime = 
            anime({
                targets: this.shape,
                d: [{value: this.d[0]}, {value: this.d[1]}],
                // easing: 'easeOutQuad',
                // easing: 'steps(7)',
                easing: 'cubicBezier(.5, .05, .1, .3)',
                direction: 'alternate',
                // delay: 500,
                duration: this.duration * 2,
                loop: true
            });

            this.move.add(this.biakota)
            .add({
                targets: this.shape,
                // fill: '#1a34f2',
                // duration: 8000
            })
            // .add({
            //     targets: this.shape,
            //     // fill: '#000000',
            //     // duration: 500
            // })
            .add({
                targets: this.container,
                translateX: 0,
                translateY: 0,
                // duration: this.duration
            })

            
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
            let trueY = this.pos.top + window.scrollY; //becuz this.top changes relative to viewport aka changes on scroll
            let dist = eqtr - trueY
            if (trueY < eqtr) { 
                return dist - (this.pos.height / 2) 
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
                // targets: this.shape,
                // d: this.orig,
                // duration: 200,
            })
        }

        

        animate() {
            this.move.add({
                // targets: this.shape,
                // fill: '#123412'

            })
            
            this.move.play();
            // this.anime.play();
            
            this.shape.addEventListener('mouseenter', this.to_c.bind(this));
			this.shape.addEventListener('mouseleave', this.from_c.bind(this));
        }

        
    }
    console.log($('.cir'));

    



    let shapes = [];
    let items = $('.cir').children('path'); //the specific SVG paths, not the container that holds it
    let counter = 0;

    //TODO: do jquery, on resize, calculate eath prime merdian and equator
    let earth = $('.container').get(0).getBoundingClientRect() //container holding all the SVG elements
    let eqtr = (earth.height + (earth.top + window.scrollY)) / 2;
    let prm_mrdn = (earth.width + earth.left) / 2;
    
    
    // console.log(earth)

    // console.log(window.scrollY)



    console.log(" prime meridian is " + prm_mrdn.toString() + " and equator is " + eqtr.toString())
    // let check = earth.right - $('.container').height() / 2;
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
    console.log(shapes);





    //problem with this probably you want a div to chnage shape when actually
    //you should have a svg inside the div and animate that

})