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