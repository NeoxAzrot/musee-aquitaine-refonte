var slide_actual;
var duration = 7000;
var autoUpdateInterval;

var tab_slide = [
    'assets/images/slideshow_home/slide_1.jpg',
    'assets/images/slideshow_home/slide_2.jpg',
    'assets/images/slideshow_home/slide_3.jpg',
    'assets/images/slideshow_home/slide_4.jpg',
    'assets/images/slideshow_home/slide_5.jpg'
]


function lancement() {
    for(var i = 1; i < tab_slide.length + 1; i++) {
        jQuery($(".all_slide")).append('<div class="slide slide' +i+ '"></div>');
        $('.slide' + i).css("background-image", "url("+tab_slide[i-1]+")");
    }

    for(var i = 0; i < tab_slide.length; i++) {
        jQuery($(".all_button")).append('<span class=button onclick=buttonClick(' +i+ ')></span>');
    }

    slide_actual = Math.ceil(tab_slide.length/2) - 1;

    $(".button").eq(slide_actual).addClass("active");

    update();

    autoUpdateInterval = setInterval(autoUpdate, duration);
}


function buttonClick(index) {
    $(".button").eq(slide_actual).removeClass("active");
    $(".button").eq(index).addClass("active");

    slide_actual = index;

    update();
    clearMyInterval();
}


$("#slide_left").click(function() {
    if(slide_actual == 0) {
        $(".slide").eq(4).addClass("left");
        slide_actual = tab_slide.length - 1;
        $(".button").eq(0).removeClass("active");
        $(".button").eq(slide_actual).addClass("active");
    } else {
        $(".button").eq(slide_actual).removeClass("active");
        slide_actual--;
        $(".button").eq(slide_actual).addClass("active");
    }

    update()
    clearMyInterval();
})


$("#slide_right").click(function() {
    if(slide_actual == tab_slide.length - 1) {
        slide_actual = 0;
        $(".button").eq(tab_slide.length - 1).removeClass("active");
        $(".button").eq(0).addClass("active");
    } else {
        $(".button").eq(slide_actual).removeClass("active");
        slide_actual++;
        $(".button").eq(slide_actual).addClass("active");
    }

    update()
    clearMyInterval();
})


function update() {
    for(var i = 0; i < tab_slide.length; i++) {
        if(i > slide_actual) {
            $(".slide").eq(i).addClass("right");
            $(".slide").eq(i).removeClass("left");
        } else if(slide_actual == i) {
            $(".slide").eq(i).removeClass("left");
            $(".slide").eq(i).removeClass("right");
        } else {
            $(".slide").eq(i).addClass("left");
            $(".slide").eq(i).removeClass("right");
        }
    }

}


function autoUpdate() {
    if(slide_actual == tab_slide.length - 1){
        slide_actual = 0;
        $(".button").eq(tab_slide.length - 1).removeClass("active");
        $(".button").eq(0).addClass("active");
    } else {
        $(".button").eq(slide_actual).removeClass("active");
        slide_actual++;
        $(".button").eq(slide_actual).addClass("active");
    }

    update();
}


function clearMyInterval() {
    clearInterval(autoUpdateInterval);
    autoUpdateInterval = setInterval(autoUpdate, duration);
}


lancement();