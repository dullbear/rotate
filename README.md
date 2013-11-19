html: <img src="Example.jpg" id="img" />

Example 1

Simply rotate an image　／／简单滚动图片

$("#img").rotate(45);

$("#img").rotate({angle:45});

Example 2

This is simple example that rotates image when user mouseover/mouseout object　／／当用户触发mouseover/mouseout事件的一个简单效果

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

Rotate image endlessly　／／不停的旋转图片

var angle = 0;
setInterval(function(){
      angle+=3;
     $("#img").rotate(angle);
},50);


Rotate image endlessly using recursive function ／／函数递归不停旋转图片

var rotation = function (){
   $("#img").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation
   });
}
rotation();

Example 4

Click on arrow to see effect　／／点击箭头查看效果

$("#img").rotate({ 
   bind: 
     { 
        click: function(){
            $(this).rotate({ angle:0,animateTo:180,easing: $.easing.easeInOutExpo })
        }
     } 
   
});

Example 5

Animation shows how to use variables in JavaScript //动画演示如何使用变量

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

网址：http://code.google.com/p/jqueryrotate/


