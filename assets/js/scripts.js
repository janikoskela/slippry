/** @preserve
 *
 * slippry v1.2.7 - Responsive content slider for jQuery
 * http://slippry.com
 *
 * Authors: Lukas Jakob Hafner - @saftsaak
 *          Thomas Hurd - @SeenNotHurd
 *
 * Copyright 2014, booncon oy - http://booncon.com
 *
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
function smoothScroll(s){var t=s.hash;$("html, body").animate({scrollTop:$(s.hash).offset().top-50},600,function(){window.location.hash=t})}!function(s){"use strict";var t;t={slippryWrapper:'<div class="sy-box" />',slideWrapper:'<div class="sy-slides-wrap" />',slideCrop:'<div class="sy-slides-crop" />',boxClass:"sy-list",elements:"li",activeClass:"sy-active",fillerClass:"sy-filler",loadingClass:"sy-loading",adaptiveHeight:!0,start:1,loop:!0,captionsSrc:"img",captions:"overlay",captionsEl:".sy-caption",initSingle:!0,responsive:!0,preload:"visible",pager:!0,pagerClass:"sy-pager",controls:!0,controlClass:"sy-controls",prevClass:"sy-prev",prevText:"Previous",nextClass:"sy-next",nextText:"Next",hideOnEnd:!0,transition:"fade",kenZoom:120,slideMargin:0,transClass:"transition",speed:800,easing:"swing",continuous:!0,useCSS:!0,auto:!0,autoDirection:"next",autoHover:!0,autoHoverDelay:100,autoDelay:500,pause:4e3,onSliderLoad:function(){return this},onSlideBefore:function(){return this},onSlideAfter:function(){return this}},s.fn.slippry=function(e){var i,a,r,n,o,l,p,c,v,d,u,g,h,f,y,m,C,S,x,b,k,j,w,W;return a=this,0===a.length?this:a.length>1?(a.each(function(){s(this).slippry(e)}),this):(i={},i.vars={},u=function(){var s,t,e;t=document.createElement("div"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",MSTransition:"msTransitionEnd",OTransition:"oTransitionEnd",transition:"transitionEnd transitionend"};for(s in e)if(void 0!==t.style[s])return e[s]},b=function(){var s=document.createElement("div"),t=["Khtml","Ms","O","Moz","Webkit"],e=t.length;return function(i){if(i in s.style)return!0;for(i=i.replace(/^[a-z]/,function(s){return s.toUpperCase()});e--;)if(t[e]+i in s.style)return!0;return!1}}(),w=function(t,e){var i,a,r,n;return i=e.split("."),a=s(t),r="",n="",s.each(i,function(s,t){t.indexOf("#")>=0?r+=t.replace(/^#/,""):n+=t+" "}),r.length&&a.attr("id",r),n.length&&a.attr("class",s.trim(n)),a},W=function(){var s,t,e,a;e={},a={},s=100-i.settings.kenZoom,a.width=i.settings.kenZoom+"%",0===i.vars.active.index()%2?(a.left=s+"%",a.top=s+"%",e.left="0%",e.top="0%"):(a.left="0%",a.top="0%",e.left=s+"%",e.top=s+"%"),t=i.settings.pause+2*i.settings.speed,i.vars.active.css(a),i.vars.active.animate(e,{duration:t,easing:i.settings.easing,queue:!1})},v=function(){i.vars.fresh?(i.vars.slippryWrapper.removeClass(i.settings.loadingClass),i.vars.fresh=!1,i.settings.auto&&a.startAuto(),i.settings.useCSS||"kenburns"!==i.settings.transition||W(),i.settings.onSliderLoad.call(void 0,i.vars.active.index())):s("."+i.settings.fillerClass,i.vars.slideWrapper).addClass("ready")},f=function(t,e){var a,r,n;a=t/e,r=100*(1/a)+"%",n=s("."+i.settings.fillerClass,i.vars.slideWrapper),n.css({paddingTop:r}),v()},n=function(t){var e,i;void 0!==s("img",t).attr("src")?s("<img />").load(function(){e=t.width(),i=t.height(),f(e,i)}).attr("src",s("img",t).attr("src")):(e=t.width(),i=t.height(),f(e,i))},r=function(){if(0===s("."+i.settings.fillerClass,i.vars.slideWrapper).length&&i.vars.slideWrapper.append(s('<div class="'+i.settings.fillerClass+'" />')),i.settings.adaptiveHeight===!0)n(s("."+i.settings.activeClass,a));else{var t,e,r;e=0,r=0,s(i.vars.slides).each(function(){s(this).height()>e&&(t=s(this),e=t.height()),r+=1,r===i.vars.count&&(void 0===t&&(t=s(s(i.vars.slides)[0])),n(t))})}},h=function(){i.settings.pager&&(s("."+i.settings.pagerClass+" li",i.vars.slippryWrapper).removeClass(i.settings.activeClass),s(s("."+i.settings.pagerClass+" li",i.vars.slippryWrapper)[i.vars.active.index()]).addClass(i.settings.activeClass))},S=function(){!i.settings.loop&&i.settings.hideOnEnd&&(s("."+i.settings.prevClass,i.vars.slippryWrapper)[i.vars.first?"hide":"show"](),s("."+i.settings.nextClass,i.vars.slippryWrapper)[i.vars.last?"hide":"show"]())},l=function(){var t,e;i.settings.captions!==!1&&(t="img"!==i.settings.captionsSrc?i.vars.active.attr("title"):s("img",i.vars.active).attr(void 0!==s("img",i.vars.active).attr("title")?"title":"alt"),e="custom"!==i.settings.captions?s(i.settings.captionsEl,i.vars.slippryWrapper):s(i.settings.captionsEl),void 0!==t&&""!==t?e.html(t).show():e.hide())},a.startAuto=function(){void 0===i.vars.timer&&void 0===i.vars.delay&&(i.vars.delay=window.setTimeout(function(){i.vars.autodelay=!1,i.vars.timer=window.setInterval(function(){i.vars.trigger="auto",C(i.settings.autoDirection)},i.settings.pause)},i.vars.autodelay?i.settings.autoHoverDelay:i.settings.autoDelay),i.settings.autoHover&&i.vars.slideWrapper.unbind("mouseenter").unbind("mouseleave").bind("mouseenter",function(){void 0!==i.vars.timer?(i.vars.hoverStop=!0,a.stopAuto()):i.vars.hoverStop=!1}).bind("mouseleave",function(){i.vars.hoverStop&&(i.vars.autodelay=!0,a.startAuto())}))},a.stopAuto=function(){window.clearInterval(i.vars.timer),i.vars.timer=void 0,window.clearTimeout(i.vars.delay),i.vars.delay=void 0},a.refresh=function(){i.vars.slides.removeClass(i.settings.activeClass),i.vars.active.addClass(i.settings.activeClass),i.settings.responsive?r():v(),S(),h(),l()},m=function(){a.refresh()},d=function(){i.vars.moving=!1,i.vars.active.removeClass(i.settings.transClass),i.vars.fresh||i.vars.old.removeClass("sy-ken"),i.vars.old.removeClass(i.settings.transClass),i.settings.onSlideAfter.call(void 0,i.vars.active,i.vars.old.index(),i.vars.active.index()),i.settings.auto&&(i.vars.hoverStop&&void 0!==i.vars.hoverStop||a.startAuto())},y=function(){var t,e,r,n,o,l,p;i.settings.onSlideBefore.call(void 0,i.vars.active,i.vars.old.index(),i.vars.active.index()),i.settings.transition!==!1?(i.vars.moving=!0,"fade"===i.settings.transition||"kenburns"===i.settings.transition?(i.vars.fresh?(i.vars.slides.css(i.settings.useCSS?{transitionDuration:i.settings.speed+"ms",opacity:0}:{opacity:0}),i.vars.active.css("opacity",1),"kenburns"===i.settings.transition&&i.settings.useCSS&&(o=i.settings.pause+2*i.settings.speed,i.vars.slides.css({animationDuration:o+"ms"}),i.vars.active.addClass("sy-ken")),d()):i.settings.useCSS?(i.vars.old.addClass(i.settings.transClass).css("opacity",0),i.vars.active.addClass(i.settings.transClass).css("opacity",1),"kenburns"===i.settings.transition&&i.vars.active.addClass("sy-ken"),s(window).off("focus").on("focus",function(){i.vars.moving&&i.vars.old.trigger(i.vars.transition)}),i.vars.old.one(i.vars.transition,function(){return d(),this})):("kenburns"===i.settings.transition&&W(),i.vars.old.addClass(i.settings.transClass).animate({opacity:0},i.settings.speed,i.settings.easing,function(){d()}),i.vars.active.addClass(i.settings.transClass).css("opacity",0).animate({opacity:1},i.settings.speed,i.settings.easing)),m()):("horizontal"===i.settings.transition||"vertical"===i.settings.transition)&&(l="horizontal"===i.settings.transition?"left":"top",t="-"+i.vars.active.index()*(100+i.settings.slideMargin)+"%",i.vars.fresh?(a.css(l,t),d()):(p={},i.settings.continuous&&(!i.vars.jump||"controls"!==i.vars.trigger&&"auto"!==i.vars.trigger||(e=!0,n=t,i.vars.first?(r=0,i.vars.active.css(l,i.vars.count*(100+i.settings.slideMargin)+"%"),t="-"+i.vars.count*(100+i.settings.slideMargin)+"%"):(r=(i.vars.count-1)*(100+i.settings.slideMargin)+"%",i.vars.active.css(l,-(100+i.settings.slideMargin)+"%"),t=100+i.settings.slideMargin+"%"))),i.vars.active.addClass(i.settings.transClass),i.settings.useCSS?(p[l]=t,p.transitionDuration=i.settings.speed+"ms",a.addClass(i.settings.transition),a.css(p),s(window).off("focus").on("focus",function(){i.vars.moving&&a.trigger(i.vars.transition)}),a.one(i.vars.transition,function(){return a.removeClass(i.settings.transition),e&&(i.vars.active.css(l,r),p[l]=n,p.transitionDuration="0ms",a.css(p)),d(),this})):(p[l]=t,a.stop().animate(p,i.settings.speed,i.settings.easing,function(){return e&&(i.vars.active.css(l,r),a.css(l,n)),d(),this}))),m())):(m(),d())},x=function(s){i.vars.first=i.vars.last=!1,"prev"===s||0===s?i.vars.first=!0:("next"===s||s===i.vars.count-1)&&(i.vars.last=!0)},C=function(t){var e;i.vars.moving||("auto"!==i.vars.trigger&&a.stopAuto(),e=i.vars.active.index(),"prev"===t?e>0?t=e-1:i.settings.loop&&(t=i.vars.count-1):"next"===t?e<i.vars.count-1?t=e+1:i.settings.loop&&(t=0):t-=1,i.vars.jump=!1,"prev"===t||"next"===t||t===e&&!i.vars.fresh||(x(t),i.vars.old=i.vars.active,i.vars.active=s(i.vars.slides[t]),(0===e&&t===i.vars.count-1||e===i.vars.count-1&&0===t)&&(i.vars.jump=!0),y()))},a.goToSlide=function(s){i.vars.trigger="external",C(s)},a.goToNextSlide=function(){i.vars.trigger="external",C("next")},a.goToPrevSlide=function(){i.vars.trigger="external",C("prev")},p=function(){if(i.settings.pager&&i.vars.count>1){var t,e,a;for(t=i.vars.slides.length,a=s('<ul class="'+i.settings.pagerClass+'" />'),e=1;t+1>e;e+=1)a.append(s("<li />").append(s('<a href="#'+e+'">'+e+"</a>")));i.vars.slippryWrapper.append(a),s("."+i.settings.pagerClass+" a",i.vars.slippryWrapper).click(function(){return i.vars.trigger="pager",C(parseInt(this.hash.split("#")[1],10)),!1}),h()}},c=function(){i.settings.controls&&i.vars.count>1&&(i.vars.slideWrapper.append(s('<ul class="'+i.settings.controlClass+'" />').append('<li class="'+i.settings.prevClass+'"><a href="#prev">'+i.settings.prevText+"</a></li>").append('<li class="'+i.settings.nextClass+'"><a href="#next">'+i.settings.nextText+"</a></li>")),s("."+i.settings.controlClass+" a",i.vars.slippryWrapper).click(function(){return i.vars.trigger="controls",C(this.hash.split("#")[1]),!1}),S())},g=function(){i.settings.captions!==!1&&("overlay"===i.settings.captions?i.vars.slideWrapper.append(s('<div class="sy-caption-wrap" />').html(w("<div />",i.settings.captionsEl))):"below"===i.settings.captions&&i.vars.slippryWrapper.append(s('<div class="sy-caption-wrap" />').html(w("<div />",i.settings.captionsEl))))},j=function(){C(i.vars.active.index()+1)},k=function(t){var e,a,r,n;return n="all"===i.settings.preload?t:i.vars.active,r=s("img, iframe",n),e=r.length,0===e?void j():(a=0,void r.each(function(){s(this).one("load error",function(){++a===e&&j()}).each(function(){this.complete&&s(this).load()})}))},a.getCurrentSlide=function(){return i.vars.active},a.getSlideCount=function(){return i.vars.count},a.destroySlider=function(){i.vars.fresh===!1&&(a.stopAuto(),i.vars.moving=!1,i.vars.slides.each(function(){void 0!==s(this).data("sy-cssBckup")?s(this).attr("style",s(this).data("sy-cssBckup")):s(this).removeAttr("style"),void 0!==s(this).data("sy-classBckup")?s(this).attr("class",s(this).data("sy-classBckup")):s(this).removeAttr("class")}),void 0!==a.data("sy-cssBckup")?a.attr("style",a.data("sy-cssBckup")):a.removeAttr("style"),void 0!==a.data("sy-classBckup")?a.attr("class",a.data("sy-classBckup")):a.removeAttr("class"),i.vars.slippryWrapper.before(a),i.vars.slippryWrapper.remove(),i.vars.fresh=void 0)},a.reloadSlider=function(){a.destroySlider(),o()},o=function(){var r;return i.settings=s.extend({},t,e),i.vars.slides=s(i.settings.elements,a),i.vars.count=i.vars.slides.length,i.settings.useCSS&&(b("transition")||(i.settings.useCSS=!1),i.vars.transition=u()),a.data("sy-cssBckup",a.attr("style")),a.data("sy-classBackup",a.attr("class")),a.addClass(i.settings.boxClass).wrap(i.settings.slippryWrapper).wrap(i.settings.slideWrapper).wrap(i.settings.slideCrop),i.vars.slideWrapper=a.parent().parent(),i.vars.slippryWrapper=i.vars.slideWrapper.parent().addClass(i.settings.loadingClass),i.vars.fresh=!0,i.vars.slides.each(function(){s(this).addClass("sy-slide "+i.settings.transition),i.settings.useCSS&&s(this).addClass("useCSS"),"horizontal"===i.settings.transition?s(this).css("left",s(this).index()*(100+i.settings.slideMargin)+"%"):"vertical"===i.settings.transition&&s(this).css("top",s(this).index()*(100+i.settings.slideMargin)+"%")}),i.vars.count>1||i.settings.initSingle?(-1===s("."+i.settings.activeClass,a).index()?(r="random"===i.settings.start?Math.round(Math.random()*(i.vars.count-1)):i.settings.start>0&&i.settings.start<=i.vars.count?i.settings.start-1:0,i.vars.active=s(i.vars.slides[r]).addClass(i.settings.activeClass)):i.vars.active=s("."+i.settings.activeClass,a),c(),p(),g(),k(i.vars.slides),void 0):this},o(),this)}}(jQuery),jQuery(document).ready(function(){jQuery("#slippry-demo").slippry({slippryWrapper:'<div class="sy-box front-page" />'}),jQuery(".button-link.download, .button-link.github-download").click(function(){ga("send","event","Download","Click","Slippry(zip)")}),jQuery(".github-link").click(function(){ga("send","event","Github","Click","Ribbon")}),jQuery("#out-of-the-box-demo").slippry(),jQuery("#settings-jump a:not(#select-setting)").click(function(s){s.preventDefault(),smoothScroll(this)}),jQuery("#front-link").click(function(s){s.preventDefault(),smoothScroll(this)}),jQuery("#pictures-demo").slippry({slippryWrapper:'<div class="sy-box pictures-slider" />',adaptiveHeight:!1,captions:!1,pager:!1,controls:!1,autoHover:!1,transition:"kenburns",kenZoom:140,speed:2e3}),jQuery("#portfolio-demo").slippry({slippryWrapper:'<div class="sy-box portfolio-slider" />',adaptiveHeight:!1,start:"random",loop:!1,captionsSrc:"li",captions:"custom",captionsEl:".external-captions",transition:"fade",easing:"linear",continuous:!1,auto:!1}),jQuery("#news-demo").slippry({slippryWrapper:'<div class="sy-box news-slider" />',elements:"article",adaptiveHeight:!1,captions:!1,pagerClass:"news-pager",transition:"horizontal",speed:1200,pause:8e3,autoDirection:"prev"}),jQuery("#shop-demo").slippry({slippryWrapper:'<div class="sy-box shop-slider" />',elements:"article",adaptiveHeight:!1,start:2,loop:!1,captionsSrc:"article",captions:"custom",captionsEl:".product-name",pager:!1,slideMargin:20,useCSS:!0,transition:"horizontal",auto:!1});var s=jQuery("#thumbnails").slippry({slippryWrapper:'<div class="sy-box thumbnails" />',transition:"horizontal",pager:!1,auto:!1,onSlideBefore:function(s,t,e){jQuery(".thumbs a img").removeClass("active"),jQuery("img",jQuery(".thumbs a")[e]).addClass("active")}});jQuery(".thumbs a").click(function(){return s.goToSlide($(this).data("slide")),!1}),jQuery("#css-demo").slippry({slippryWrapper:'<div class="sy-box css-demo" />',adaptiveHeight:!0,useCSS:!0,autoHover:!1,transition:"horizontal"}),jQuery("#jquery-demo").slippry({slippryWrapper:'<div class="sy-box jquery-demo" />',adaptiveHeight:!1,useCSS:!1,autoHover:!1,transition:"horizontal"}),jQuery("#select-setting").click(function(){return jQuery("#settings-jump").hasClass("open")?jQuery("#settings-jump").switchClass("open","closed",1e3):jQuery("#settings-jump").hasClass("closed")&&jQuery("#settings-jump").switchClass("closed","open",1e3),!1}),jQuery("#settings-jump a").click(function(){jQuery("#settings-jump").hasClass("open")&&jQuery("#settings-jump").switchClass("open","closed",1e3)})});