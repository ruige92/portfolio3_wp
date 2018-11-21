
//Animating the menu burger icon to Close icon
//if true, change icon to close, else back to menu icon
const menuToClose=(close)=>{
  if(close==true){
    anime({
      targets:'#m-line1',
      x1:6.9,
      x2:35.2,
      y1:6.3,
      y2:34.6
    })
    anime({
      targets:'#m-line2',
      x1:6.9,
      x2:35.2,
      y1:34.6,
      y2:6.3
    })
  }else{
    anime({
      targets:'#m-line1',
      x1:null,
      x2:40,
      y1:10.4,
      y2:10.4
    })
    anime({
      targets:'#m-line2',
      x1:null,
      x2:40,
      y1:30.4,
      y2:30.4
    })
  }
}
//change menu icon's color value
const setIconColor=(color)=>{
  anime({
    targets:['#m-line1','#m-line2'],
    stroke:color,
    duration:50,
    easing:'linear'
  })
}

const logoFocus=()=>{
  // Wrap every letter in a span
  anime({
    targets:"#mainLogo",
    letterSpacing:['-9px','-5px'],
    duration:200,
    easing:'linear'
  })
}
const logoReturn=()=>{
  // Wrap every letter in a span
  anime({
    targets:"#mainLogo",
    letterSpacing:['-5px','-9px'],
    duration:200,
    easing:'linear'
  })
}

export const navInit=()=>{
  //Initialise Icon colors for normal and nav icons
  $('.contactIcons').children().each(function(){
    $(this).on('mouseover',function(){
      $(this).children().attr('fill','#000');
    }).on('mouseleave',function(){
      $(this).children().attr('fill','#ccc');
    })
  })

  $('nav a').each(function(){
    $(this).on('mouseover',function(){
      $(this).css('color','#000');
    }).on('mouseleave',function(){
      $(this).css('color','#ccc');
    })
    $(this).on('click',function(){
      //remove animations for each of the nav items
      $('nav a').removeClass('animated slideInUp');
      $('.contactIcons a').removeClass('animated slideInUp delay-05s');
      //set icon color to previous state
      setIconColor(previousIconColor);
      $('body').removeClass('overflowHidden');
      bodyScrollLock.clearAllBodyScrollLocks();
      //change icon back to burger icon
      menuToClose(false);
      $('.hamburger').removeClass('closeBurger');
      // $('nav').removeClass('slideLeft');
      anime({
        targets:'.sidebar nav',
        // width:'0%',
        opacity:0,
        duration:100,
        easing:'linear',
        update:function(){
          $('.sidebar nav').css({'z-index':-1});
        }
      })
    })
  })
}

//Global previous color variable for the nav hamburger icon
export let previousIconColor = $('#m-line1').css('stroke');
export const navMenuControl=()=>{
  //Method to grab the menuicon color before opening the nav menu
  //Important for when the background color changes,
  //to set the icon back to the opposite color
  // 1. Import the functions
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;
  const targetElement = $('.sidebar nav');

  $('.navContactIcons').on('mouseenter',function(){
    logoFocus();
  }).on('mouseleave',function(){
    logoReturn();
  })

  $('.hamburger').on('mouseenter',function(){
    if(!$('.hamburger').hasClass('closeBurger')){
      previousIconColor = $('#m-line1').css('stroke');
    }else{
      return;
    }
  })

  $('.hamburger').on('click',function(){

    //mobile disable scroll
    disableBodyScroll(targetElement);
    //animations for each of the nav items
    $('nav a').addClass('animated slideInUp');
    $('.contactIcons a').addClass('animated slideInUp delay-05s');
   //ALWAYS set menu icon to BLACK
   setIconColor('#000');
   //disable scrolling on menu page
   $('body').addClass('overflowHidden');
   //IF menu ISOPEN(closeBurger class), then do the following
   if($('.hamburger').hasClass('closeBurger')){
     // mobile enable scroll...
     enableBodyScroll(targetElement);
     //remove animations for each of the nav items
     $('nav a').removeClass('animated slideInUp');
     $('.contactIcons a').removeClass('animated slideInUp delay-05s');
     //ALWAYS set menu icon to beforestate
     setIconColor(previousIconColor);
     $('body').removeClass('overflowHidden');
     //change icon back to burger icon
     menuToClose(false);
     $('.hamburger').removeClass('closeBurger');
     // $('nav').removeClass('slideLeft');
     anime({
       targets:'.sidebar nav',
       // width:'0%',
       opacity:0,
       duration:100,
       easing:'linear',
       update:function(){
         $('.sidebar nav').css({'z-index':-1});
       }
     })
     return;
   }
   // $('nav').addClass('slideLeft');
   anime({
     targets:'.sidebar nav',
     // width:'100%',
     opacity:1,
     duration:150,
     easing:'linear',
     update:function(){
       $('.sidebar nav').css({'z-index':8});
     }
   })
   $(this).addClass('closeBurger');
   //change menu icon to close icon
   menuToClose(true);
 })
}
