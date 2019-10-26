$("#slide_left").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
  $(this).removeClass("ricochet_left")  
})

$("#slide_left").hover(function(){
  $(this).addClass("ricochet_left");        
})

$("#slide_right").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
  $(this).removeClass("ricochet_right")  
})

$("#slide_right").hover(function(){
  $(this).addClass("ricochet_right");        
})


$("#agenda_left").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
  $(this).removeClass("ricochet_agenda_left")  
})

$("#agenda_left").hover(function(){
  $(this).addClass("ricochet_agenda_left");        
})

$("#agenda_right").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
  $(this).removeClass("ricochet_agenda_right")  
})

$("#agenda_right").hover(function(){
  $(this).addClass("ricochet_agenda_right");        
})