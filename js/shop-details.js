
/* ---------------------------- header navigation ----------------------------- */



/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
    
 /* -------------------------- document end ------------------ */       

  if ($('body').width() > 767){	    
    
var sidebar = new StickySidebar('#c-product-zoom-box', {
        containerSelector: '#main-content',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 165,
        bottomSpacing: 0,
        resizeSensor: true,
        stickyClass: 'is-affixed',
        minWidth: 0
    }); 
    
    
        
    
  
    // mouce up down

var lastScrollTop = 0;
    $(window).on('scroll', function() {
        
      var stickyOffset = $('.v-header').next().offset().top;
//         var stickyOffset = $('.topbanner').offset().top;
        
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
    
});






