import { introAnime, landingPageAnimation } from './intro';
import { scrollDownIcon, callShuffle } from './about';
import { mobileExpModalControl, desktopExpModalControl } from './exp';
import { drag, slider, dragSlider, contentSlider } from './expSlider';
import { skillSectionControl } from './skill';
import { previousIconColor, navMenuControl, navInit } from './nav';
import { pageSlideControl } from './scrollControl';

//Main method
const main =()=>{
  //scroll control
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 200);
    }
  });

  //disable scrolling on intro page
  // $('body').addClass('overflowHidden');
  //When Menu Icon is clicked

 // $('.startBtn').on('click',function(){
   //remove scroll disable when intro button is clicked
   // $('body').removeClass('overflowHidden');
   // $('.intro-body').fadeOut();
   // $('body').removeClass('disableScroll');
   navInit();
   navMenuControl();
   introAnime();
   landingPageAnimation();
   callShuffle();
   pageSlideControl();
   scrollDownIcon();
   contentSlider();
   desktopExpModalControl();
   mobileExpModalControl();
   skillSectionControl();
   dragSlider();

}

//force page scroll to top upon PAGE REFRESH
window.onbeforeunload = function(){
  window.scrollTo(0,0);
};
$(document).ready(main());
