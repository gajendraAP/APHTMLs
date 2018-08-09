
/* ---------------------------- header navigation ----------------------------- */



/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
  

 /* --------------------------navigation +  header Start ------------------ */    
    
  $(".login-sign").click(function(){
      overlayClose();
    //$(".login").toggle(500);
    $(".login").toggleClass("open");
      $(".cart-panel").removeClass("open");
    $(".search").removeClass("open");
    $(".search").removeClass("open");
      $("#nav-icon4").removeClass('open');
		$("nav").removeClass('open');
        $(".nav-bg").removeClass('open');
      $(".drop-list-flag").removeClass('open');
});  
    
 
 $(".cart-sign").click(function(){
     overlayClose();
    $(".cart-panel").toggleClass("open");
    $(".search").removeClass("open");
    $(".login").removeClass("open");
      $("#nav-icon4").removeClass('open');
		$("nav").removeClass('open');
        $(".nav-bg").removeClass('open');
     $(".drop-list-flag").removeClass('open');
});

$(".g-close-icon").click(function(){
    overlayClose();
    //$(".cart-panel").hide(500);
    $(".cart-panel").removeClass("open");
    $(".search").removeClass("open");
    $(".login").removeClass("open");
     $("#nav-icon4").removeClass('open');
	$("nav").removeClass('open');
    $(".nav-bg").removeClass('open');
    $(".drop-list-flag").removeClass('open');
}); 
    
  
  
  
  $(".search-sign").click(function(){
      overlayClose();
    //$(".search").show(500);
      $(".search").toggleClass("open");
      $(".cart-panel").removeClass("open");
      $(".login").removeClass("open");
       $("#nav-icon4").removeClass('open');
		$("nav").removeClass('open');
        $(".nav-bg").removeClass('open');
       $(".drop-list-flag").removeClass('open');
});



 
 $(".country").click(function(){
     overlayClose();
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
        //$(".c-sticky-box").css("left", "-"+closewidth+"px");
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
  
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    nextArrow: '.c-spotlight-next-arrow',
    prevArrow: '.c-spotlight-prev-arrow',
    lazyLoad: 'ondemand',
      
     
});    
    
 
    
    if ( $(window).width() < 768 ) {  
    $('.decor-solutions-carosel').slick({
        dots: true,
        infinite: true,
        speed: 300,
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
    //console.log($(this).parent())
    
       
});
     }

    
 /* -------------------------- mob accordian end------------------ */  
    
    
   
    
    
    
    
    
    
    
    $('.sign').click(function(){
		$(this).toggleClass('open');
		$(this).next().toggleClass('open');
        overlayClose();
        
//		$("nav").toggleClass('open');
//        $(".nav-bg").toggleClass('open');
	});
    
    $(".nav-bg").click(function(){
    //alert("test");
    //$(".cart-panel").hide(500);
         overlayClose();
    $("nav").removeClass("open");
   $("#nav-icon4").removeClass("open");
    $(".nav-bg").removeClass("open");
}); 
    $(".four-step").click(function(){
    //alert("test");
    //$(".cart-panel").hide(500);
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
//		$(this).toggleClass('open');
//		$("nav").toggleClass('open');
//        $(".nav-bg").toggleClass('open');
//       $(".cart-panel").removeClass("open");
//    $(".search").removeClass("open");
//    $(".login").removeClass("open");
//       $(".drop-list-flag").removeClass('open');
       
       if($(this).hasClass('open')) { 
        overlayClose();
        $(this).removeClass('open');
        $("nav").removeClass('open');
        $(".nav-bg").removeClass('open');
         
        
    } 
    else{
        overlayOpen();
        //$(".c-sticky-box").animate({left:"0px"});
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
    //$('body').addClass("no-scroll");
   //document.ontouchmove = function(e){ e.preventDefault(); }
//   $('body').css('position', 'fixed');
    
//    css({"overflow": "hidden", "position": "fixed"});
    return false;  

});
    
 
    
    
$('.lightbox-close').click(function() {  
    $(".c-light ").removeClass("open");
     // $('body').css('overflow', 'auto');
//    $('body').css('position', 'relative');
//    css({"overflow": "auto", "position": "relative"})
    return false;  

}); 
    
    
    
      
   

        
    
    if ($('body').width() > 880){	
    // mouce up down

var lastScrollTop = 0;
    $(window).on('scroll', function() {
        
//          var stickyOffset = $('.topbanner').offset().top;
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
    
    
    
   
     
 /* -------------------------- document end ------------------ */        
 
    
  
$('a.gallery').on( "click", function(e) {
    $(".c-light").addClass("open");
    $(".cart-panel").removeClass("open");
    $(".search").removeClass("open");
    $(".login").removeClass("open");
    $("#nav-icon4").removeClass('open');
    $("nav").removeClass('open');
    $(".nav-bg").removeClass('open');
    $(".drop-list-flag").removeClass('open');
    e.preventDefault();
    var id = $(this).attr('data-target'); 
    $(".lightbox-target").each(function(){
        $(this).hide();
        if($(this).attr('data-img') == id) {
            $(this).show();
        }
    });
});  
    
    
    
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



