//TODO!!! TAKE OUT ALL THE SVGS
//dude you can literally just have one svg element and call the translate code on the paths, but like
//dang refactoring code tho :<
$(function () {

    const BASE_TIME = 1200;

    const CELL_FORM =[
        //_a shapes bottom left
        [
            "M296.3,415.6c-14.3-22.1-25.5-28.7-53.4-28.3c-15.5-0.5-66.9,39.7-71.5,45.2l-9,4c-11.8,14.4-32.1,1.5-50.5-0.9l-15.8-8.1c-9.5-1.2-8.2-20.1-38.4-16c-24.9,5.3-33.9,27.9-21.6,53.4c23,25.5,42,16.5,56.3,3.7c14.4-14.6,20.6-11.6,25.2-17.1l19-5.6c17.1,0.8,27.8,2.6,33.7,5.5l20.9,10.4c24,14.5,44.1,44.3,86.1,21.7C302.5,468.2,307.6,439.5,296.3,415.6z",
            "M307.1,400.3c-12.4-25.5-66.9,26.3-94.5,20.4c-53.8-11.5-64.5-57.6-68.6-65.6l0,0c-4,2-19.2,6-29.9,8.3l0,0c-5.9,1.4-14.7,2.2-25.3,2.7c-21.1,33.8-63.7,114.3-74.8,131.1c27.9-0.5,58.2,0.1,83,0c7.4,0,36.2,0,41.6,0l0,0c9.3-0.2,15.4-0.1,34.6-0.2l0,0c9.8,0,132,0.2,146,0.5C307.9,465.2,319.5,425.8,307.1,400.3z"
         ],
         //_b shapes bottom right
        [ 
            "M498.3,384.5c-24.1-6.7-62.3,15-104.8,7.4c-7.2-0.7-46.1-9.8-51.2-21.3c-1.1-8.3-11-11.8-17.1-5c-3.5,3.9-2.8,11.7,3.5,14.9c9.1,4.6,5.5-11.8,45.8,13.7c5.4,3.4,15.8,11.4,21.1,17.4c8.7,9.7,13.4,12.9,23.1,28.6c14.3,23.3,21.7,51.8,57.2,57.9c42.8,6.1,58.6-27.8,61.9-33.3c8-12.9,5.7-38.4-2.9-53.5C531.1,404.5,517.2,390.1,498.3,384.5z",
            "M515,435.5c-8-14.4-74.1-132.4-84.7-151.1c-2.3-6.8-11.1-13.6-13.4-1.6c-21.7,0-40.5,18.9-47,22.7c-7.9,3.8-26,15.2-33,24.9c-46.5,18.9-2.5,56.5-34,65c13.4,25.8,2.1,81.6,16.4,102.3c20.7-0.1,76.1-0.2,94.8-0.4c14.2,0,23.8,0,28.4,0c4.7,0,43.3-0.3,62,0c6.2,0,33-0.4,45.4,0C542.4,484.3,517.7,439.8,515,435.5z"
        ],
        //_c landlocked
        [
            "M342.7,328c-15.2-33.7-42.5-32.9-50.3-33.5l0,0c-6.2-0.4-30.7,6-41.7,22.8c-5.3,4.5-15.9,18.4-20.9-0.5c0.6-22.5-6.8-31.1-24.5-45.6c-38.2-31.3-4.7-44.5-3.6-52.7l0,0c1.1-2.9,1.6-6,1-9.3c-1.8-9.5-10.9-15.8-20.5-14c-9.5,1.8-15.8,10.9-14,20.5c0.6,3.3,2.1,6.1,4.2,8.5l0,0c4.8,4.3,24.4,21-2.1,43.9c-23.6,18.4-39,39.8-18.4,70.8c10.3,15.1,38.9,26,62.5,6.9c15.6-15.5,21.1-22.6,26.5-1.8c0.9,4.4,0.1,30.6,22.4,45.6c0,0,0,0,0,0l0,0c1.6,2.2,18.7,10.9,30.6,9.8c11.8,0,19.3-3.6,25.1-6.4c3.3-1.7,6.7-4.2,8.7-6c0.2-0.2,0.6-0.5,1-0.9l0,0c5.9-4.8,10.7-12.9,11.3-14.3l0,0C349,357,346.2,336.7,342.7,328z",
            "M353.3,405c-0.8-3.7-15-8.4-20.3-27.6l0,0c-1.7-8.3-13.8-24.9-14.6-29.3c-1.5-7.7,8.8-2.5,0.7-16.2c-8.8-15-19.3-36.5-41.2-41.4c-14.3-8.2-31.7-25.6-34.4-28l0,0c-1.5,1.5-1.3,2.9-3.5,6c-3.5,5-7,14.9-13.1,22.4c-1.3,1.6-6.8,7.9-10.2,11c-7.5,7-8.9,8.4-16.3,14.5l0,0c-7.2,8.2-30.5,24-35.9,27.9c-19,14.9-28.2,2.1-17.3,23.4c12.1,23.7,34.2,44.5,53.7,51.7c22.6,8.3,47.1-7,55.7-11.3c0,0,0,0,0,0c0,0,0,0,0,0l0.6,0c0,1.1,14.1-6.5,15.1-7c12.7-6.7,13.8-3.2,22.5-4.8c9.5-1.8,18.3-0.4,22,0.3c0.6,0.1,4.2,0.6,5.2,0.8l0,0c1.4-0.2,10.9,3.1,13.8,3.4l0,0C341,401.4,346.4,405.8,353.3,405z"
        ],
        //e top point
        [
            "M358.2,157.2c-4.2-1-10.5-3.3-14.6-3.8l0,0c-12.9-1.5-16.3-2.6-24.6,4.8c-6.1,5.5-7.2,16.9-2.1,23.5c3.5,5.5,9.8,10.2,15.8,9.5c16.8,3.7,13.8,12.9,14.8,17c1.6,6.6,1.8,14.7,5.6,14.7c4.2,0,5-10.9,5.3-14c0-6.8,1-12.7,5.2-17.9c7-5.5,7.9-3.3,18.1-3.5l0,0c9.5,3.6,26.7-11.7,2.7-22.7c-6.2-2.9-9.9-3.3-18-5.3C364,159,358.2,157.2,358.2,157.2z",
            "M357,154.3c-3.6-6.4-53.9-95.8-74.6-132.6l0,0c-15.8,28.2-48.1,82-53.4,94.9c13.5,24.8,37.6,98.5,14.6,145.9c3.5,5.5,25.7,29.1,38.4,30.9c11.3,0.5,39.8,43.7,40.8,47.8c7.6-1.3,15.6-9.8,18.6-12.5c3.2-2.8,9.1-8.8,19-16.1c9.8-6,14.3-8.9,21.5-14.5c28.8-18.5,35.4-15,48.5-13.7l0,0c-7.8-14.6-22.7-40.2-35.1-62.3c-3.4-6-15.7-28.2-20.1-35.7C369.7,176.8,357,154.3,357,154.3z"
        ],
        //f sidey
        [
            "M255.6,197.3c5.9-6,5.7-15.7-0.3-21.6c-3.5-3.4-8.5-4.3-10.6-4.3c-4.2,0-7.2,1.6-10,3.7c-5.1,3.8,5.1-42.5-3.1-50.6c-6-5.9-46.3,74.6-52.2,80.7c-3.5,3.6-13.5,14.9-12.8,19.5l0,0c2.4,15.1-20.2,43.7-35.2,46.1l0,0c-3.2,0.5-21.8,19.9-24.2,22.4c-5.9,6-5.7,10.9,0.4,16.8c3,2.9-29.7,47.3-25.8,47.3l0,0c15.3-0.2,43.4,0,59.1-2.1c12.8-2,24-15.3,27.2-12.1c5.9,5.7,15.3,5.6,21.1-0.3c2.2-2.3,3.6-5.2,4-8.1c0.8-5.5,4.1-8.2,9.4-7.6c5.6,2.5,12.3,1.5,16.8-3.2c5-5.1,5.5-12.9,1.7-18.6c-6.3-13.4-2.8-23.2,10.5-29.8c0.2-0.1,6.9-2.6,8.6-11.1c1.1-6-1.9-10.6-2-10.7c0,0,12.1-21,12.1-21c-7.5-13.2-11.2-24.8,1.7-32.7c0,0,1.5-1.4,1.5-1.4C255.3,197.7,255.2,197.6,255.6,197.3z",
            "M253.6,198.4c0.3-2.8-1.2-12.5-2.5-17.6c-1.1-4.3-2-9.3-2.6-11.3c-1-3.2-3-8.8-4-12.2c-1.4-5-7.4-31.7-15.6-39.8c-6.4,10.3-45.8,80.1-49.6,87.6c-2.7,5.3-8.7,15-12.6,22l0,0c-7,12.4-21.7,38.6-27.3,48.4l-6.4,11.6c-2.8,4.7-6.1,10.8-7.7,13.7c-1,1.7-2.8,4.7-7.1,12.3c-5.1,9.3-15.4,27.8-29.6,53l0.2,0.1c21.7,1,41.7-5.7,55.4-10.6c12.6-4.5,22.4-12.1,23.9-12.6c1.3-0.4,13.3-10.1,15.3-11.6c3.4-2.4,4.7-3.7,7.1-5.7c4.1-3.1,5.4-3.8,7.5-5.4c3-2.6,5.1-4.5,9.1-8.6c5.1-5,7.4-6.2,11.1-10.4c9.1-8.4,15.4-17.3,18.1-23.8c0.1-0.2,4-5.7,8.1-13.6c1.5-3.1,3.4-9.9,3.3-10c0,0,4.8-17.4,4.8-17.5c1.5-6.9,0.1-11,1.4-20.9c0,0,0,0,0,0C255.6,214.8,253.6,198.9,253.6,198.4z"
        ],

        ]


    class Shape {

        //takes in the path of each SVG, which cshape in the array it is
        constructor(path, n) {
            this.container = path.parentNode;
            this.orig = path.getAttribute("d").toString();
            this.shape = path;
            this.pos = this.container.getBoundingClientRect();
            // console.log(this.pos)

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
                easing: 'easeInOutQuad',
                // easing: 'linear',
                duration: this.duration,
                delay: anime.stagger(100),
                // easing: 'steps(7)',
                complete: function() {this.restart();}
            });

            //i only did this because i just wanted to have a var name is igbo let me b
            this.biakota = 
            {
                targets: this.container,
                translateX: this.directionx,
                translateY: this.directiony,
                translateZ: 0,
                delay: 500, 
            };

            this.move.add(this.biakota)
            .add({
                targets: this.shape,
                d: [ 
                    {value: this.d[0], duration: (this.duration * 3) / 5}, 
                    {value: this.d[1], duration: (this.duration * 2) / 5}
                ]
            }, '-=' + this.duration.toString())
            .add({
                targets: this.container,
                delay: this.duration * 2.5,
                translateX: 0,
                translateY: 0,
                translateZ: 0,

            })
            .add({
                targets: this.shape,
                d: [ 
                    {value: this.d[0]}, 
                    {value: this.orig}
                ]
            }, '-=' + this.duration.toString())
            
            
			// this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
            // this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
            
            //this function to call onhover event listners on this.shape or container, havent decided
            //may not even want to have on hover effect on a moving object at all
            //cuz you can't techinically hover over moving objects
            this.animate();
            
        }

        setCshapes(n) {
            return this.c_shape_list[n];
        }
        setForms(n) {
            return CELL_FORM[n];
        }

        findX() { // return x distance from prime meridian of container that holds all SVGS
            let dist = prm_mrdn - this.pos.left
            if (this.pos.left < prm_mrdn) { 
                return dist - (this.pos.width / 2) 
            }
            else { return dist - (this.pos.width / 2) }
        }

        findY() { //return y distance from equator of container that holds all SVGS
            let trueY = this.pos.top + window.scrollY; //becuz this.top changes relative to viewport aka changes on scroll
            let dist = eqtr - trueY
            if (trueY < eqtr) { 
                return dist - (this.pos.height / 2) 
            }
            else { return dist - (this.pos.height / 2) }
        } 




        
        //probably gonna take this out make make curcles just form data bricks
        //the way i hanfdle onhover is too jank
        to_c() {

            anime({
                targets: this.shape,
                d: this.c_shape,
                duration: 3000,
                // changeBegin: function(anim) { this.move.pause()}
            })
        }

        from_c() {
            // this.move.play();
            

            anime({
                // targets: this.shape,
                // d: this.orig,
                // duration: 200,
            })
        }

        

        animate() {            
            this.move.play();

            // this.shape.addEventListener('mouseenter', this.to_c.bind(this));
			// this.shape.addEventListener('mouseleave', this.from_c.bind(this));
        }

        
    }
    // console.log($('.cir'));

    



    let shapes = [];
    let items = $('.point'); //the specific SVG paths, not the container that holds it
    let counter = 0;

    //TODO: do jquery, on resize, calculate eath prime merdian and equator
    let earth = $('.container').get(0).getBoundingClientRect() //container holding all the SVG elements
    let eqtr = (earth.height + (earth.top + window.scrollY)) / 2;
    let prm_mrdn =  earth.left + (earth.width / 2);
    
    // console.log("the earth");
    // console.log(earth)

    // console.log(window.scrollY)



    // console.log(" prime meridian is " + prm_mrdn.toString() + " and equator is " + eqtr.toString())
    // let check = earth.right - $('.container').height() / 2;
    // console.log("apprx prm mer is: " + check.toString())

    

    items.each( function() {
        // console.log(counter)
        // console.log(this.getBoundingClientRect())
        let obj = new Shape(this, counter)
        shapes.push(obj);
        counter++
        
    });

    // $('.cir').hover (
    //     function () {
    //         $(shapes).each( function() {
    //             this.move.pause();
    //         })
    //         $(this).addClass("data")
    //     },

    //     function () {
    //         $(shapes).each( function() {
    //             this.move.play();
    //         })
    //         $(this).removeClass("data")
    //     }
    // )

    // console.log("The items")
    // console.log(items)
    // console.log(shapes);





    //problem with this probably you want a div to chnage shape when actually
    //you should have a svg inside the div and animate that

})