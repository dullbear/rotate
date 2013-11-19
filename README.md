Example 1

Simply rotate an image

$("#img").rotate(45);

    or 

$("#img").rotate({angle:45});


Example 2

This is simple example that rotates image when user mouseover/mouseout object.

    Mouseover arrow to see effect. 

$("#img").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            $(this).rotate({animateTo:180})
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
        }
     } 
   
});


Example 3

Rotate image endlessly

var angle = 0;
setInterval(function(){
      angle+=3;
     $("#img").rotate(angle);
},50);

S

Rotate image endlessly using recursive function

var rotation = function (){
   $("#img").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation
   });
}

rotation();

See live example here: http://jsfiddle.net/YKj5D/

Rotate image endlessly using recursive function and custom easing (similar to example with simple endless rotation)

var rotation = function (){
   $("#img").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation();


Example 4



(remember to also include <script> contains easing)

    Click on arrow to see effect. 

$("#img").rotate({ 
   bind: 
     { 
        click: function(){
            $(this).rotate({ angle:0,animateTo:180,easing: $.easing.easeInOutExpo })
        }
     } 
   
});

Example 5

Animation shows how to use variables in JavaScript...

Click on arrow to see effect.

var value = 0
$("#img").rotate({ 
   bind: 
     { 
        click: function(){
            value +=90;
            $(this).rotate({ animateTo:value})
        }
     } 
   
});
