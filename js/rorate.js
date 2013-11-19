var s = 720;

function rotate() {

    $('#zp').bind({
        click: function() {            
            var i = 4;
            deg = s + i * 60;            
            $('#img').rotate({
                animateTo: deg,
                callback: aa
            });
            $('#zp').unbind('click');
        }
    });
};
rotate();



function aa() {
    $('#dialog').show();
    $('#closed').bind({
        click:function(){
            $('#dialog').hide();
            $('#img').rotate(0);
            rotate();
        }
    })
    console.log('需要后台传入json数据');
}