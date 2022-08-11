$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({indicators:false});
    $(".scrollspy").scrollSpy();
    $('.material-box').materialbox();
});
$(window).scroll(function(){
    if($(this).scrollTop()>100){
        $('#about').show(1000);
    }
    else{
        $('#about').show(1000)
    }
    //menu
    if($(this).scrollTop()>250){
        $('#menu').show(1000);
    }
    else{
        $('#menu').hide(1000)
    }
    //products
    if($(this).scrollTop()>750){
        $('#products').show(1000);
    }
    else{
        $('#products').hide(1000)
    }
    //reviews
    if($(this).scrollTop()>1000){
        $('#reviews').show(1000);
    }
    else{
        $('#reviews').hide(1000)
    }
    //contact
    if($(this).scrollTop()>1500){
        $('#contact').show(1000);
    }
    else{
        $('#contact').hide(1000)
    }
    //blogs
    if($(this).scrollTop()>2000){
        $('#blogs').show(1000);
    }
    else{
        $('#blogs').hide(1000)
    }
})
/*
$(window).scroll(function(){
    
})

$(window).scroll(function(){
   
})

$(window).scroll(function(){
    
})

$(window).scroll(function(){
    
})

$(window).scroll(function(){
    if($(this).scrollTop()>250){
        $('#blogs').show(1000);
    }
    else{
        $('#blogs').hide(1000)
    }
})*/