<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React application</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
		    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

		 <style media="screen">
        #slider {
            position: relative;
            width: 20%;
            height: 25vw;
            object-fit: cover;
            margin: 100px auto;
            font-family: 'Helvetica Neue', sans-serif;
            perspective: 1400px;
            transform-style: preserve-3d;
        }

        input[type=radio] {
            position: relative;
            top: 108%;
            left: 50%;
            width: 18px;
            height: 18px;
            margin: 0 15px 0 0;
            opacity: 0.4;
            transform: translateX(-83px);
            cursor: pointer;
        }

        input[type=radio]:nth-child(5) {
            margin-right: 0px;
        }

        input[type=radio]:checked {
            opacity: 1;
        }

        #slider label,
        #slider label img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            color: white;
            font-size: 70px;
            font-weight: bold;
            border-radius: 3px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 400ms ease;
        }

        /* Slider Functionality */

        /* Active Slide */
        #s1:checked~#slide1,
        #s2:checked~#slide2,
        #s3:checked~#slide3,
        #s4:checked~#slide4,
        #s5:checked~#slide5 {
            box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
            transform: translate3d(0%, 0, 0px);
        }

        /* Next Slide */
        #s1:checked~#slide2,
        #s2:checked~#slide3,
        #s3:checked~#slide4,
        #s4:checked~#slide5,
        #s5:checked~#slide1 {
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
            transform: translate3d(110%, 0, -100px) rotateX(0deg) rotateY(16.1645deg) !important;
        }

        /* Next to Next Slide */
        #s1:checked~#slide3,
        #s2:checked~#slide4,
        #s3:checked~#slide5,
        #s4:checked~#slide1,
        #s5:checked~#slide2 {
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
            transform: translate3d(230%, 0, -250px) rotateX(0deg) rotateY(16.1645deg) !important;
        }

        /* Previous to Previous Slide */
        #s1:checked~#slide4,
        #s2:checked~#slide5,
        #s3:checked~#slide1,
        #s4:checked~#slide2,
        #s5:checked~#slide3 {
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
            transform: translate3d(-230%, 0, -250px) rotateX(0deg) rotateY(-16.1645deg) !important;
        }

        /* Previous Slide */
        #s1:checked~#slide5,
        #s2:checked~#slide1,
        #s3:checked~#slide2,
        #s4:checked~#slide3,
        #s5:checked~#slide4 {
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
            transform: translate3d(-110%, 0, -100px) rotateX(0deg) rotateY(-16.1645deg) !important;
        }

        .carousel {

    position: relative;
    top: 108%;
    left: 50%;

    margin: 0 15px 0 0;
    opacity: 0.4;
    transform: translateX(-83px);
    cursor: pointer;

            margin-top: 50px;
            background: blue;
        }

        .carousel-inner {
            height: 100px;
        }

        .carousel-caption {
            color: black !important;
            top: 50%;
        }

    </style>
    </head>
    <body>
        <div id="header"></div>
		<div id="contant"></div>
        <div id="About"></div>
		<div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="slider_heading">
                    <h1>Our Projects</h1>
                </div>
            </div>
        </div>
    </div>

    <section id="slider">
        <input hidden type="radio" name="slider" id="s1" checked>
        <input hidden type="radio" name="slider" id="s2">
        <input hidden type="radio" name="slider" id="s3">
        <input hidden type="radio" name="slider" id="s4">
        <input hidden type="radio" name="slider" id="s5">
        <div id="carouselExampleControls" class="carousel " data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active"  name="slider" id="s1">
                    <div class="carousel-caption">
                        <h3>Boyd W.</h3>
                        <p>TEXT</p>
                    </div>
                </div>
                <div class="carousel-item"  name="slider" id="s2">
                    <div class="carousel-caption">
                        <h3>Diane L</h3>
                        <p>TEXT</p>
                    </div>
                </div>
                <div class="carousel-item"  name="slider" id="s3">
                    <div class="carousel-caption">
                        <h3>Randall L</h3>
                        <p>TEXT</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption">
                        <h3>John D.</h3>
                        <p>TEXT</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption">
                        <h3>Jody B.</h3>
                        <p>TEXT</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev goingleft" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next goingright" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon " aria-hidden="true"></span>
                <span class="sr-only ">Next</span>
            </a>
        </div>
        <label for="s1" class="abc active" id="slide1"><img
                src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt=""></label>
        <label for="s2" class="abc" id="slide2"><img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt=""></label>
        <label for="s3" class="abc" id="slide3"><img src="https://wallpaperaccess.com/full/1154341.jpg" alt=""></label>
        <label for="s4" class="abc" id="slide4"><img src="https://wallpapercave.com/wp/wp2634222.jpg" alt=""></label>
        <label for="s5" class="abc" id="slide5"><img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt=""></label>
    </section>
		<div id="Footer"></div>


        <script src="{{mix('js/app.js')}}" ></script>
		 <script>
        var currentIdx = 1;
        var slideLength = $('.carousel-inner > .carousel-item').length;

        function goingleft() {
            if (currentIdx > 1 ) {
                currentIdx--;
            }
            else{currentIdx = 5;
                $("#slide"+currentIdx).addClass("active");}
        }
        function goingright()  {
            if (currentIdx < (slideLength)) {
                currentIdx++;
            }else{
                currentIdx=1;
                $("#slide"+currentIdx).addClass("active");

            }
        }

        $('.goingleft').click(function(){
            goingleft();
            li_ref = "#slider > .abc:nth-child("+currentIdx+")";
            $("#s"+currentIdx).attr("checked","true");

                $("#s"+((currentIdx)+1)).removeAttr("checked");



        });
        $('.goingright').click(function(){
            goingright();
            li_ref = "#slider > .abc:nth-child("+currentIdx+")";
            $("#s"+currentIdx).attr("checked","true");
            $("#s"+((currentIdx)-1)).removeAttr("checked");



        });
    </script>
    </body>
</html>
