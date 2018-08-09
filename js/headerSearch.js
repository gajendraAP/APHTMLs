(function () {
    var searchComponent = {
        
        searchComponent : this,
        
        cacheDom: function ($ele) {
            
            this.$searchBlock = $ele.find('.js-input-main-block');
            this.$searchInput = $ele.find('.js-search-input');
            this.$searchContainer = $ele.find('.js-search-container');
            this.$searchIcon = $ele.find('.js-showSearchBox');
            this.$popularSearch = $ele.find('.js-popular-search');
            this.$searchIconBtn = $ele.find('.js-search-icon-btn');
            //this.tagList = [8032,8054,"Grey","Blue","Royale"];
            this.createdTaglist = [];
            this.tagCount = 0;
            this.title= [];
            this.colorsData = {
                "myHashMap": {
                    "allFacets": [
                        "royale",
                        12,
                        "water based",
                        12,
                        "blue",
                        11,
                        "interiors",
                        10,
                        "brown",
                        9,
                        "green",
                        9,
                        "purple",
                        9,
                        "royale play",
                        8,
                        "best in class washability",
                        7,
                        "interior wall",
                        7,
                        "quick drying",
                        7,
                        "eco-friendly",
                        6,
                        "grey",
                        6,
                        "anti-fungal",
                        5,
                        "easy to apply",
                        5,
                        "plain finishes",
                        5,
                        "special effects",
                        5,
                        "interior walls",
                        4,
                        "metallic",
                        4,
                        "orange",
                        4,
                        "red",
                        4,
                        "teflon surface protector",
                        4,
                        "yellow",
                        4,
                        "anti-bacterial",
                        3,
                        "best in class coverage",
                        3,
                        "green assure",
                        3,
                        "high coverage",
                        3,
                        "high sheen",
                        3,
                        "low odour",
                        3,
                        "medium washability",
                        3,
                        "odourless",
                        3,
                        "pink",
                        3,
                        "chemical-free",
                        2,
                        "high washability",
                        2,
                        "metal",
                        2,
                        "metal finishes",
                        2,
                        "non-yellowing",
                        2,
                        "rich sheen",
                        2,
                        "smooth",
                        2,
                        "soft sheen",
                        2,
                        "undercoats",
                        2,
                        "wood",
                        2,
                        "alkali resistant",
                        1,
                        "anti-corrosion",
                        1,
                        "apcolite advanced",
                        1,
                        "apcolite emulsion",
                        1,
                        "apcolite enamel",
                        1,
                        "apex ultima protek",
                        1,
                        "asian paints",
                        1,
                        "asian paints ezycolour",
                        1,
                        "burnish resistant",
                        1,
                        "cobbled",
                        1,
                        "decals",
                        1,
                        "dirt resistant",
                        1,
                        "durable",
                        1,
                        "efflorescence resistant",
                        1,
                        "enamels",
                        1,
                        "excellent adhesion",
                        1,
                        "excellent sheen",
                        1,
                        "gloss",
                        1,
                        "great shade range",
                        1,
                        "high gloss",
                        1,
                        "improved whiteness",
                        1,
                        "low coverage",
                        1,
                        "low sheen",
                        1,
                        "low voc",
                        1,
                        "marble",
                        1,
                        "matt",
                        1,
                        "medium coverage",
                        1,
                        "moisture release",
                        1,
                        "quartz",
                        1,
                        "royale enamel",
                        1,
                        "rust protection",
                        1,
                        "silky smooth",
                        1,
                        "slate",
                        1,
                        "smartcare",
                        1,
                        "stain resistant",
                        1,
                        "textured",
                        1,
                        "tractor emulsion",
                        1,
                        "washability tags",
                        1,
                        "woodtech emporio pu",
                        1,
                        "2x film strength",
                        0,
                        "Bengaluru",
                        0,
                        "Books And Catalogues",
                        0,
                        "DIY",
                        0,
                        "Facebook",
                        0,
                        "Jute",
                        0,
                        "Kasna",
                        0,
                        "Landing Page",
                        0,
                        "Mumbai",
                        0,
                        "Rohtak",
                        0,
                        "Vijaywada",
                        0,
                        "Web Shop",
                        0,
                        "abrasion resistant",
                        0,
                        "ace",
                        0,
                        "acrylic wall putty",
                        0,
                        "all over",
                        0,
                        "all weather",
                        0,
                        "ancillaries",
                        0,
                        "animated movies",
                        0
                    ],
                    "status": "0",
                    "totalResults": "129",
                    "allResults": {
                        "myArrayList": [
                            {
                                "language": "en",
                                "id": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-glitter",
                                "title": "royale glitter",
                                "description": "",
                                "image": "",
                                "url": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-glitter",
                                "type": "product",
                                "categoryType": "product",
                                "text": [
                                    "",
                                    "royale glitter"
                                ],
                                "_version_": "1599515551218008071"
                            },
                            {
                                "language": "en",
                                "id": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-atmos",
                                "title": "royale atmos",
                                "description": "",
                                "image": "",
                                "url": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-atmos",
                                "type": "product",
                                "categoryType": "product",
                                "text": [
                                    "",
                                    "royale atmos"
                                ],
                                "_version_": "1599515551218008076"
                            },
                            {
                                "language": "en",
                                "id": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-aspira",
                                "title": "royale aspira",
                                "description": "",
                                "image": "",
                                "url": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-aspira",
                                "type": "product",
                                "categoryType": "product",
                                "text": [
                                    "",
                                    "royale aspira"
                                ],
                                "_version_": "1599515551218008081"
                            },
                            {
                                "language": "en",
                                "id": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-lustre",
                                "title": "royale lustre",
                                "description": "",
                                "image": "",
                                "url": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-lustre",
                                "type": "product",
                                "categoryType": "product",
                                "text": [
                                    "",
                                    "royale lustre"
                                ],
                                "_version_": "1599515551218008082"
                            },
                            {
                                "language": "en",
                                "id": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-matt",
                                "title": "royale matt",
                                "description": "",
                                "image": "",
                                "url": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-matt",
                                "type": "product",
                                "categoryType": "product",
                                "text": [
                                    "",
                                    "royale matt"
                                ],
                                "_version_": "1599515551219056640"
                            },
                            {
                                "language": "en",
                                "id": "/content/ap/en/home/more/videos/commercials/royale-ad-say-no-to-nice",
                                "title": "royale ad: say no to nice",
                                "description": "",
                                "image": "/content/dam/asianpaints/website/secondary-navigation/video-centre/commercials/say-no-to-nice.jpg",
                                "url": "/content/ap/en/home/more/videos/commercials/royale-ad-say-no-to-nice",
                                "tags": [
                                    "/etc/tags/asianpaints/howtovideos/commercials/royale"
                                ],
                                "type": "page",
                                "categoryType": "page",
                                "text": [
                                    "",
                                    "royale ad: say no to nice",
                                    "/etc/tags/asianpaints/howtovideos/commercials/royale"
                                ],
                                "_version_": "1599515551267291138",
                                "tagNames": [
                                    "royale"
                                ]
                            },
                            {
                                "id": "2015",
                                "title": "Royale Gold",
                                "tags": [
                                    ""
                                ],
                                "type": "Colour",
                                "categoryType": "metalicinterior",
                                "shadeName": "Royale Gold",
                                "shadeCode": "M006",
                                "shadeRGB": [
                                    "245",
                                    "175",
                                    "80"
                                ],
                                "uniqueUrl": "metaliccolours/metalicinterior/royale glitter/M006",
                                "ecommerce_products": [
                                    "1035H293122"
                                ],
                                "ecommerce_products_info": [
                                    "{\"0\":\"0\",\"1\":\"1\",\"2\":\"2\",\"3\":\"3\"}"
                                ],
                                "shadeFamilyId": "0",
                                "shadeFamilyName": "",
                                "text": [
                                    "Royale Gold",
                                    "",
                                    "M006"
                                ],
                                "shadeOrder": "13.616534067081828",
                                "relatedShadesInfo": [
                                    "{}",
                                    "{}",
                                    "{}",
                                    "{}"
                                ],
                                "relatedShades": [
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "_version_": "1599515551037652992"
                            },
                            {
                                "language": "en",
                                "id": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-luxury-emulsion",
                                "title": "royale luxury emulsion",
                                "description": "",
                                "image": "",
                                "url": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-luxury-emulsion",
                                "type": "product",
                                "categoryType": "product",
                                "text": [
                                    "",
                                    "royale luxury emulsion"
                                ],
                                "_version_": "1599515551218008075"
                            },
                            {
                                "language": "en",
                                "id": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-luxury-enamel",
                                "title": "royale luxury enamel",
                                "description": "",
                                "image": "",
                                "url": "/content/ap/en/home/products/interior-walls/plain-finishes/royale-luxury-enamel",
                                "type": "product",
                                "categoryType": "product",
                                "text": [
                                    "",
                                    "royale luxury enamel"
                                ],
                                "_version_": "1599515551218008080"
                            },
                            {
                                "language": "in",
                                "id": "/content/id/ba/home/resources/learn/colour-guides/colour-inspiration-books/royale-play-neu",
                                "title": "royale play neu:",
                                "description": "",
                                "image": "/content/dam/asianpaints/website/secondary-navigation/downloads/painting-guides-thumbnails/royale-play-neu.jpg",
                                "url": "/content/id/ba/home/resources/learn/colour-guides/colour-inspiration-books/royale-play-neu",
                                "type": "page",
                                "categoryType": "page",
                                "text": [
                                    "",
                                    "royale play neu:"
                                ],
                                "_version_": "1599515551241076753"
                            }
                        ]
                    }
                }
            };
        },
        searchFocusIn: function () {
            if(searchComponent.$searchInput.val().length <= 0 && $('.js-auto-suggestion-list:visible').length <= 0){
                searchComponent.$popularSearch.show();
            }
            searchComponent.$searchContainer.addClass('focusin');
        },
        showSearchInput: function () {
            searchComponent.$popularSearch.show();
        },
        searchFocusOut: function () {
            //searchComponent.$searchContainer.removeClass('focusin');
            //searchComponent.$popularSearch.hide();
            
        },
        showHideSearchBox: function () {
            $('.global-search').show();
            //searchComponent.searchFocusIn();
            //searchComponent.$searchInput.focus();
            searchComponent.$searchIcon.hide();
        },
        autoSuggestionList: function (e) {
            if (e.which != 8 && e.which != 0 && e.which != 32 && (e.which < 65 || e.which > 90 ) && (e.which < 48 || e.which > 57 ) && (e.which < 97 || e.which > 122)) {
                return false;
            }
            searchComponent.$popularSearch.hide();
        },
        removeTags: function () {
            $('.tag-block').remove();
            $('#js-clear-tags').remove();
            searchComponent.createdTaglist = [];
            searchComponent.$searchInput.val('');
            searchComponent.$searchInput.attr("placeholder",'What are you looking for?');
        },
        insertElementToDom: function ($tagElement, $position) {
            
            $tagElement.insertBefore($position);
        },
        createTags: function (inputVal) {
            searchComponent.createdTaglist.push(inputVal);
            var inputValue = inputVal;
            var $tagEle = $('<div class="tag-block"><div class="tag"><span>'+inputValue+'</span><span class="tag-close js-tag-close" data-tag="'+inputValue+'">X</span></div></div>');
            var $clearEle = $('<span id="js-clear-tags" class="clear-all-tags">clear</span>');
            
            
            var $position = ($('#js-clear-tags').length == 0) ? searchComponent.$searchInput: $('#js-clear-tags');
            searchComponent.insertElementToDom($tagEle,$position);
            
            if($('#js-clear-tags').length == 0){
                $clearEle.insertBefore(searchComponent.$searchInput);
            }
            $('.js-tag-close').bind('click', searchComponent.closeTag.bind(this));
            $('#js-clear-tags').bind('click', searchComponent.removeTags.bind(this));
            
            searchComponent.tagCount = $('.js-input-main-block .tag-block').length;
            console.log("searchComponent.tagCount createTags: "+searchComponent.tagCount);
        },
        closeTag: function (e) {
            
            var $tagBlock = e.target.parentNode.offsetParent;
            $($tagBlock).remove();
            var itemValue = e.target.getAttribute('data-tag');
            var index = searchComponent.createdTaglist.indexOf(itemValue);
            if (index > -1) {
                searchComponent.createdTaglist.splice(index, 1);
            }
            searchComponent.tagCount = (searchComponent.tagCount <= 0) ? 0 : searchComponent.tagCount-=1;
            console.log("searchComponent.tagCount: "+searchComponent.tagCount);
            if(searchComponent.tagCount == 0) {
                $('#js-clear-tags').remove();
                searchComponent.$searchInput.val('');
                searchComponent.$searchInput.attr("placeholder",'What are you looking for?');
            }
            e.stopImmediatePropagation();
        },
        _emptyCheck: function (value) {
            return (value.length > 0 ) ? true : false;
        },
        isUndefined: function(obj) {
            return typeof obj === "undefined";
        },
        isString: function(obj) {
            return typeof obj === "string";
        },
        isNumber: function(obj) {
            return typeof obj === "number";
        },
        toStr: function toStr(s) {
            return _.isUndefined(s) || s === null ? "" : s + "";
        },
        typeAheadSearch: function (JSONresponse) {
            var localData = {};
            var sources = $("#suggestion-block").html();
            var template = Handlebars.compile(sources);
            Handlebars.registerHelper('fullName', function(person) {
                return person.firstName + " " + person.lastName;
            });
            Handlebars.registerHelper("debug", function(optionalValue) {
                if (optionalValue) {
                    return console.log("Value:", optionalValue);
                } else {
                    return console.log("Current Context:", this);
                }
            });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (a == b) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });
            if(JSONresponse !== undefined && JSONresponse !== ""){
                var docsData = JSONresponse.myHashMap.allResults;
                var newJSONData = (docsData.length > 2) ?  docsData.slice(0,3) : docsData;
                localData.docs = newJSONData;
                console.log(newJSONData);
                //console.log(data.response);
                $('.auto-sug-section .auto-sug-section-block').html('');
                $('.auto-sug-section .auto-sug-section-block').append(template(docsData));
            }
            
            
        },
        
        searchInputChange: function (obj) {
            var inputValLength = $(obj).val().length;
            var inputValue = (isNaN($(obj).val())) ? $(obj).val().toLowerCase() : $(obj).val();
            console.log(inputValue);
            var jsonData = new Object(searchComponent.colorsData);
            if(!searchComponent._emptyCheck(inputValue)){
                $('.auto-sug-section .auto-sug-section-block').html('');
                searchComponent.$popularSearch.show();
                return false;
            }
            if(inputValLength >= 3){
                searchComponent.typeAheadSearch(jsonData);
                console.log($(obj).val());
                // $.ajax({
                //     url: 'http://10.210.16.207:4502/asianpaints/globalsearch?searchQuery='+inputValue+'',
                //     type: 'get',
                //     dataType: 'json',
                //     data: {
                //         startIndex: 0,
                //         endIndex: 10
                //     },
                //
                //     beforeSend: function() {
                //     },
                //     error: function(jqXHR, textStatus, errorThrown) {
                //         console.log("Status" + textStatus + ", Page" + errorThrown);
                //     },
                //     success: function(jsonData) {
                //         // jsonData.response.docs.map(function (tag,index) {
                //         //     if(tag.tagNames){
                //         //         var listValue = (isNaN(tag.tagNames[index])) ? tag.tagNames[index] : tag.tagNames[index];
                //         //         listValue = searchComponent.isUndefined(listValue) ? listValue : listValue.toLowerCase();
                //         //         console.log(listValue);
                //         //         if(listValue == inputValue) {
                //         //             if (!searchComponent.createdTaglist.contains(listValue)) {
                //         //             //console.log("!searchComponent.createdTaglist.contains: "+listValue);
                //         //             searchComponent.createTags(inputValue);
                //         //             searchComponent.$searchInput.val('');
                //         //             searchComponent.$searchInput.attr("placeholder",'');
                //         //             }
                //         //         }
                //         //     }
                //         //
                //         // });
                //         searchComponent.typeAheadSearch(jsonData);
                //     },
                // });
                
                
            }
            
        },
        bindEvents: function () {
            searchComponent.$searchInput.on('focus', this.searchFocusIn.bind(this));
            searchComponent.$searchIconBtn.on('click', this.searchFocusIn.bind(this));
            searchComponent.$searchInput.on('focusout', this.searchFocusOut.bind(this));
            searchComponent.$searchInput.on('keypress', this.autoSuggestionList.bind(this));
            searchComponent.$searchInput.on('keyup', function () {
                searchComponent.searchInputChange($(this));
            });
            searchComponent.$searchIcon.on('click', this.showHideSearchBox.bind(this));
        },
        
        init: function ($ele) {
            this.cacheDom($ele);
            this.bindEvents();
            //this.typeAheadSearch();
        },
    };
    $(document).ready(function () {
        if($('.header-component').length > 0){
            searchComponent.init($('.header-component'));
            
            $('body').on('click',function (e) {
                
                if(($(window).width() >= 768) ){
                    if (!$('.js-search-container').find(e.target).length && !$('.suggestion-box').find(e.target).length) {
                        searchComponent.$searchContainer.removeClass('focusin');
                        $('.suggestion-box').hide();
                    }
                }
                
                if(($(window).width() < 767) ){
                    if($('.global-search:visible').length > 0){
                        if (!$('#js-globalsearch').find(e.target).length && !$('.js-showSearchBox').find(e.target).length && (e.target.id != "js-clear-tags")) {
                            $("#js-globalsearch").hide();
                            $('.js-showSearchBox').show();
                        }
                    }
                }
            });
            
            $(window).on('resize', function () {
                $('body').on('click',function (e) {
                    if(($(window).width() < 767) ){
                        if($('.global-search:visible').length > 0){
                            if (!$('#js-globalsearch').find(e.target).length && !$('.js-showSearchBox').find(e.target).length && (e.target.id != "js-clear-tags")) {
                                $("#js-globalsearch").hide();
                                $('.js-showSearchBox').show();
                            }
                        }
                    }
                });
                
            });
        }
    });
    Array.prototype.contains = function ( needle ) {
        for (var i in this) {
            if (this[i] == needle) return true;
        }
        return false;
    };
}());
