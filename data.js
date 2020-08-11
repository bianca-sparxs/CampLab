$(function () {

    const BASE_TIME = 1000;

    const CELL_FORM =[
        //_a shapes
        [
            "M296.3,415.6c-14.3-22.1-25.5-28.7-53.4-28.3c-15.5-0.5-66.9,39.7-71.5,45.2l-9,4c-11.8,14.4-32.1,1.5-50.5-0.9l-15.8-8.1c-9.5-1.2-8.2-20.1-38.4-16c-24.9,5.3-33.9,27.9-21.6,53.4c23,25.5,42,16.5,56.3,3.7c14.4-14.6,20.6-11.6,25.2-17.1l19-5.6c17.1,0.8,27.8,2.6,33.7,5.5l20.9,10.4c24,14.5,44.1,44.3,86.1,21.7C302.5,468.2,307.6,439.5,296.3,415.6z",
            "M307.1,400.3c-12.4-25.5-66.9,26.3-94.5,20.4c-53.8-11.5-64.5-57.6-68.6-65.6l0,0c-4,2-19.2,6-29.9,8.3l0,0c-5.9,1.4-14.7,2.2-25.3,2.7c-21.1,33.8-63.7,114.3-74.8,131.1c27.9-0.5,58.2,0.1,83,0c7.4,0,36.2,0,41.6,0l0,0c9.3-0.2,15.4-0.1,34.6-0.2l0,0c9.8,0,132,0.2,146,0.5C307.9,465.2,319.5,425.8,307.1,400.3z"
         ],
         //_b shapes
        [ 
            "M498.3,384.5c-24.1-6.7-62.3,15-104.8,7.4c-7.2-0.7-46.1-9.8-51.2-21.3c-1.1-8.3-11-11.8-17.1-5c-3.5,3.9-2.8,11.7,3.5,14.9c9.1,4.6,5.5-11.8,45.8,13.7c5.4,3.4,15.8,11.4,21.1,17.4c8.7,9.7,13.4,12.9,23.1,28.6c14.3,23.3,21.7,51.8,57.2,57.9c42.8,6.1,58.6-27.8,61.9-33.3c8-12.9,5.7-38.4-2.9-53.5C531.1,404.5,517.2,390.1,498.3,384.5z",
            "M515,435.5c-8-14.4-42-74.7-52.6-93.4c-2.3-6.8-8.3,9.4-10.6,21.4c-1.1,9-3,11.1-9.5,14.9c-7.9,3.8-13.6,18.4-17.6,23.1c-37.5,29.4-41.9,1.2-60.6,10.9c13.4,25.8-22,64.5-7.7,85.2c20.6-0.5,39.1,0,57.7-0.4c14.2,0,23.8,0,28.4,0c4.7,0,43.3-0.3,62,0c6.2,0,33-0.4,45.4,0C542.4,484.3,517.7,439.8,515,435.5z"
        ],
        //_c
        [
            "M342.7,328c-15.2-33.7-42.5-32.9-50.3-33.5l0,0c-6.2-0.4-30.7,6-41.7,22.8c-5.3,4.5-15.9,18.4-20.9-0.5c0.6-22.5-6.8-31.1-24.5-45.6c-38.2-31.3-4.7-44.5-3.6-52.7l0,0c1.1-2.9,1.6-6,1-9.3c-1.8-9.5-10.9-15.8-20.5-14c-9.5,1.8-15.8,10.9-14,20.5c0.6,3.3,2.1,6.1,4.2,8.5l0,0c4.8,4.3,24.4,21-2.1,43.9c-23.6,18.4-39,39.8-18.4,70.8c10.3,15.1,38.9,26,62.5,6.9c15.6-15.5,21.1-22.6,26.5-1.8c0.9,4.4,0.1,30.6,22.4,45.6c0,0,0,0,0,0l0,0c1.6,2.2,18.7,10.9,30.6,9.8c11.8,0,19.3-3.6,25.1-6.4c3.3-1.7,6.7-4.2,8.7-6c0.2-0.2,0.6-0.5,1-0.9l0,0c5.9-4.8,10.7-12.9,11.3-14.3l0,0C349,357,346.2,336.7,342.7,328z",
            "M341.5,393.6c-5-6.5-13.3-27.8-18.5-35.2l0,0c-3.2-5.7-5.2-8.1-7.6-10.4c-6.4-6.4-17.3-14.3-28-17.2c-3.9-1.1-15.6-4-20.6-6c-15.4-6.1-20.6-10.7-24.5-14.3l0,0c-2.5-2.1-5.6-5.4-6.6-6.5c-2-2.2-10.9-9.6-12.8-10.9c-6.9,11.3-13.1,16.7-14.7,18.4c-11,12.9-42.6,36.6-64.2,43.6l0,0c0.8,3.6,4.2,11.6,5.8,14.8c7.4,15,16.8,31.3,37.4,41.5c33.8,21.8,53.3,3.2,80.3-9.1c8.6-1.9,35.5-22.1,42.6,5.8c0,0,0,0,0,0c0,0,0,0,0,0l0,0c2.1,9.5,4,18.3,3.5,42.7c-0.2,9.7-0.1,29,5.6,46.8c10.6-0.4,26.5-0.4,37.1-0.4c0.2-1.4-9-6.5,2.3-36.9l0,0c3.1-9.1,13.6-32.3,5.4-47.9v0C350.8,403,348.8,403.2,341.5,393.6z"
        ],
        //d
        [
            "M475.7,261.7c-11.7-11.5-29.7-16-52.2-8.8c-29.1,3.6-6.1-19.3-6.7-37.9c0-4.1-1.4-12-5.2-18c-2.5-4-10.5-15.3-25.9-17.7c-27.4-3.5-38.2,17.6-39,19c-3.3,5.6-5.5,16.2-4,24.3c16.6,61.9,84.8,0.2,59.3,52.3c-7.5,18.4-4.2,39.8,4.6,49.3c15.3,22.4,51.8,26.1,73,1.8C493.6,310.8,495.4,280.9,475.7,261.7z",
            "M450.5,320.9c-2.1-3.8-9-16-11.2-20.3c-2.8-5.1-5.8-10.4-8.6-15c0-4.1-21.6-3.9-29.7,1.4c-3.4,2-11.2,6.1-21.2,12.4c-14.3,8.9-30.7,19.6-39.8,30c-7.8,9.5-24.4,11.7-22.9,19.8c16.8,19.5,12.8,38.9,37.7,56.7c16.2,10.9,26.5,10.1,41.5,10.1c38.3-8.3,38.2-26.3,59.4-50.6C469.7,350.2,464.2,345.2,450.5,320.9z"
        ],
        //e
        [
            "M99.42,102.69c3.77,2.11,8.39,1.86,12.16-0.24c4.42-2.45,10.01-4.49,16.32-4.14c13.67,0.76,19.09,12.07,27.02,9.62c7.5-2.32,12.63-15.52,9.34-26.11c-3.58-11.55-16.4-17.52-25.83-16.76c-9.52,0.77-10.04,7.95-24.18,10.99c-7.82,1.68-11.71,0.36-16.21,4.12c-3.26,2.72-6.74,8.02-5.5,13.74C93.33,97.54,95.87,100.7,99.42,102.69z"
        ],
        //f
        ["M99.42,102.69c3.77,2.11,8.39,1.86,12.16-0.24c4.42-2.45,10.01-4.49,16.32-4.14c13.67,0.76,19.09,12.07,27.02,9.62c7.5-2.32,12.63-15.52,9.34-26.11c-3.58-11.55-16.4-17.52-25.83-16.76c-9.52,0.77-10.04,7.95-24.18,10.99c-7.82,1.68-11.71,0.36-16.21,4.12c-3.26,2.72-6.74,8.02-5.5,13.74C93.33,97.54,95.87,100.7,99.42,102.69z"],
        //g
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
            
            // this.shape.addEventListener('mouseenter', this.to_c.bind(this));
			// this.shape.addEventListener('mouseleave', this.from_c.bind(this));
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

    // $('.cir').hover (
    //     function () {
    //         $(shapes).each( function() {
    //             this.move.pause();
    //             this.anime.pause();
    //         })
    //         $(this).addClass("data")
    //     },

    //     function () {
    //         $(shapes).each( function() {
    //             this.anime.play();
    //             this.move.play();
    //         })
    //         $(this).removeClass("data")
    //     }
    // )

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