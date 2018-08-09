/* -------------------------- document Start ------------------ */


$(document).ready(function () {


/* --------------------------navigation +  header Start ------------------ */    

$(".login-sign").click(function(){

if($("#nav-icon4").hasClass('open')) { 
overlayClose();        
}


$( ".v-header .navigation > ul > li > a" ).mouseover(function() {
$(".login").removeClass("open");
});
    
$(".login").toggleClass("open");
$(".cart-panel").removeClass("open");
$(".search").removeClass("open");
$("#nav-icon4").removeClass('open');
$("nav").removeClass('open');
$(".nav-bg").removeClass('open');
$(".drop-list-flag").removeClass('open');
});  


$(".cart-sign").click(function(){

if($("#nav-icon4").hasClass('open')) { 
overlayClose();        
}


$( ".v-header .navigation > ul > li > a" ).mouseover(function() {
$(".cart-panel").removeClass("open");
}); 

$(".cart-panel").toggleClass("open");
$(".search").removeClass("open");
$(".login").removeClass("open");
$("#nav-icon4").removeClass('open');
$("nav").removeClass('open');
$(".nav-bg").removeClass('open');
$(".drop-list-flag").removeClass('open');
});

$(".g-close-icon").click(function(){

if($("#nav-icon4").hasClass('open')) { 
overlayClose();        
}





$(".cart-panel").removeClass("open");
$(".search").removeClass("open");
$(".login").removeClass("open");
$("#nav-icon4").removeClass('open');
$("nav").removeClass('open');
$(".nav-bg").removeClass('open');
$(".drop-list-flag").removeClass('open');
}); 




$(".search-sign").click(function(){

if($("#nav-icon4").hasClass('open')) { 
overlayClose();        
}

$( ".v-header .navigation > ul > li > a" ).mouseover(function() {
$(".search").removeClass("open");
}); 


$(".search").toggleClass("open");
$(".cart-panel").removeClass("open");
$(".login").removeClass("open");
$("#nav-icon4").removeClass('open');
$("nav").removeClass('open');
$(".nav-bg").removeClass('open');
$(".drop-list-flag").removeClass('open');
});




$(".country").click(function(){

if($("#nav-icon4").hasClass('open')) { 
overlayClose();        
}


$( ".v-header .navigation > ul > li > a" ).mouseover(function() {
$(".drop-list-flag").removeClass("open");
}); 

$(".drop-list-flag").toggleClass("open");
$(".login").removeClass("open");
$(".cart-panel").removeClass("open");
$(".search").removeClass("open");
$("#nav-icon4").removeClass('open');
$("nav").removeClass('open');
$(".nav-bg").removeClass('open');
});



var stickywrapper = $(".c-sticky-box").width();
var circle = $(".circle").outerWidth();
var openwidth = stickywrapper + circle
var halfcircle = circle/2;
var closewidth = stickywrapper;
console.log(stickywrapper)
if ($('body').width() > 767){ 

$(".circle").click(function(){
if($(this).hasClass('open')) { 
$(this).removeClass('open');
$(".c-sticky-box").animate({left:"-"+closewidth+"px"});

} 
else{
$(".c-sticky-box").animate({left:"0px"});
$(this).addClass('open');

}

});  



}   


/* --------------------------navigation +  header end ------------------ */     

/* -------------------------- corousel Start ------------------ */   


$('.c-spotlight-carosel').slick({
autoplay: true,
autoplaySpeed: 3000,
infinite: true,
fade: true,
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
dots:true,
nextArrow: '.c-spotlight-next-arrow',
prevArrow: '.c-spotlight-prev-arrow',
lazyLoad: 'ondemand'


});    



if ( $(window).width() < 768 ) {  
$('.decor-solutions-carosel').slick({
dots: true,
infinite: true,
speed: 3000,
slidesToShow: 2,
variableWidth: true,
focusOnSelect: true,
lazyLoad: 'ondemand',


responsive: [



{  breakpoint: 480,
  settings: {
	slidesToShow: 1,
	slidesToScroll: 1
  }
}


]
}); 


}




$('.zoom-big-slider').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
lazyLoad: 'ondemand',
asNavFor: '.zoom-thumb-slider'
});
$('.zoom-thumb-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
asNavFor: '.zoom-big-slider',
dots: false,
centerMode: true,
focusOnSelect: true,
lazyLoad: 'ondemand',
});  







/* -------------------------- corousel end ------------------ */  

/* -------------------------- mob accordian start------------------ */      

