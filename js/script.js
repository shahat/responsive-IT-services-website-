$(function(){
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll>500){

            $('.header').show();
        }
        else{
            $('.header').hide();
        }
    })
})