$('#backBtn').on('mouseenter',function(){
  $('#backBtn').removeClass('animated fadeInUp delay-1-3s');
  anime({
    targets:'#backBtn',
    translateY:-5,
    scale:1.1,
    duration:200,
    ease:'linear'
  })
}).on('mouseleave',function(){
  anime({
    targets:'#backBtn',
    translateY:0,
    scale:1,
    duration:50,
    ease:'linear'
  })
})

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

const navInit=()=>{
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
let previousIconColor = $('#m-line1').css('stroke');
const navMenuControl=()=>{
  $('.navContactIcons').on('mouseenter',function(){
    logoFocus();
  }).on('mouseleave',function(){
    logoReturn();
  })
  //Method to grab the menuicon color before opening the nav menu
  //Important for when the background color changes,
  //to set the icon back to the opposite color
  $('.hamburger').on('mouseenter',function(){
    if(!$('.hamburger').hasClass('closeBurger')){
      previousIconColor = $('#m-line1').css('stroke');
    }else{
      return;
    }
  })

  $('.hamburger').on('click',function(){
    //animations for each of the nav items
    $('nav a').addClass('animated slideInUp');
    $('.contactIcons a').addClass('animated slideInUp delay-05s');
   //ALWAYS set menu icon to BLACK
   setIconColor('#000');
   //disable scrolling on menu page
   $('body').addClass('overflowHidden');
   //IF menu ISOPEN(closeBurger class), then do the following
   if($('.hamburger').hasClass('closeBurger')){
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


const main=()=>{
  anime({
      targets:['.hamburger','#menuIcon line','#mainLogo'],
      fill: '#000',
      opacity:1,
      stroke: '#000'
    })
    
  navInit();
  navMenuControl();

}

$(document).ready(main());