if ( $(window).width() < 880 ) {  
$(".navigation > ul > li > a").click(function(){

$('body').addClass("no-scroll");

if($(this).parent().hasClass('open')) { 
$(this).parent().removeClass("open");
$(this).next().removeClass('open');
$(this).removeClass('open');

} 
else{
$(".navigation > ul > li").removeClass("open");
$(this).next().addClass("open");
$(".navigation > ul > li").removeClass("open");
$(this).parent().addClass("open");


$('body').addClass("scroll");

}



});
}


/* -------------------------- mob accordian end------------------ */  


$(".nav-bg").click(function(){


if($("#nav-icon4").hasClass('open')) { 
overlayClose();        
}




$("nav").removeClass("open");
$("#nav-icon4").removeClass("open");
$(".nav-bg").removeClass("open");
}); 
$(".four-step").click(function(){
$(".thankyou").show();
$(".form-container").hide();
}); 



$( "#js-searchinput" ).focusin(function() {
$( ".popular-search-container" ).css( "display", "block" );
});
$( "#js-searchinput" ).focusout(function() {
$( ".popular-search-container" ).css( "display", "none" );
});






// tabbing //   

$('#mob-tab-select').on('change', function (e) {
$('.nav-tabs li a').eq($(this).val()).tab('show');
});   


//lock devicePixelRatio


var $docEl = $('html, body'),
$wrap = $('.content'),
scrollTop;
$('a.knowmore').click(function(e) {
overlayOpen();
e.preventDefault();
});

$('.lightbox-close').click(function(e) {
overlayClose();
e.preventDefault();
});





var overlayClose = function() {
$.unlockBody();
$('body').removeClass('open');
}
var overlayOpen = function() {
$('body').addClass('open');
$.lockBody();
}

$.lockBody = function() {
if(window.pageYOffset) {
scrollTop = window.pageYOffset;

$wrap.css({
top: - (scrollTop)
});
}

$docEl.css({
height: "100%",
overflow: "hidden"
});
}

$.unlockBody = function() {
$docEl.css({
height: "",
overflow: ""
});

$wrap.css({
top: ''
});

window.scrollTo(0, scrollTop);
window.setTimeout(function () {
scrollTop = null;
}, 0);

}


$('#nav-icon4').click(function(e){

if($(this).hasClass('open')) { 
overlayClose();
$(this).removeClass('open');
$("nav").removeClass('open');
$(".nav-bg").removeClass('open');


} 
else{
overlayOpen();

$(this).addClass('open');
$("nav").addClass('open');
$(".nav-bg").addClass('open');

}
$(".cart-panel").removeClass("open");
$(".search").removeClass("open");
$(".login").removeClass("open");
$(".drop-list-flag").removeClass('open');
});

$('a.knowmore').click(function() {  
$(".c-light").addClass("open");
$(".lightbox-target").show();
$(".lightbox-target-img").hide();  
return false;  

});




$('.lightbox-close').click(function() {  
$(".c-light").removeClass("open");
return false;  

}); 






console.log($(".v-header").length);

if ($('body').width() > 880){
    
var headerlenght = $(".v-header").length;
    
if (headerlenght >  0) {
    var lastScrollTop = 0;
$(window).on('scroll', function() {


var stickyOffset = $('.v-header').next().offset().top;

st = $(this).scrollTop();console.log(st +" "+ stickyOffset);
if(st < lastScrollTop ) {
console.log('up 1'); $(".v-header").removeClass('up-header');
}
else if( st >=stickyOffset){
console.log('down 1');$(".v-header").addClass('up-header');
}
lastScrollTop = st;
});

}
// mouce up down

} 







$('a.gallery').on( "click", function(e) {
$(".c-light").addClass("open");
$(".cart-panel").removeClass("open");
$(".search").removeClass("open");
$(".login").removeClass("open");
$("#nav-icon4").removeClass('open');
$("nav").removeClass('open');
$(".nav-bg").removeClass('open');
$(".drop-list-flag").removeClass('open');
$(".lightbox-target").hide();    
    
e.preventDefault();
var id = $(this).attr('data-target'); 
$(".lightbox-target-img").each(function(){
$(this).hide();
if($(this).attr('data-img') == id) {
$(this).show();
}
});
});  





/* -------------------------- document end ------------------ */        



});




/* -------------------------- function starts increse value and decrese value ------------------ */ 



function increaseValue() {
var value = parseInt(document.getElementById('number').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number').value = value;
}

function decreaseValue() {
var value = parseInt(document.getElementById('number').value, 10);
value = isNaN(value) ? 0 : value;
value < 1 ? value = 1 : '';
value--;
document.getElementById('number').value = value;
}


/* -------------------------- function ends ------------------ */ 



// JavaScript Document