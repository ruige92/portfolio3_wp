!function(e){var a={};function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)t.d(n,i,function(a){return e[a]}.bind(null,i));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";t.r(a);const n=()=>{let e=["EAGER","PROACTIVE","CREATIVE","HUNGRY","HAPPY","CURIOUS","HUMBLE"];return e[Math.floor(Math.random()*e.length)]},i=()=>{setInterval((function(){n();$(".landing-left [data-chaffle]").text(n()),$(".landing-left [data-chaffle]").css("color",(()=>{let e=["#4286f4","#f44141","#f4cd41","#41f48b","#ae5be5",""];return e[Math.floor(Math.random()*e.length)]})()),(()=>{const e=document.querySelectorAll(".landing-left [data-chaffle]");Array.prototype.forEach.call(e,(function(e){new Chaffle(e,{speed:"20",delay:"200"}).init()}))})()}),5e3)},o=()=>{$(".readmore").on("mouseenter",(function(){"ciscoStory"==$(this).attr("id")?($("#ciscoModalStory").siblings().css({display:"none"}),$("#ciscoModalImg").siblings().css({display:"none"}),$("#right-modal-clostBtn").css({display:"block"}),$("#ciscoModalStory").css({display:"block"}),$("#ciscoModalImg").css({display:"block"})):"kentStory"==$(this).attr("id")?($("#kentModalStory").siblings().css({display:"none"}),$("#kentModalImg").siblings().css({display:"none"}),$("#right-modal-clostBtn").css({display:"block"}),$("#kentModalStory").css({display:"block"}),$("#kentModalImg").css({display:"block"})):"riotStory"==$(this).attr("id")?($("#riotModalStory").siblings().css({display:"none"}),$("#riotModalImg").siblings().css({display:"none"}),$("#right-modal-clostBtn").css({display:"block"}),$("#riotModalStory").css({display:"block"}),$("#riotModalImg").css({display:"block"})):"ggpStory"==$(this).attr("id")&&($("#ggpModalStory").siblings().css({display:"none"}),$("#ggpModalImg").siblings().css({display:"none"}),$("#right-modal-clostBtn").css({display:"block"}),$("#ggpModalStory").css({display:"block"}),$("#ggpModalImg").css({display:"block"})),anime({targets:".readmore",translateY:5,duration:300,easing:"linear"})})).on("mouseleave",(function(){anime({targets:".readmore",translateY:0,duration:300,easing:"linear"})})).on("click",(function(){$([document.documentElement,document.body]).animate({scrollTop:$("#home-wrapper").offset().top},500),(0,bodyScrollLock.disableBodyScroll)($("#desktop-right-modal")),$("body").addClass("overflowHidden"),$(".hamburger").fadeOut(),$(".navContactIcons").fadeOut(),anime({targets:"#desktop-right-modal",translateX:["100%",0],duration:300,easing:"linear"}),anime({targets:"#desktop-left-modal",translateX:["-100%",0],duration:300,easing:"linear"}),anime({targets:["#image-carousel","#slider-control"],opacity:[1,0],duration:200,easing:"linear",update:function(){$("#slider-control").removeClass("animated fadeInLeft"),$("#image-carousel").css({"pointer-events":"none"}),$("#slider-control").css({"pointer-events":"none"})}})})),$("#right-modal-clostBtn").on("click",(function(){bodyScrollLock.clearAllBodyScrollLocks(),$("body").removeClass("overflowHidden"),$(".hamburger").fadeIn(),$(".navContactIcons").fadeIn(),anime({targets:"#desktop-right-modal",translateX:[0,"100%"],duration:300,easing:"linear"}),anime({targets:"#desktop-left-modal",translateX:[0,"-100%"],duration:300,easing:"linear"}),anime({targets:["#image-carousel","#slider-control"],opacity:[0,1],duration:500,easing:"linear",update:function(){$("#image-carousel").css({"pointer-events":"auto"}),$("#slider-control").css({"pointer-events":"auto"})}})}))};let s=new Dragdealer,l=new Dragdealer;const d=e=>{$(e).each((function(){$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>"))})),anime({targets:e+" .letter",translateX:[40,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:1200,delay:function(e,a){return 300+30*a}})},r=()=>{anime({targets:"#image-carousel img",scale:"0.8",opacity:"0.8",duration:200,easing:"easeInQuart"})},c=()=>{anime({targets:"#image-carousel img",scale:"1",opacity:"1",duration:300,easing:"easeInQuart"})},m=()=>{anime({targets:".dragdealer .red-bar",width:"65px",backgroundColor:"#000",duration:200,easing:"linear"})},u=()=>{anime({targets:".dragdealer .red-bar",width:"50px",backgroundColor:"#888",duration:200,easing:"linear"})},g=()=>{anime({targets:".image-description",opacity:0,easing:"linear",duration:300,scale:.9})},f=()=>{anime({targets:".image-description",opacity:1,scale:1,duration:300,easing:"linear"})},p=()=>{anime({targets:"#background-text",opacity:0,duration:300,easing:"linear"})},b=()=>{anime({targets:"#background-text",opacity:1,duration:300,easing:"linear"})},y=()=>{s=new Dragdealer("slider-control",{steps:4,speed:.5,loose:!0,animationCallback:function(e,a){let t=1;t=Object.values(this.getStep())[0],$("#slider-control .value").text(t+" / 4"),l.setStep(t)}});let e=!1;$("#slider-control .red-bar").mousedown((function(){$("#image-carousel img").removeClass("animated slideInLeft"),$(".image-description").removeClass("animated fadeInRight"),$("#background-text").removeClass("animated fadeInUp"),e=!1,r(),m(),g(),p()})).mousemove((function(){e=!0})),$(document).mouseup((function(){let a=e;if(e=!1,a||(c(),u(),f(),b()),a){c(),u(),f(),b();let e=Object.values(l.getStep())[0],a=Object.values(l.getValue())[0];1==e?(s.setValue(a),d(".header1")):2==e?(s.setValue(a),d(".header2")):3==e?(s.setValue(a),d(".header3")):4==e&&(s.setValue(a),d(".header4"))}}))},h=()=>{$("#techTitle").on("click",(function(){(0,bodyScrollLock.disableBodyScroll)($("#techTitle")),$("#box1").removeClass("fadeInLeft"),$("#box2").removeClass("fadeInUp"),$("#box3").removeClass("fadeInRight"),$("body").addClass("overflowHidden"),$(".skill-titles").removeClass("techTitle desTitle proTitle"),$(".skill-titles").addClass("techTitle"),$("#techTitle").fadeOut(50),$("#desTitle").fadeOut(50),$("#proTitle").fadeOut(50),anime({targets:[".skill-titles","#box2","#box3"],opacity:0,duration:50,easing:"linear"}),$(".hamburger").fadeOut(),$(".cv").fadeOut(),$(".navContactIcons").fadeOut(),$("#mobileLogo").fadeOut(),$("#box1").css({"background-color":"rgba(255, 255, 255, 0)"}),$("#box1 svg").css({position:"absolute",left:"0",top:"0","z-index":"6"}),anime({targets:["#deshHead","#proHead"],opacity:0,duration:200}),$("#techHead").addClass("animated fadeInUp delay-05s"),$(".skill-head").css({position:"absolute",left:"0",top:"0","z-index":"6"}),anime.timeline().add({targets:"#circle",r:[20,250],duration:500,easing:"easeInOutSine"}),anime.timeline().add({targets:"#m-circle",r:[20,250],duration:500,easing:"easeInOutSine"}),$(".skill-head").css({opacity:1,"z-index":4}),$(".skill-list").css({opacity:1,"z-index":4}),anime({targets:["#techList",".skill-back-btn","#techHead"],duration:200,delay:1e3,opacity:1,easing:"linear",update:function(){$("#techList ul li").each((function(){$(this).addClass("animated fadeInUp");for(let e=0;e<$("#techList ul li").length;e++)$("#techList ul li").eq(e).css({"animation-delay":"1."+e+"5s"})}))}}),$("#desList").css({"z-index":3}),$("#proList").css({"z-index":3})})),$("#desTitle").on("click",(function(){(0,bodyScrollLock.disableBodyScroll)($("#desTitle")),$("#box1").removeClass("fadeInLeft"),$("#box2").removeClass("fadeInUp"),$("#box3").removeClass("fadeInRight"),$("body").addClass("overflowHidden"),$(".skill-titles").removeClass("techTitle desTitle proTitle"),$(".skill-titles").addClass("desTitle"),$("#techTitle").fadeOut(50),$("#desTitle").fadeOut(50),$("#proTitle").fadeOut(50),anime({targets:[".skill-titles","#box1","#box3"],opacity:0,duration:50,easing:"linear"}),$(".hamburger").fadeOut(),$(".navContactIcons").fadeOut(),$("#mobileLogo").fadeOut(),$("#box2").css({"background-color":"rgba(255, 255, 255, 0)"}),$("#box2 svg").css({position:"absolute",left:"0",top:"0","z-index":"6"}),anime({targets:["#proHead","#techHead"],opacity:0,duration:200}),$("#desHead").addClass("animated fadeInUp delay-05s"),$(".skill-head").css({position:"absolute",left:"0",top:"0","z-index":"6"}),anime.timeline().add({targets:"#circle2",r:[20,250],duration:500,easing:"easeInOutSine"}),anime.timeline().add({targets:"#m-circle2",r:[20,250],duration:500,easing:"easeInOutSine"}),$(".skill-head").css({opacity:1,"z-index":4}),$(".skill-list").css({opacity:1,"z-index":4}),anime({targets:["#desList",".skill-back-btn"],duration:200,delay:1e3,opacity:1,easing:"linear",update:function(){$("#desList ul li").each((function(){$(this).addClass("animated fadeInUp");for(let e=0;e<$("#desList ul li").length;e++)$("#desList ul li").eq(e).css({"animation-delay":"1."+e+"5s"})}))}}),$("#techList").css({"z-index":3}),$("#proList").css({"z-index":3})})),$("#proTitle").on("click",(function(){(0,bodyScrollLock.disableBodyScroll)($("#proTitle")),$("#box1").removeClass("fadeInLeft"),$("#box2").removeClass("fadeInUp"),$("#box3").removeClass("fadeInRight"),$("body").addClass("overflowHidden"),$(".skill-titles").removeClass("techTitle desTitle proTitle"),$(".skill-titles").addClass("proTitle"),$("#techTitle").fadeOut(50),$("#desTitle").fadeOut(50),$("#proTitle").fadeOut(50),anime({targets:[".skill-titles","#box1","#box2"],opacity:0,duration:50,easing:"linear"}),$(".hamburger").fadeOut(),$(".navContactIcons").fadeOut(),$("#mobileLogo").fadeOut(),$("#box3").css({"background-color":"rgba(255, 255, 255, 0)"}),$("#box3 svg").css({position:"absolute",left:"0",top:"0","z-index":"6"}),anime({targets:["#deshHead","#techHead"],opacity:0,duration:200}),$("#proHead").addClass("animated fadeInUp delay-05s"),$(".skill-head").css({position:"absolute",left:"0",top:"0","z-index":"6"}),anime.timeline().add({targets:"#circle3",r:[20,250],duration:500,easing:"easeInOutSine"}),anime.timeline().add({targets:"#m-circle3",r:[20,250],duration:500,easing:"easeInOutSine"}),$(".skill-head").css({opacity:1,"z-index":4}),$(".skill-list").css({opacity:1,"z-index":4}),anime({targets:["#proList",".skill-back-btn"],duration:200,delay:1e3,opacity:1,easing:"linear",update:function(){$("#proList ul li").each((function(){$(this).addClass("animated fadeInUp");for(let e=0;e<$("#proList ul li").length;e++)$("#proList ul li").eq(e).css({"animation-delay":"1."+e+"5s"})}))}}),$("#techList").css({"z-index":3}),$("#proList").css({"z-index":3})})),$(".skill-back-btn").on("click",(function(){$(".skill-head").css({opacity:0,"z-index":3}),$(".skill-list").css({opacity:0,"z-index":3}),$(".skill-titles").hasClass("techTitle")?(bodyScrollLock.clearAllBodyScrollLocks(),$("body").removeClass("overflowHidden"),$(".skill-titles").removeClass("techTitle desTitle proTitle"),$("#techHead").removeClass("animated fadeInUp delay-05s"),$("#techTitle").fadeIn(),$("#desTitle").fadeIn(),$("#proTitle").fadeIn(),anime({targets:"#circle",r:[250,20],duration:100,easing:"easeOutExpo"}),anime({targets:"#m-circle",r:[250,0],duration:100,easing:"easeOutExpo"}),anime({targets:["#techList",".skill-back-btn"],duration:200,opacity:0}),$("#box1 svg").css({position:"static","z-index":"3"}),$(".skill-head").css({"z-index":"3"}),anime({targets:".skill-titles",opacity:1,duration:200}),$(".hamburger").fadeIn(),$(".navContactIcons").fadeIn(),$("#mobileLogo").fadeIn(),$("#box1").css({"background-color":"rgb(87, 220, 154)"}),$("#box1").css({opacity:"1"}),$("#box2").css({opacity:"1"}),$("#box3").css({opacity:"1"}),$("#box2").fadeIn(),$("#box3").fadeIn()):$(".skill-titles").hasClass("desTitle")?(bodyScrollLock.clearAllBodyScrollLocks(),$("body").removeClass("overflowHidden"),$(".skill-titles").removeClass("techTitle desTitle proTitle"),$("#desHead").removeClass("animated fadeInUp delay-05s"),$("#techTitle").fadeIn(),$("#desTitle").fadeIn(),$("#proTitle").fadeIn(),anime({targets:"#circle2",r:[250,20],duration:100,translateX:0,easing:"easeOutExpo"}),anime({targets:"#m-circle2",r:[250,0],duration:100,translateX:0,easing:"easeOutExpo"}),anime({targets:["#desList",".skill-back-btn"],duration:200,opacity:0}),$("#box2 svg").css({position:"static","z-index":"3"}),$(".skill-head").css({"z-index":"3"}),anime({targets:".skill-titles",opacity:1,duration:200}),$(".hamburger").fadeIn(),$(".navContactIcons").fadeIn(),$("#mobileLogo").fadeIn(),$("#box2").css({"background-color":"rgb(129, 205, 229)"}),$("#box1").css({opacity:"1"}),$("#box2").css({opacity:"1"}),$("#box3").css({opacity:"1"}),$("#box1").fadeIn(),$("#box3").fadeIn()):$(".skill-titles").hasClass("proTitle")&&(bodyScrollLock.clearAllBodyScrollLocks(),$("body").removeClass("overflowHidden"),$(".skill-titles").removeClass("techTitle desTitle proTitle"),$("#proHead").removeClass("animated fadeInUp delay-05s"),$("#techTitle").fadeIn(),$("#desTitle").fadeIn(),$("#proTitle").fadeIn(),anime({targets:["#circle3","#m-circle3"],r:[250,20],duration:100,translateX:0,easing:"easeOutExpo"}),anime({targets:"#m-circle3",r:[250,0],duration:100,translateX:0,easing:"easeOutExpo"}),anime({targets:["#proList",".skill-back-btn"],duration:200,opacity:0}),$("#box3 svg").css({position:"static","z-index":"3"}),$(".skill-head").css({"z-index":"3"}),anime({targets:".skill-titles",opacity:1,duration:200}),$(".hamburger").fadeIn(),$(".navContactIcons").fadeIn(),$("#mobileLogo").fadeIn(),$("#box3").css({"background-color":"rgb(220, 87, 87)"}),$("#box1").css({opacity:"1"}),$("#box2").css({opacity:"1"}),$("#box3").css({opacity:"1"}),$("#box1").fadeIn(),$("#box2").fadeIn())}))},x=e=>{1==e?(anime({targets:"#m-line1",x1:6.9,x2:35.2,y1:6.3,y2:34.6}),anime({targets:"#m-line2",x1:6.9,x2:35.2,y1:34.6,y2:6.3})):(anime({targets:"#m-line1",x1:null,x2:40,y1:10.4,y2:10.4}),anime({targets:"#m-line2",x1:null,x2:40,y1:30.4,y2:30.4}))},I=e=>{anime({targets:["#m-line1","#m-line2"],stroke:e,duration:50,easing:"linear"})},v=()=>{$(".contactIcons").children().each((function(){$(this).on("mouseover",(function(){$(this).children().attr("fill","#000")})).on("mouseleave",(function(){$(this).children().attr("fill","#ccc")}))})),$("nav a").each((function(){$(this).on("mouseover",(function(){$(this).css("color","#000")})).on("mouseleave",(function(){$(this).css("color","#ccc")})),$(this).on("click",(function(){$("nav a").removeClass("animated slideInUp"),$(".contactIcons a").removeClass("animated slideInUp delay-05s"),I(k),$("body").removeClass("overflowHidden"),bodyScrollLock.clearAllBodyScrollLocks(),x(!1),$(".hamburger").removeClass("closeBurger"),anime({targets:".sidebar nav",opacity:0,duration:100,easing:"linear",update:function(){$(".sidebar nav").css({"z-index":-1})}})}))}))};let k=$("#m-line1").css("stroke");const C=()=>{const e=bodyScrollLock.disableBodyScroll,a=bodyScrollLock.enableBodyScroll,t=$(".sidebar nav");$(".navContactIcons").on("mouseenter",(function(){anime({targets:"#mainLogo",letterSpacing:["-9px","-5px"],duration:200,easing:"linear"})})).on("mouseleave",(function(){anime({targets:"#mainLogo",letterSpacing:["-5px","-9px"],duration:200,easing:"linear"})})),$(".hamburger").on("mouseenter",(function(){$(".hamburger").hasClass("closeBurger")||(k=$("#m-line1").css("stroke"))})),$(".hamburger").on("click",(function(){if(e(t),$("nav a").addClass("animated slideInUp"),$(".contactIcons a").addClass("animated slideInUp delay-05s"),I("#000"),$("body").addClass("overflowHidden"),$(".hamburger").hasClass("closeBurger"))return a(t),$("nav a").removeClass("animated slideInUp"),$(".contactIcons a").removeClass("animated slideInUp delay-05s"),I(k),$("body").removeClass("overflowHidden"),x(!1),$(".hamburger").removeClass("closeBurger"),void anime({targets:".sidebar nav",opacity:0,duration:100,easing:"linear",update:function(){$(".sidebar nav").css({"z-index":-1})}});anime({targets:".sidebar nav",opacity:1,duration:150,easing:"linear",update:function(){$(".sidebar nav").css({"z-index":8})}}),$(this).addClass("closeBurger"),x(!0)}))},L=e=>{$(e).each((function(){$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>"))})),anime({targets:e+" .letter",translateY:[100,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:1400,delay:function(e,a){return 300+30*a}})},S=()=>{var e=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:"#home-wrapper"}).on("enter",(function(){anime({targets:["#image-carousel"],opacity:"1",duration:500,easing:"easeInQuart",update:function(){$("#image-carousel img").addClass("animated slideInLeft"),$("#slider-control").addClass("animated fadeInLeft"),$(".image-description").addClass("animated fadeInRight")}}),anime({targets:["#menuIcon line","#scroll-icon #scroll-item","#scroll-icon #scroll-line","#mainLogo","#mobilemainLogo"],stroke:"#000",fill:"#000",delay:300}),anime({targets:["#cvIcon #cv-line"],fill:"#000",delay:300}),anime({targets:["#home-wrapper",".intro-content","#skills-wrapper"],backgroundColor:"#fff",duration:50,easing:"linear"})})).on("leave",(function(){anime({targets:["#home-wrapper",".intro-content","#skills-wrapper"],backgroundColor:"#000",duration:50,easing:"linear"}),anime({targets:["#cvIcon #cv-line"],fill:"#fff",delay:300}),anime({targets:["#menuIcon line","#scroll-icon #scroll-item","#scroll-icon #scroll-line","#mainLogo","#mobilemainLogo"],stroke:"#fff",fill:"#fff",delay:300})})).addTo(e),new ScrollMagic.Scene({triggerElement:"#skills-wrapper",duration:"100%"}).on("enter",(function(){$("#skills-wrapper").addClass("animated fadeIn"),$("#box1").addClass("animated fadeInLeft"),$("#box2").addClass("animated fadeInUp"),$("#box3").addClass("animated fadeInRight"),L("#techTitle"),L("#desTitle"),L("#proTitle")})).on("leave",(function(){})).addTo(e),new ScrollMagic.Scene({triggerElement:"#landing-about"}).on("enter",(function(){$("#mobileLogo").removeClass("animated fadeInLeft"),$(".hamburger svg").removeClass("animated fadeInRight"),$(".cv svg").removeClass("animated fadeInRight"),$(".navContactIcons a svg").removeClass("animated slideInLeft"),anime({targets:[".hamburger",".navContactIcons","#mobileLogo",".cv"],duration:200,translateY:-20,easing:"linear"})})).on("leave",(function(){anime({targets:[".hamburger",".navContactIcons","#mobileLogo",".cv"],duration:200,translateY:0,easing:"linear"})})).addTo(e),new ScrollMagic.Scene({triggerElement:"#contact-wrapper"}).on("enter",(function(){anime({targets:["#contact-box","#m-contact-box"],width:"600px",easing:"linear",duration:600,opacity:1}),$("#contact-box").on("mouseenter",(function(){anime.timeline().add({targets:"#contact-box",translateY:-300,scale:.5}).add({targets:"#contact-box p",update:function(){$("#contact-box p").text("Let's Talk!")}}),$("#contact-form .group").addClass("animated fadeInUp")})),$("#m-contact-box").on("mouseenter",(function(){anime.timeline().add({targets:"#m-contact-box",translateY:-600,scale:.5}).add({targets:"#m-contact-box p",update:function(){$("#m-contact-box p").text("Let's Talk!")}}),$("#contact-form .group").addClass("animated fadeInUp")}))})).on("leave",(function(){})).addTo(e),new ScrollMagic.Scene({triggerElement:"#first-exp",duration:"100%"}).on("enter",(function(){$("#first-exp").hasClass("fadeInLeft")||$("#first-exp").addClass("animated fadeInLeft delay-0-5s")})).on("leave",(function(){})).addTo(e),new ScrollMagic.Scene({triggerElement:"#second-exp",duration:"100%"}).on("enter",(function(){$("#second-exp").hasClass("fadeInLeft")||$("#second-exp").addClass("animated fadeInLeft delay-0-5s")})).on("leave",(function(){})).addTo(e),new ScrollMagic.Scene({triggerElement:"#third-exp",duration:"100%"}).on("enter",(function(){$("#third-exp").hasClass("fadeInLeft")||$("#third-exp").addClass("animated fadeInLeft delay-0-5s")})).on("leave",(function(){})).addTo(e),new ScrollMagic.Scene({triggerElement:"#fourth-exp",duration:"100%"}).on("enter",(function(){$("#fourth-exp").hasClass("fadeInLeft")||$("#fourth-exp").addClass("animated fadeInLeft delay-0-5s")})).on("leave",(function(){})).addTo(e)};window.onbeforeunload=function(){window.scrollTo(0,0)},$(document).ready(($('a[href^="#"]').on("click",(function(e){var a=$(this.getAttribute("href"));a.length&&(e.preventDefault(),$("html, body").stop().animate({scrollTop:a.offset().top},200))})),v(),C(),anime({targets:["#menuIcon line","#mobilemainLogo","#cvIcon #cv-line"],fill:"#fff",opacity:1,stroke:"#fff",delay:500,easing:"linear"}),anime({targets:".navContactIcons svg",fill:"#fff",delay:2400}),$(".landing-left .isAnimated").addClass("fadeIn"),$(".landing-left").css({opacity:1}),$(".landing-left .isAnimated").eq(0).css("animation-delay","2s"),$(".landing-left .isAnimated").eq(1).css("animation-delay","2.2s"),$(".landing-left .isAnimated").eq(2).css("animation-delay","2.4s"),$(".landing-left .isAnimated").eq(3).css("animation-delay","2.6s"),$(".landing-down").addClass("fadeInUp"),$(".landing-down").css("animation-delay","2s"),$(".hamburger svg").addClass("animated fadeInRight"),$(".hamburger svg").css("animation-delay","2s"),$(".cv svg").addClass("animated fadeInRight"),$(".cv svg").css("animation-delay","2s"),$(".navContactIcons a svg").addClass("animated slideInLeft"),$(".navContactIcons a svg").css("animation-delay","2s"),$("#mobileLogo").addClass("animated fadeInLeft"),$("#mobileLogo").css("animation-delay","2s"),i(),S(),anime({targets:"#scroll-icon #scroll-item",delay:1500,translateY:20,opacity:1,easing:"easeInOutSine",loop:!0}),anime({targets:"#scroll-icon #scroll-line",opacity:1,loop:!1}),(()=>{l=new Dragdealer("image-carousel",{steps:4,speed:.5,loose:!0,requestAnimationFrame:!0});let e=!1;$(".slide img").mousedown((function(){$("#image-carousel img").removeClass("animated slideInLeft"),$(".image-description").removeClass("animated fadeInRight"),$("#background-text").removeClass("animated fadeInUp"),e=!1,r(),m(),g(),p()})).mousemove((function(){e=!0})),$(document).mouseup((function(){let a=e;if(e=!1,a||(c(),u(),f(),b()),a){c(),u(),f(),b();let e=Object.values(l.getStep())[0],a=Object.values(l.getValue())[0];1==e?(s.setValue(a),d(".header1")):2==e?(s.setValue(a),d(".header2")):3==e?(s.setValue(a),d(".header3")):4==e&&(s.setValue(a),d(".header4"))}}))})(),o(),$("#cisco-modal").on("click",(function(){$(".hamburger").fadeOut(),$("#mobileLogo").fadeOut(),$("#first-exp").removeClass("animated fadeInUp fadeInLeft delay-0-5s"),anime({targets:"#first-exp-modal",translateX:["100%",0],opacity:1,duration:300,easing:"easeInExpo"})})),$("#kent-modal").on("click",(function(){$(".hamburger").fadeOut(),$("#mobileLogo").fadeOut(),$("#second-exp").removeClass("animated fadeInUp fadeInLeft delay-0-5s"),anime({targets:"#second-exp-modal",translateX:["100%",0],opacity:1,duration:300,easing:"easeInExpo"})})),$("#riot-modal").on("click",(function(){$(".hamburger").fadeOut(),$("#mobileLogo").fadeOut(),$("#third-exp").removeClass("animated fadeInUp fadeInLeft delay-0-5s"),anime({targets:"#third-exp-modal",translateX:["100%",0],opacity:1,duration:300,easing:"easeInExpo"})})),$("#ggp-modal").on("click",(function(){$(".hamburger").fadeOut(),$("#mobileLogo").fadeOut(),$("#fourth-exp").removeClass("animated fadeInUp fadeInLeft delay-0-5s"),anime({targets:"#fourth-exp-modal",translateX:["100%",0],opacity:1,duration:300,easing:"easeInExpo"})})),$(".exp-modal-closeBtn").on("click",(function(){1==$("#first-exp-modal").css("opacity")?($("#first-exp").addClass("animated fadeInLeft delay-0-5s"),$(".hamburger").fadeIn(),$("#mobileLogo").fadeIn(),anime({targets:"#first-exp-modal",translateX:[0,"100%"],opacity:0,duration:300,easing:"easeInExpo"})):1==$("#second-exp-modal").css("opacity")?($("#second-exp").addClass("animated fadeInLeft delay-0-5s"),$(".hamburger").fadeIn(),$("#mobileLogo").fadeIn(),anime({targets:"#second-exp-modal",translateX:[0,"100%"],opacity:0,duration:300,easing:"easeInExpo"})):1==$("#third-exp-modal").css("opacity")?($("#third-exp").addClass("animated fadeInLeft delay-0-5s"),$(".hamburger").fadeIn(),$("#mobileLogo").fadeIn(),anime({targets:"#third-exp-modal",translateX:[0,"100%"],opacity:0,duration:300,easing:"easeInExpo"})):1==$("#fourth-exp-modal").css("opacity")&&($("#fourth-exp").addClass("animated fadeInLeft delay-0-5s"),$(".hamburger").fadeIn(),$("#mobileLogo").fadeIn(),anime({targets:"#fourth-exp-modal",translateX:[0,"100%"],opacity:0,duration:300,easing:"easeInExpo"}))})),h(),void y()))}]);