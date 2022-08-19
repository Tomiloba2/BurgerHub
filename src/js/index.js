$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({indicators:false});
    $(".scrollspy").scrollSpy();
    //$('.tooltip').toolTip();
    $('.material-box').materialbox();
});
/*$(window).scroll(function(){
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
    if($(this).scrollTop()>250){
        $('#products').show(1000);
    }
    else{
        $('#products').hide(1000)
    }
    //reviews
    if($(this).scrollTop()>350){
        $('#reviews').show(1000);
    }
    else{
        $('#reviews').hide(1000)
    }
    //contact
    if($(this).scrollTop()>500){
        $('#contact').show(1000);
    }
    else{
        $('#contact').hide(1000)
    }
    //blogs
    if($(this).scrollTop()>1000){
        $('#blogs').show(1000);
    }
    else{
        $('#blogs').hide(1000)
    }
})*/
//maps
function initMap(){
    // location of burgerhub
    const burgerOffice={lat:7.44565575035,lng:3.89995867097};
    //create the map center
    const map=new google.maps.Map(
        document.getElementById('map'),{
            //set the zoom level of the map
            zoom:17.56,
            center:burgerOffice
        }
    )
}