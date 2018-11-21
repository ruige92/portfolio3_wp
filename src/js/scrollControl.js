//Changing background to black, other items to white
const whiteBurger=()=>{
  anime({
    targets: ['#menuIcon line','#scroll-icon #scroll-item','#scroll-icon #scroll-line','#mainLogo', '#mobilemainLogo'],
    stroke: '#000',
    fill: '#000',
    delay: 300
  })
  anime({
    targets:['#home-wrapper','.intro-content','#skills-wrapper'],
    backgroundColor:'#fff',
    duration:50,
    easing:'linear'
  })
}
//Changing background to white, other items to black
const blackBurger=()=>{
  anime({
    targets:['#home-wrapper','.intro-content','#skills-wrapper'],
    backgroundColor:'#000',
    duration:50,
    easing:'linear'
  })
  anime({
    targets: ['#menuIcon line','#scroll-icon #scroll-item','#scroll-icon #scroll-line','#mainLogo', '#mobilemainLogo'],
    stroke: '#fff',
    fill: '#fff',
    delay: 300
  })
}

const landingContentIn=()=>{
  anime({
    targets:'#landing-wrapper',
    duration:500,
    opacity:0.8,
    scale:1,
    easing:'linear',
  })
}
const landingContentOut=()=>{
  anime({
    targets:'#landing-wrapper',
    duration:200,
    opacity:1,
    scale:1.1,
    easing:'linear',
  })
}

//Animation methods for slider
const sliderImageSectionShow=()=>{
  anime({
    targets:['#image-carousel'],
    // scale:'0.8',
    opacity:'1',
    duration:500,
    easing: 'easeInQuart',
    update:function(){
      $('#image-carousel img').addClass('animated slideInLeft');
      $('#slider-control').addClass('animated fadeInLeft');
      $('.image-description').addClass('animated fadeInRight');
    }
  })
}
const sliderImageSectionHide=()=>{
  $('#image-carousel img').removeClass('animated slideInLeft')
  $('#slider-control').removeClass('animated fadeInLeft');
  $('.image-description').removeClass('animated fadeInRight');
}

const contactTitleShow=()=>{
  anime({
    targets:['#contact-box','#m-contact-box'],
    width:'600px',
    easing:'linear',
    duration:600,
    opacity:1
  })
}

const contactTitleHide=()=>{
  anime({
    targets:['#contact-box','#contact-form','#m-contact-box'],
    width:['600px','0px'],
    easing:'linear',
    duration:600,
    opacity:[1,0],
  })
}

