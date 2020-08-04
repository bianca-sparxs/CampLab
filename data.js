$(function () {

    const BASE_TIME = 1000;

    const CELL_FORM =[
        //a_shapes
        [
            "M278.9,415.5c-23.4-19.5-49.7-10.4-119.3-35.7c-7.1-2.6-11.5-7.1-19.3-17.2l0,0c-11.2-11.9-25.1-6.8-34.5,13.7l0,0c-3.8,15.5-9.2,23.1-18.5,27.6c-25.4,12.4-76.1,47.3-63.8,72.8c12.4,25.5,44.1,14,69.3,1.1c6.6-3.4,15.9-20.6,34.8-11.4l9.4,8.1c7.2,8.6,48.8,22.5,49.2-3.3l2.6-12.2c7.3-15.4,33.7,23.4,60.1,23.1C277.3,482,300.7,433.7,278.9,415.5z",
            "M308.1,401.2c-23.4-19.5-77.2,14.6-146.8-10.7c-7.1-2.6-17.2-35.1-17.2-35.1C125.6,363.1,96,367.2,88,366c0,0-7.3,24.8-16.5,29.4c-25.4,12.4-60.1,55.9-47.8,81.4c12.4,25.5,31.5,33.3,56.6,20.3c6.6-3.4,16.3-13.1,35.2-3.9l17.6-1.6c7.2,8.6,54.6,21.4,55-4.4l22,4.8c7.3-15.4,80.2,5.4,106.6,5.1C344.8,496.9,329.8,419.3,308.1,401.2z"
         ],
         //b_ shapes
        [ 
            "M113.43,94.05c3.77,2.11,4.4,9.99,8.66,10.72c5.55,0.95-0.49,8.75,5.82,9.1c13.67,0.76,25.69,2.52,33.61,0.07c7.5-2.32,6.03-21.53,2.75-32.12c-3.58-11.55-24.78-36.07-34.21-35.31c-9.52,0.77,7.28,21-6.87,24.05c-7.82,1.68-10.47,7.09-14.98,10.85c-3.26,2.72-6.87,2.39-5.63,8.11C103.36,93.14,109.88,92.06,113.43,94.05z",
            "M127.91,94.05c0,1.26,0,8.04,0,10.72c0,5.63,0,10.28,0,14.26c16.57,0,33.89,0,43.3,0c-2.13-3.54-12.73-22.12-18.3-31.71c-5.71-9.82-23.38-40.51-25-43.29c0,3.35,0,12.06,0,26.53c0,6.04-0.02,8.5-0.02,10.69c0.02,4.18,0.02,2.43,0.02,8.28C127.91,90.41,127.91,93.01,127.91,94.05z"
        ],
        //_c shapes so on so forth
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

            //c_shapes are the completed shape that the svg path will morph into;
            // list[0] = data, list[1] = data_b
            this.c_shape_list = [ "m 87.5,20.4L60.6,66.9l-27.8,48.4l36.4-0.1l58.6-0.4l0-94.3h-21.8H87.5z", "M101,118.6c0,1.3,10.3,0,13,0c13,0,31,0,36,0c6-5,9-8,16-15c0-11,1-45,0-59c-18-1-37-1-44-1c0,0-21,22-21,22c0,6,0,13.4,0,15.6c0,4.2,0,13.5,0,19.4C101,101.5,101,117.6,101,118.6z"];
            this.c_shape = this.setCshapes(n);
            this.d = this.setForms(n);

            this.directionx = this.findX();
            this.directiony = this.findY();
            // console.log("moving x is: " + this.directionx.toString() + " moving y is: " + this.directiony.toString())

            this.duration = BASE_TIME;

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
                d: [{value: this.d[0]}, {value: this.d[1] }],
                // easing: 'easeOutQuad',
                // easing: 'steps(7)',
                easing: 'cubicBezier(.5, .05, .1, .3)',
                direction: 'alternate',
                // delay: 500,
                duration: this.duration * 2,
                // elasticity: 200,
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
                duration: 3000,
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
            
            this.container.addEventListener('mouseenter', this.to_c.bind(this));
			this.container.addEventListener('mouseleave', this.from_c.bind(this));
        }

        
    }
    console.log($('.cir'));

    



    let shapes = [];
    let items = $('.point'); //the specific SVG paths, not the container that holds it
    let counter = 0;

    //TODO: do jquery, on resize, calculate eath prime merdian and equator
    let earth = $('.container').get(0).getBoundingClientRect() //container holding all the SVG elements
    let eqtr = (earth.height + (earth.top + window.scrollY)) / 2;
    let prm_mrdn =  earth.left + (earth.width / 2);
    
    console.log("the earth");
    console.log(earth)

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
            $(this).addClass("data")
        },

        function () {
            $(shapes).each( function() {
                this.anime.play();
                this.move.play();
            })
            $(this).removeClass("data")
        }
    )

    // console.log("The items")
    // console.log(items)
    console.log(shapes);

    anime({
        targets: '.dot',
        opacity: [1, 0, 0],
        direction: 'alternate',
        easing: 'easeInOutElastic',
        duration: (BASE_TIME * 2),
        loop: true
    })





    //problem with this probably you want a div to chnage shape when actually
    //you should have a svg inside the div and animate that

})