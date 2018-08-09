(function () {
    var refineSearch = {
    
        refineSearch : this,
    
        cacheDom: function ($ele) {
            this.$filterItem = $ele.find('.js-item-filter');
        },
        activeFilter: function ($ele) {
            var dataFilter = $($ele).attr('data-filter');
            $("[class*=js-refinefilter-]").hide();
            $("[class*=js-refinefilter-"+dataFilter+"]").show();
            
        },
        bindEvents: function () {
            // refineSearch.$filterItem.on('click', function (e) {
            //     refineSearch.activeFilter($(this));
            //     e.stopImmediatePropagation();
            // });
        },
        init: function ($ele) {
            this.cacheDom($ele);
            this.bindEvents();
            //$(".js-shadeItemBlock").niceScroll({cursorcolor:"#c8c6c8",fixed:true});
            $(".js-shadeItemBlock").niceScroll({background:"#6d6e72",cursorcolor:"#333",cursorwidth:"5px",cursorborder:"0 none",autohidemode:false,cursorborderradius:"10px",horizrailenabled:false,disablemutationobserver:false}).resize();
        },
    };
    function showLessItems($ele,itemshow) {
        $.each($ele.children().slice(itemshow, -1),function () {
            $(this).hide();
        });
        
        if($ele.children().length > 4){
            $ele.parents('.result-content').find('.action-icon-block').show();
        }else{
            $ele.parents('.result-content').find('.action-icon-block').hide();
        }
        productBlockToggleShowHide();
    }
    function productBlockToggleShowHide() {
        var $productContainer = $('.product-block.js-item-container');
        if($($productContainer).children().length > 3){
            $productContainer.find('.action-icon-block').show();
        }else{
            $productContainer.find('.action-icon-block').hide();
        }
    }
    
    function showAllItems($ele,itemshow) {
        $.each($ele.children().slice(itemshow, - 1),function () {
            $(this).slideDown();
        });
    }

    $(document).ready(function () {
        
        if($('.js-refine-search-block').length > 0){
            refineSearch.init($('.js-refine-search-block'));
        }
        var $complementaryColorEle = $('.js-refinefilter-complementary').find('.complementary-block');
        var $colorEle = $('.js-refinefilter-color').find('.complementary-block');
        var $productEle = $('.js-refinefilter-products').find('.product-block');
        
        if($(window).width() < 460){
            showLessItems($complementaryColorEle,itemshow = 4);
            showLessItems($colorEle,itemshow = 4);
            showLessItems($productEle,itemshow = 3);
            productBlockToggleShowHide();
            $('.js-arrow-icon').bind('click', function (e) {
                var $element = $(this).parents('.result-content').find('.js-item-container');
                if($(this).hasClass('arrow-down')){
                    $(this).hide();
                    $(this).siblings().show();
                    showAllItems($element,itemshow = 4);
                }
                if($(this).hasClass('arrow-up')){
                    $(this).hide();
                    $(this).siblings().show();
                    showLessItems($element,itemshow = 4);
                }
            });
            $('.js-prod-arrow-icon').bind('click', function (e) {
                var $element = $(this).parents('.result-content').find('.js-item-container');
                if($(this).hasClass('arrow-down')){
                    $(this).hide();
                    $(this).siblings().show();
                    showAllItems($element,itemshow = 3);
                }
                if($(this).hasClass('arrow-up')){
                    $(this).hide();
                    $(this).siblings().show();
                    showLessItems($element,itemshow = 3);
                }
            });
        }
        var timeoutId;
        $(window).resize(function() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(doneResizing, 100);
        });
        
         function doneResizing () {
            if(($(window).width() < 460) && ($(window).width() < 767)) {
                $('.arrow-down').show();
                $('.arrow-up').hide();
                showLessItems($complementaryColorEle,itemshow = 4);
                showLessItems($colorEle,itemshow = 4);
                showLessItems($productEle,itemshow = 3);
            }else {
                showAllItems($complementaryColorEle,itemshow = 4);
                showAllItems($colorEle,itemshow = 4);
                showAllItems($productEle,itemshow = 3);
            }
        }
    });
}());
