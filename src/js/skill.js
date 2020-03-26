export const skillSectionControl=()=>{

  $('#techTitle').on('click',function(){
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const techScrollElement = $('#techTitle');
    disableBodyScroll(techScrollElement);
    $('#box1').removeClass('fadeInLeft');
    $('#box2').removeClass('fadeInUp');
    $('#box3').removeClass('fadeInRight');
    //disable scrolling on intro page
    $('body').addClass('overflowHidden');
    $('.skill-titles').removeClass('techTitle desTitle proTitle');
    $('.skill-titles').addClass('techTitle');
    $('#techTitle').fadeOut(50);
    $('#desTitle').fadeOut(50);
    $('#proTitle').fadeOut(50);
    //
    // $('.skill-titles').fadeOut();
    anime({
      targets:['.skill-titles','#box2','#box3'],
      opacity:0,
      duration:50,
      easing:'linear'
    })
    $('.hamburger').fadeOut();
    $('.cv').fadeOut();
    $('.navContactIcons').fadeOut();
    $('#mobileLogo').fadeOut();
    $('#box1').css({'background-color':'rgba(255, 255, 255, 0)'});
    // // $('#box2').fadeOut();
    // // $('#box3').fadeOut();
    $('#box1 svg').css({
      'position':'absolute',
      'left':'0',
      'top':'0',
      'z-index':'6'
    })
    anime({
      targets:['#deshHead','#proHead'],
      opacity:0,
      duration:200
    })
    $('#techHead').addClass('animated fadeInUp delay-05s');
    $('.skill-head').css({
      'position':'absolute',
      'left':'0',
      'top':'0',
      'z-index':'6'
    })
    var techTimeline = anime.timeline();
    techTimeline
      .add({
        targets:'#circle',
        r:[20,250],
        duration:500,
        // translateX:-220,
        easing:'easeInOutSine',
      })
      // .add({
      //   targets:'#circle',
      //   translateX:[0,-220],
      //   easing:'easeOutExpo',
      // })

    var mtechTimeline = anime.timeline();
    mtechTimeline
      .add({
        targets:'#m-circle',
        r:[20,250],
        duration:500,
        // translateX:-220,
        easing:'easeInOutSine',
      })
      // .add({
      //   targets:'#m-circle',
      //   translateY:[0,50],
      //   translateX:[0,-245],
      //   easing:'easeOutExpo',
      // })

      //
      $('.skill-head').css({
        opacity:1,
        'z-index':4
      });
      $('.skill-list').css({
        opacity:1,
        'z-index':4
      });
      anime({
        targets:['#techList','.skill-back-btn','#techHead'],
        duration:200,
        delay:1000,
        opacity:1,
        easing:'linear',
        update:function(){
          $('#techList ul li').each(function(){
            $(this).addClass('animated fadeInUp');
            for (let i =0; i<$('#techList ul li').length; i++){
              $('#techList ul li').eq(i).css({'animation-delay':'1.'+i+'5s'})
            }
          })
        }
      })
      // $('#techList').fadeIn();
      // $('#techList').css({
      //   opacity:1,
      //   'z-index':4
      // });
      $('#desList').css({'z-index':3})
      $('#proList').css({'z-index':3})

  })

  $('#desTitle').on('click',function(){
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const desScrollElement = $('#desTitle');
    disableBodyScroll(desScrollElement);
    $('#box1').removeClass('fadeInLeft');
    $('#box2').removeClass('fadeInUp');
    $('#box3').removeClass('fadeInRight');
    //disable scrolling on intro page
    $('body').addClass('overflowHidden');
    $('.skill-titles').removeClass('techTitle desTitle proTitle');
    $('.skill-titles').addClass('desTitle');
    $('#techTitle').fadeOut(50);
    $('#desTitle').fadeOut(50);
    $('#proTitle').fadeOut(50);
    //
    // $('.skill-titles').fadeOut();
    anime({
      targets:['.skill-titles','#box1','#box3'],
      opacity:0,
      duration:50,
      easing:'linear'
    })
    $('.hamburger').fadeOut();
    $('.cv').fadeOut();
    $('.navContactIcons').fadeOut();
    $('#mobileLogo').fadeOut();
    $('#box2').css({'background-color':'rgba(255, 255, 255, 0)'});
    // $('#box2').fadeOut();
    // $('#box3').fadeOut();
    $('#box2 svg').css({
      'position':'absolute',
      'left':'0',
      'top':'0',
      'z-index':'6'
    })
    anime({
      targets:['#proHead','#techHead'],
      opacity:0,
      duration:200
    })
    $('#desHead').addClass('animated fadeInUp delay-05s');
    $('.skill-head').css({
      'position':'absolute',
      'left':'0',
      'top':'0',
      'z-index':'6'
    })
    var desTimeline = anime.timeline();
    desTimeline
      .add({
        targets:'#circle2',
        r:[20,250],
        duration:500,
        // translateX:-220,
        easing:'easeInOutSine',
      })
      // .add({
      //   targets:'#circle2',
      //   translateX:[0,-250],
      //   easing:'easeOutExpo',
      // })

    var mdesTimeline = anime.timeline();
    mdesTimeline
      .add({
        targets:'#m-circle2',
        r:[20,250],
        duration:500,
        // translateX:-220,
        easing:'easeInOutSine',
      })
      // .add({
      //   targets:'#m-circle2',
      //   translateY:[0,50],
      //   translateX:[0,-245],
      //   easing:'easeOutExpo',
      // })
      $('.skill-head').css({
        opacity:1,
        'z-index':4
      });
      $('.skill-list').css({
        opacity:1,
        'z-index':4
      });
      //
      anime({
        targets:['#desList','.skill-back-btn'],
        duration:200,
        delay:1000,
        opacity:1,
        easing:'linear',
        update:function(){
          $('#desList ul li').each(function(){
            $(this).addClass('animated fadeInUp');
            for (let i =0; i<$('#desList ul li').length; i++){
              $('#desList ul li').eq(i).css({'animation-delay':'1.'+i+'5s'})
            }
          })
        }
      })
      // $('#techList').fadeIn();
      // $('#techList').css({
      //   opacity:1,
      //   'z-index':4
      // });
      $('#techList').css({'z-index':3})
      $('#proList').css({'z-index':3})

  })

  $('#proTitle').on('click',function(){
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const proScrollElement = $('#proTitle');
    disableBodyScroll(proScrollElement);
    $('#box1').removeClass('fadeInLeft');
    $('#box2').removeClass('fadeInUp');
    $('#box3').removeClass('fadeInRight');
    //disable scrolling on intro page
    $('body').addClass('overflowHidden');
    $('.skill-titles').removeClass('techTitle desTitle proTitle');
    $('.skill-titles').addClass('proTitle');
    $('#techTitle').fadeOut(50);
    $('#desTitle').fadeOut(50);
    $('#proTitle').fadeOut(50);
    //
    // $('.skill-titles').fadeOut();
    anime({
      targets:['.skill-titles','#box1','#box2'],
      opacity:0,
      duration:50,
      easing:'linear'
    })
    $('.hamburger').fadeOut();
    $('.cv').fadeOut();
    $('.navContactIcons').fadeOut();
    $('#mobileLogo').fadeOut();
    $('#box3').css({'background-color':'rgba(255, 255, 255, 0)'});
    // $('#box2').fadeOut();
    // $('#box3').fadeOut();
    $('#box3 svg').css({
      'position':'absolute',
      'left':'0',
      'top':'0',
      'z-index':'6'
    })
    anime({
      targets:['#deshHead','#techHead'],
      opacity:0,
      duration:200
    })
    $('#proHead').addClass('animated fadeInUp delay-05s');
    $('.skill-head').css({
      'position':'absolute',
      'left':'0',
      'top':'0',
      'z-index':'6'
    })
    var proTimeline = anime.timeline();
    proTimeline
      .add({
        targets:'#circle3',
        r:[20,250],
        duration:500,
        // translateX:-220,
        easing:'easeInOutSine',
      })
      // .add({
      //   targets:'#circle3',
      //   translateX:[0,-280],
      //   easing:'easeOutExpo',
      // })

    var mproTimeline = anime.timeline();
    mproTimeline
      .add({
        targets:'#m-circle3',
        r:[20,250],
        duration:500,
        // translateX:-220,
        easing:'easeInOutSine',
      })
      // .add({
      //   targets:'#m-circle3',
      //   translateY:[0,50],
      //   translateX:[0,-245],
      //   easing:'easeOutExpo',
      // })
      //
      $('.skill-head').css({
        opacity:1,
        'z-index':4
      });
      $('.skill-list').css({
        opacity:1,
        'z-index':4
      });
      anime({
        targets:['#proList','.skill-back-btn'],
        duration:200,
        delay:1000,
        opacity:1,
        easing:'linear',
        update:function(){
          $('#proList ul li').each(function(){
            $(this).addClass('animated fadeInUp');
            for (let i =0; i<$('#proList ul li').length; i++){
              $('#proList ul li').eq(i).css({'animation-delay':'1.'+i+'5s'})
            }
          })
        }
      })
      // $('#techList').fadeIn();
      // $('#techList').css({
      //   opacity:1,
      //   'z-index':4
      // });
      $('#techList').css({'z-index':3})
      $('#proList').css({'z-index':3})

  })

  $('.skill-back-btn').on('click',function(){
    $('.skill-head').css({
      opacity:0,
      'z-index':3
    });
    $('.skill-list').css({
      opacity:0,
      'z-index':3
    });
    if( $('.skill-titles').hasClass('techTitle') ){
      bodyScrollLock.clearAllBodyScrollLocks();
      // console.log('tech working');
      //enable scrolling on intro page
      $('body').removeClass('overflowHidden');
      $('.skill-titles').removeClass('techTitle desTitle proTitle');
      $('#techHead').removeClass('animated fadeInUp delay-05s');
      $('#techTitle').fadeIn();
      $('#desTitle').fadeIn();
      $('#proTitle').fadeIn();
      // $('#techList').css({opacity:'0'});
      anime({
        targets:'#circle',
        r:[250,20],
        duration:100,
        easing:'easeOutExpo'
      })
      anime({
        targets:'#m-circle',
        r:[250,0],
        duration:100,
        easing:'easeOutExpo'
      })
      anime({
        targets:['#techList','.skill-back-btn'],
        duration:200,
        opacity:0
      })
      $('#box1 svg').css({
        'position':'static',
        'z-index':'3'
      })
      $('.skill-head').css({
        'z-index':'3'
      })
      // $('.skill-titles').fadeIn();
      anime({
        targets:'.skill-titles',
        opacity:1,
        duration:200
      })
      $('.hamburger').fadeIn();
      $('.cv').fadeIn();
      $('.navContactIcons').fadeIn();
      $('#mobileLogo').fadeIn();
      $('#box1').css({'background-color':'rgb(87, 220, 154)'});
      $('#box1').css({opacity:'1'});
      $('#box2').css({opacity:'1'});
      $('#box3').css({opacity:'1'});
      $('#box2').fadeIn();
      $('#box3').fadeIn();
      // $('#desList').fadeOut();
      // $('#proList').fadeOut();
    }else if ( $('.skill-titles').hasClass('desTitle') ){
      bodyScrollLock.clearAllBodyScrollLocks();
      // console.log('des working');
      //enable scrolling on intro page
      $('body').removeClass('overflowHidden');
      $('.skill-titles').removeClass('techTitle desTitle proTitle');
      $('#desHead').removeClass('animated fadeInUp delay-05s');
      $('#techTitle').fadeIn();
      $('#desTitle').fadeIn();
      $('#proTitle').fadeIn();
      // $('#desList').css({opacity:'0'});
      anime({
        targets:'#circle2',
        r:[250,20],
        duration:100,
        translateX:0,
        easing:'easeOutExpo',
      })
      anime({
        targets:'#m-circle2',
        r:[250,0],
        duration:100,
        translateX:0,
        easing:'easeOutExpo',
      })
      anime({
        targets:['#desList','.skill-back-btn'],
        duration:200,
        opacity:0
      })
      $('#box2 svg').css({
        'position':'static',
        'z-index':'3'
      })
      $('.skill-head').css({
        'z-index':'3'
      })
        // $('.skill-titles').fadeIn();
        anime({
          targets:'.skill-titles',
          opacity:1,
          duration:200
        })
        $('.hamburger').fadeIn();
        $('.cv').fadeIn();
        $('.navContactIcons').fadeIn();
        $('#mobileLogo').fadeIn();
        $('#box2').css({'background-color':'rgb(129, 205, 229)'});
        $('#box1').css({opacity:'1'});
        $('#box2').css({opacity:'1'});
        $('#box3').css({opacity:'1'});
        $('#box1').fadeIn();
        $('#box3').fadeIn();
    }else if ( $('.skill-titles').hasClass('proTitle') ){
      bodyScrollLock.clearAllBodyScrollLocks();
      // console.log('pro working');
      //enable scrolling on intro page
      $('body').removeClass('overflowHidden');
      $('.skill-titles').removeClass('techTitle desTitle proTitle');
      $('#proHead').removeClass('animated fadeInUp delay-05s');
      $('#techTitle').fadeIn();
      $('#desTitle').fadeIn();
      $('#proTitle').fadeIn();
      // $('#proList').css({opacity:'0'});
      anime({
        targets:['#circle3','#m-circle3'],
        r:[250,20],
        duration:100,
        translateX:0,
        easing:'easeOutExpo',
      })
      anime({
        targets:'#m-circle3',
        r:[250,0],
        duration:100,
        translateX:0,
        easing:'easeOutExpo',
      })
      anime({
        targets:['#proList','.skill-back-btn'],
        duration:200,
        opacity:0
      })
      $('#box3 svg').css({
        'position':'static',
        'z-index':'3'
      })
      $('.skill-head').css({
        'z-index':'3'
      })
      // $('.skill-titles').fadeIn();
      anime({
        targets:'.skill-titles',
        opacity:1,
        duration:200
      })
      $('.hamburger').fadeIn();
      $('.cv').fadeIn();
      $('.navContactIcons').fadeIn();
      $('#mobileLogo').fadeIn();
      $('#box3').css({'background-color':'rgb(220, 87, 87)'});
      $('#box1').css({opacity:'1'});
      $('#box2').css({opacity:'1'});
      $('#box3').css({opacity:'1'});
      $('#box1').fadeIn();
      $('#box2').fadeIn();
      // $('#techList').fadeOut();
      // $('#desList').fadeOut();
    }
  })
}
