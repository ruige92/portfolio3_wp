//Intro animation after ENTER is clicked.
export const introAnime=()=>{
  anime({
    targets:['#menuIcon line','#mobilemainLogo','#cvIcon #cv-line'],
    fill: '#fff',
    opacity:1,
    stroke: '#fff',
    delay:500,
    easing:'linear'
  })
  anime({
    targets:'.navContactIcons svg',
    fill:'#fff',
    delay:2400
  })
}

export const landingPageAnimation=()=>{
  //Adding animations to the intro content
  $('.landing-left .isAnimated').addClass('fadeIn');
  $('.landing-left').css({opacity:1});
  $('.landing-left .isAnimated').eq(0).css('animation-delay','2s');
  $('.landing-left .isAnimated').eq(1).css('animation-delay','2.2s');
  $('.landing-left .isAnimated').eq(2).css('animation-delay','2.4s');
  $('.landing-left .isAnimated').eq(3).css('animation-delay','2.6s');
  $('.landing-down').addClass('fadeInUp');
  $('.landing-down').css('animation-delay','2s');

  $('.hamburger svg').addClass('animated fadeInRight');
  $('.hamburger svg').css('animation-delay','2s');
  $('.cv svg').addClass('animated fadeInRight');
  $('.cv svg').css('animation-delay','2s');
  $('.navContactIcons a svg').addClass('animated slideInLeft');
  $('.navContactIcons a svg').css('animation-delay','2s');
  $('#mobileLogo').addClass('animated fadeInLeft');
  $('#mobileLogo').css('animation-delay','2s');
}