const skillTitlesAnimation=(tag)=>{
  $(tag).each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime({
      targets: tag+' .letter',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: function(el, i) {
        return 300 + 30 * i;
      }
  });
}
//Using scroll magic to determine when to trigger page transition,
//Intro to First Section
export const pageSlideControl=()=>{
  //this tween has a different ease in each direction
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: "#home-wrapper"})
          .on("enter", function () {
            //Change theme to white
            // sliderBackgroundTextIn();
            sliderImageSectionShow();
            // landingContentIn();
            whiteBurger();
          })
          .on("leave", function () {
            //Change theme to black
            // sliderBackgroundTextOut();
            // landingContentOut();
            blackBurger();
          })
          // .addIndicators({name: "1 - enter Exp Section"}) // add indicators (requires plugin)
          .addTo(controller);

  var scene2 = new ScrollMagic.Scene({triggerElement: "#skills-wrapper", duration: '100%'})
          .on("enter", function () {
            $('#skills-wrapper').addClass('animated fadeIn');
            $('#box1').addClass('animated fadeInLeft');
            $('#box2').addClass('animated fadeInUp');
            $('#box3').addClass('animated fadeInRight');
            skillTitlesAnimation('#techTitle');
            skillTitlesAnimation('#desTitle');
            skillTitlesAnimation('#proTitle');
          })
          .on("leave", function () {
          })
          // .addIndicators({name: "2 - enter Skill Section"}) // add indicators (requires plugin)
          .addTo(controller);

  var scene3 = new ScrollMagic.Scene({triggerElement: "#landing-about"})
        .on("enter", function () {
          $('#mobileLogo').removeClass('animated fadeInLeft');
          $('.hamburger svg').removeClass('animated fadeInRight');
          $('.navContactIcons a svg').removeClass('animated slideInLeft');

          //Change theme to white
          anime({
            targets:['.hamburger','.navContactIcons','#mobileLogo'],
            duration:200,
            translateY:-20,
            easing:'linear'
          })
        })
        .on("leave", function () {
          //Change theme to black
          anime({
            targets:['.hamburger','.navContactIcons','#mobileLogo'],
            duration:200,
            translateY:0,
            easing:'linear'
          })
        })
        // .addIndicators({name: "0 - Inital section"}) // add indicators (requires plugin)
        .addTo(controller);
  var scene4 = new ScrollMagic.Scene({triggerElement: "#contact-wrapper"})
        .on("enter", function () {
          //Change theme to white
          contactTitleShow();

          $('#contact-box').on('mouseenter',function(){
            let timeline = anime.timeline();
            timeline
            .add({
              targets:'#contact-box',
              translateY:-300,
              scale:0.5
            })
            .add({
              targets:'#contact-box p',
              update:function(){
                $('#contact-box p').text("Let's Talk!")
              }
            })
            $('#contact-form .group').addClass('animated fadeInUp');
          })

          $('#m-contact-box').on('mouseenter',function(){
            let timeline = anime.timeline();
            timeline
            .add({
              targets:'#m-contact-box',
              translateY:-600,
              scale:0.5
            })
            .add({
              targets:'#m-contact-box p',
              update:function(){
                $('#m-contact-box p').text("Let's Talk!")
              }
            })
            $('#contact-form .group').addClass('animated fadeInUp');
          })
        })
        .on("leave", function () {
          //Change theme to black
        })
        // .addIndicators({name: "4 - Contact section"}) // add indicators (requires plugin)
        .addTo(controller);
    //Mobile exp section
    var scene5 = new ScrollMagic.Scene({triggerElement: "#first-exp", duration: '100%'})
          .on("enter", function () {
            //Change theme to white
            if($('#first-exp').hasClass('fadeInLeft')){
              return;
            }else{
              $('#first-exp').addClass('animated fadeInLeft delay-0-5s');
            }

          })
          .on("leave", function () {
            //Change theme to black
          })
          // .addIndicators({name: "2 - Enter Cisco"}) // add indicators (requires plugin)
          .addTo(controller);
    var scene6 = new ScrollMagic.Scene({triggerElement: "#second-exp", duration: '100%'})
          .on("enter", function () {
            //Change theme to white
            if($('#second-exp').hasClass('fadeInLeft')){
              return;
            }else{
              $('#second-exp').addClass('animated fadeInLeft delay-0-5s');
            }
          })
          .on("leave", function () {
            //Change theme to black
          })
          // .addIndicators({name: "3 - Enter Kent"}) // add indicators (requires plugin)
          .addTo(controller);
    var scene7 = new ScrollMagic.Scene({triggerElement: "#third-exp", duration: '100%'})
          .on("enter", function () {
            //Change theme to white
            if($('#third-exp').hasClass('fadeInLeft')){
              return;
            }else{
              $('#third-exp').addClass('animated fadeInLeft delay-0-5s');
            }
          })
          .on("leave", function () {
            //Change theme to black
          })
          // .addIndicators({name: "4 - Enter Riot"}) // add indicators (requires plugin)
          .addTo(controller);
    var scene8 = new ScrollMagic.Scene({triggerElement: "#fourth-exp", duration: '100%'})
          .on("enter", function () {
            //Change theme to white
            if($('#fourth-exp').hasClass('fadeInLeft')){
              return;
            }else{
              $('#fourth-exp').addClass('animated fadeInLeft delay-0-5s');
            }
          })
          .on("leave", function () {
            //Change theme to black
          })
          // .addIndicators({name: "5 - Enter GGP"}) // add indicators (requires plugin)
          .addTo(controller);
}
