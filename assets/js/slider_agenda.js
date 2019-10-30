var tab_slide_agenda = { // Un peu inutile parce que ça sera géré au PHP et SQL mais bon, on s'amuse comme on peut
    "Slider" :[
      {
        "url" : 'assets/images/image_agenda/film.jpg',
        "titre" : 'Solo Sunny - Projection',
        "date" : new Date(2019, 10, 15), //Year Month Day
        "en_savoir_plus" : "#",
        "horaires" : [
            "18 : 00"
        ]
      },
      {
        "url" : 'assets/images/image_agenda/musique.jpg',
        "titre" : 'La Pirogue - Concert',
        "date" : new Date(2019, 9, 23), //Year Month Day
        "en_savoir_plus" : "#",
        "horaires" : [
            "15 : 30"
        ]
      },
      {
        "url" : 'assets/images/image_agenda/projection.jpg',
        "titre" : 'Projections - Les rois de la glisse',
        "date" : new Date(2019, 10, 8), //Year Month Day
        "en_savoir_plus" : "#",
        "horaires" : [
            "15 : 00",
            "16 : 00"
        ]
      },
      {
        "url" : 'assets/images/image_agenda/surf.jpg',
        "titre" : 'Couleur Surf',
        "date" : new Date(2019, 10, 5), //Year Month Day
        "en_savoir_plus" : "#",
        "horaires" : [
            "10 : 30 - Adultes",
            "15 : 00 - 4/7 ans"
        ]
      },
      {
        "url" : 'assets/images/image_agenda/visite.jpg',
        "titre" : 'Visites Guidées',
        "date" : new Date(2019, 9, 26), //Year Month Day
        "en_savoir_plus" : "#",
        "horaires" : [
            "11 : 30",
            "18 : 00"
        ]
      }      
    ]
}


var tab_agenda = tab_slide_agenda["Slider"];

tab_agenda = tab_agenda.map(c=>c).sort((a,b) => a.date - b.date);

var date_now = new Date();

var next_date_find = false;

var agenda_actual;

var middle = Math.ceil(tab_agenda.length/2) - 1;

var left_container;

var size_slide;


function lancement_agenda() {

    for(var i = 0; i < tab_agenda.length; i++) {

      var horaires = "<ul>";

      for(var j = 0; j < tab_agenda[i].horaires.length; j++) {
        horaires += "<li>" + tab_agenda[i].horaires[j] + "</li>";
      }

      horaires += "</ul>";

      if(tab_agenda[i].date < date_now) {
        jQuery($("#date_exposition")).append('<li class="date_agenda top">'+ tab_agenda[i].date.getDate() + ' / ' + (tab_agenda[i].date.getMonth() + 1)  + ' / ' + tab_agenda[i].date.getFullYear() +'</li>');
        jQuery($("#slider_agenda_container")).append('<div data-aos="flip-left" class="slide_agenda left"><div class="container_text"><h4>'+ tab_agenda[i].titre +'<span></span></h4>'+ horaires + '</div><a href="' + tab_agenda[i].en_savoir_plus +'" class="more_info"><i class="fas fa-plus"></i></a></div>');
      } else if(!next_date_find) {
        jQuery($("#date_exposition")).append('<li class="date_agenda now">'+ tab_agenda[i].date.getDate() + ' / ' + (tab_agenda[i].date.getMonth() + 1)  + ' / ' + tab_agenda[i].date.getFullYear() +'</li>');
        jQuery($("#slider_agenda_container")).append('<div data-aos="flip-left" class="slide_agenda active"><div class="container_text"><h4>'+ tab_agenda[i].titre +'<span></span></h4>'+ horaires + '</div><a href="' + tab_agenda[i].en_savoir_plus +'" class="more_info"><i class="fas fa-plus"></i></a></div>');
        agenda_actual = i;
        next_date_find = true;
      } else {
        jQuery($("#date_exposition")).append('<li class="date_agenda bottom">'+ tab_agenda[i].date.getDate() + ' / ' + (tab_agenda[i].date.getMonth() + 1)  + ' / ' + tab_agenda[i].date.getFullYear() +'</li>');
        jQuery($("#slider_agenda_container")).append('<div data-aos="flip-left" class="slide_agenda right"><div class="container_text"><h4>'+ tab_agenda[i].titre +'<span></span></h4>'+ horaires + '</div><a href="' + tab_agenda[i].en_savoir_plus +'" class="more_info"><i class="fas fa-plus"></i></a></div>');
      }

    }

    var i = 0;
    
    $(".slide_agenda").each(function(){
      if(i == agenda_actual - 1 || i == agenda_actual + 1) {
        $(this).addClass("next");
      }
      $(this).css("background-image", "url("+tab_agenda[i].url+")");
      i++
    })

    
    size_slide = $('.slide_agenda').width();

    left_container = (middle - agenda_actual) * size_slide;

    $('#slider_agenda_container').css({
      left : left_container
  });

}

$("#agenda_left").click(function() {

  if(agenda_actual != 0) {
  
    $(".slide_agenda").eq(agenda_actual).removeClass("active");
    $(".slide_agenda").eq(agenda_actual).addClass("right");

    $(".slide_agenda").eq(agenda_actual - 1).removeClass("left");
    $(".slide_agenda").eq(agenda_actual - 1).removeClass("next");
    $(".slide_agenda").eq(agenda_actual - 1).addClass("active");
    
    $(".slide_agenda").eq(agenda_actual + 1).removeClass("next");

    $(".date_agenda").eq(agenda_actual).removeClass("now");
    $(".date_agenda").eq(agenda_actual).addClass("bottom");

    $(".date_agenda").eq(agenda_actual - 1).removeClass("top");
    $(".date_agenda").eq(agenda_actual - 1).addClass("now");

    agenda_actual--;

    if(agenda_actual != 0) {
      $(".slide_agenda").eq(agenda_actual - 1).addClass("next");
    }
    $(".slide_agenda").eq(agenda_actual + 1).addClass("next");

  }

  resize();
  
})


$("#agenda_right").click(function() {

  if(agenda_actual != tab_agenda.length - 1) {
  
    $(".slide_agenda").eq(agenda_actual).removeClass("active");
    $(".slide_agenda").eq(agenda_actual).addClass("left");

    $(".slide_agenda").eq(agenda_actual + 1).removeClass("right");
    $(".slide_agenda").eq(agenda_actual + 1).removeClass("next");
    $(".slide_agenda").eq(agenda_actual + 1).addClass("active");

    $(".slide_agenda").eq(agenda_actual - 1).removeClass("next");

    $(".date_agenda").eq(agenda_actual).removeClass("now");
    $(".date_agenda").eq(agenda_actual).addClass("top");

    $(".date_agenda").eq(agenda_actual + 1).removeClass("bottom");
    $(".date_agenda").eq(agenda_actual + 1).addClass("now");

    agenda_actual++;

    if(agenda_actual != tab_agenda.length - 1) {
      $(".slide_agenda").eq(agenda_actual + 1).addClass("next");
    }
    $(".slide_agenda").eq(agenda_actual - 1).addClass("next");

  }

  resize();
  
})

function resize() { 
    
  size_slide = $('.slide_agenda').width();

  left_container = (middle - agenda_actual) * size_slide;

  console.log(left_container)

    $('#slider_agenda_container').css({
      left : left_container
  });


}

window.onresize = resize;


lancement_agenda();