var slide_actual;
var slide_order;
var duration = 7000;
var autoUpdateInterval;


function lancement() {
    slide_order = $(".slide");

    for(var i = 0; i < slide_order.length; i++) {
        jQuery($(".all_button")).append('<span class=button onclick=buttonClick(' +i+ ')></span>');
    }

    slide_actual = Math.ceil(slide_order.length/2) - 1;

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
        slide_actual = slide_order.length - 1;
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
    if(slide_actual == slide_order.length - 1) {
        slide_actual = 0;
        $(".button").eq(slide_order.length - 1).removeClass("active");
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
    for(var i = 0; i < slide_order.length; i++) {
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
    if(slide_actual == slide_order.length - 1){
        slide_actual = 0;
        $(".button").eq(slide_order.length - 1).removeClass("active");
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