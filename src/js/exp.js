
export const mobileExpModalControl=()=>{
  //mobile exp readmore
  $('#cisco-modal').on('click',function(){
    $('.hamburger').fadeOut();
    $('#mobileLogo').fadeOut();
    $('#first-exp').removeClass('animated fadeInUp fadeInLeft delay-0-5s');
    anime({
      targets:'#first-exp-modal',
      translateX:['100%',0],
      opacity:1,
      duration:300,
      easing:'easeInExpo'
    })
  })

  $('#kent-modal').on('click',function(){
    $('.hamburger').fadeOut();
    $('#mobileLogo').fadeOut();
    $('#second-exp').removeClass('animated fadeInUp fadeInLeft delay-0-5s');
    anime({
      targets:'#second-exp-modal',
      translateX:['100%',0],
      opacity:1,
      duration:300,
      easing:'easeInExpo'
    })
  })

  $('#riot-modal').on('click',function(){
    $('.hamburger').fadeOut();
    $('#mobileLogo').fadeOut();
    $('#third-exp').removeClass('animated fadeInUp fadeInLeft delay-0-5s');
    anime({
      targets:'#third-exp-modal',
      translateX:['100%',0],
      opacity:1,
      duration:300,
      easing:'easeInExpo'
    })
  })

  $('#ggp-modal').on('click',function(){
    $('.hamburger').fadeOut();
    $('#mobileLogo').fadeOut();
    $('#fourth-exp').removeClass('animated fadeInUp fadeInLeft delay-0-5s');
    anime({
      targets:'#fourth-exp-modal',
      translateX:['100%',0],
      opacity:1,
      duration:300,
      easing:'easeInExpo'
    })
  })

  $('.exp-modal-closeBtn').on('click',function(){
    if($('#first-exp-modal').css('opacity')==1){
      $('#first-exp').addClass('animated fadeInLeft delay-0-5s');
      $('.hamburger').fadeIn();
      $('#mobileLogo').fadeIn();
      anime({
        targets:'#first-exp-modal',
        translateX:[0,'100%'],
        opacity:0,
        duration:300,
        easing:'easeInExpo'
      })
    }else if($('#second-exp-modal').css('opacity')==1){
      $('#second-exp').addClass('animated fadeInLeft delay-0-5s');
      $('.hamburger').fadeIn();
      $('#mobileLogo').fadeIn();
      anime({
        targets:'#second-exp-modal',
        translateX:[0,'100%'],
        opacity:0,
        duration:300,
        easing:'easeInExpo'
      })
    }else if($('#third-exp-modal').css('opacity')==1){
      $('#third-exp').addClass('animated fadeInLeft delay-0-5s');
      $('.hamburger').fadeIn();
      $('#mobileLogo').fadeIn();
      anime({
        targets:'#third-exp-modal',
        translateX:[0,'100%'],
        opacity:0,
        duration:300,
        easing:'easeInExpo'
      })
    }else if($('#fourth-exp-modal').css('opacity')==1){
      $('#fourth-exp').addClass('animated fadeInLeft delay-0-5s');
      $('.hamburger').fadeIn();
      $('#mobileLogo').fadeIn();
      anime({
        targets:'#fourth-exp-modal',
        translateX:[0,'100%'],
        opacity:0,
        duration:300,
        easing:'easeInExpo'
      })
    }
  })
}


export const desktopExpModalControl=()=>{
  $('.readmore').on('mouseenter',function(){
    if($(this).attr('id')=='ciscoStory'){
      $('#ciscoModalStory').siblings().css({display:'none'});
      $('#ciscoModalImg').siblings().css({display:'none'});
      $('#right-modal-clostBtn').css({display:'block'});
      $('#ciscoModalStory').css({display:'block'});
      $('#ciscoModalImg').css({display:'block'});
    }else if($(this).attr('id')=='kentStory'){
      $('#kentModalStory').siblings().css({display:'none'});
      $('#kentModalImg').siblings().css({display:'none'});
      $('#right-modal-clostBtn').css({display:'block'});
      $('#kentModalStory').css({display:'block'});
      $('#kentModalImg').css({display:'block'});
    }else if($(this).attr('id')=='riotStory'){
      $('#riotModalStory').siblings().css({display:'none'});
      $('#riotModalImg').siblings().css({display:'none'});
      $('#right-modal-clostBtn').css({display:'block'});
      $('#riotModalStory').css({display:'block'});
      $('#riotModalImg').css({display:'block'});
    }else if($(this).attr('id')=='ggpStory'){
      $('#ggpModalStory').siblings().css({display:'none'});
      $('#ggpModalImg').siblings().css({display:'none'});
      $('#right-modal-clostBtn').css({display:'block'});
      $('#ggpModalStory').css({display:'block'});
      $('#ggpModalImg').css({display:'block'});
    }
    anime({
      targets:'.readmore',
      translateY:5,
      duration:300,
      easing:'linear'
    })
  }).on('mouseleave',function(){
    anime({
      targets:'.readmore',
      translateY:0,
      duration:300,
      easing:'linear'
    })
  }).on('click',function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home-wrapper").offset().top
    }, 500);
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const rightModalElement = $('#desktop-right-modal');
    disableBodyScroll(rightModalElement);
    $('body').addClass('overflowHidden');
    $('.hamburger').fadeOut();
    $('.navContactIcons').fadeOut();
    anime({
      targets:'#desktop-right-modal',
      translateX:['100%',0],
      duration:300,
      easing:'linear'
    })
    anime({
      targets:'#desktop-left-modal',
      translateX:['-100%',0],
      duration:300,
      easing:'linear'
    })
    anime({
      targets:['#image-carousel','#slider-control'],
      opacity:[1,0],
      duration:200,
      easing:'linear',
      update:function(){
        $('#slider-control').removeClass('animated fadeInLeft');
        $('#image-carousel').css({'pointer-events':'none'});
        $('#slider-control').css({'pointer-events':'none'});
      }
    })
  })
  $('#right-modal-clostBtn').on('click',function(){
    // const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    // const rightModalElement = $('#desktop-right-modal');
    // enableBodyScroll(rightModalElement);
    bodyScrollLock.clearAllBodyScrollLocks();
    $('body').removeClass('overflowHidden');
    $('.hamburger').fadeIn();
    $('.navContactIcons').fadeIn();
    anime({
      targets:'#desktop-right-modal',
      translateX:[0,'100%'],
      duration:300,
      easing:'linear'
    })
    anime({
      targets:'#desktop-left-modal',
      translateX:[0,'-100%'],
      duration:300,
      easing:'linear'
    })
    anime({
      targets:['#image-carousel','#slider-control'],
      opacity:[0,1],
      duration:500,
      easing:'linear',
      update:function(){
        $('#image-carousel').css({'pointer-events':'auto'});
        $('#slider-control').css({'pointer-events':'auto'});
      }
    })
  })
}
