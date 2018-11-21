//global dragdealers
export let drag = new Dragdealer;
export let slider = new Dragdealer;

const sliderHeaderText=(tag)=>{
  // Wrap every letter in a span
  $(tag).each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime({
    targets: tag + ' .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 300 + 30 * i;
    }
  });
}


const sliderImageOut=()=>{
  anime({
    targets:'#image-carousel img',
    scale:'0.8',
    opacity:'0.8',
    duration:200,
    easing: 'easeInQuart',
  })
}
const sliderImageIn=()=>{
  anime({
    targets:'#image-carousel img',
    scale:'1',
    opacity:'1',
    duration:300,
    easing: 'easeInQuart'
  })
}
const sliderBarOut=()=>{
  anime({
    targets:'.dragdealer .red-bar',
    width:'65px',
    backgroundColor:'#000',
    duration:200,
    easing: 'linear'
  })
}
const sliderBarIn=()=>{
  anime({
    targets:'.dragdealer .red-bar',
    width:'50px',
    backgroundColor:'#888',
    duration:200,
    easing: 'linear'
  })
}
const sliderDescOut=()=>{
  anime({
    targets:'.image-description',
    opacity:0,
    easing: 'linear',
    duration:300,
    scale:0.9,
  })
}
const sliderDescIn=()=>{
  anime({
    targets:'.image-description',
    opacity:1,
    scale:1,
    duration:300,
    easing: 'linear'
  })
}
const sliderBackgroundTextOut=()=>{
  anime({
    targets:'#background-text',
    opacity:0,
    duration:300,
    easing: 'linear'
  })
}
const sliderBackgroundTextIn=()=>{
  anime({
    targets:'#background-text',
    opacity:1,
    duration:300,
    easing: 'linear'
  })
}

//Method for checking, adding effects when drag using slider.
export const dragSlider=()=>{
  //initialise a slider for images
  drag = new Dragdealer('slider-control', {
    steps: 4,
    speed: 0.5,
    loose: true,
    animationCallback: function(x, y) {
      let dragStep = 1;
      dragStep = Object.values(this.getStep())[0];
      $('#slider-control .value').text(dragStep+" / 4");
      slider.setStep(dragStep);
    }
  });
  let isDragging = false;
  $("#slider-control .red-bar")
  .mousedown(function() {
      //clear out animated class to allow slide animation
      $('#image-carousel img').removeClass('animated slideInLeft')
      $('.image-description').removeClass('animated fadeInRight');
      $('#background-text').removeClass('animated fadeInUp');
      isDragging = false;
      // $('#image-carousel img').addClass('dragging');
      sliderImageOut();
      //modifying the scroll bar if clicked
      sliderBarOut();
      //modifying the img desc if clicked
      sliderDescOut();
      //modifying the background txt if clicked
      sliderBackgroundTextOut();
  })
  .mousemove(function() {
      isDragging = true;
  })
  $(document).mouseup(function() {
      let wasDragging = isDragging;
      isDragging = false;
      if (!wasDragging) {
        sliderImageIn();
        //modifying the scroll bar if clicked but no drag
        sliderBarIn();
        //modifying the img desc if clicked but no drag
        sliderDescIn();
        //modifying the background txt if clicked but no drag
        sliderBackgroundTextIn();
      }
      if(wasDragging){
        //
        sliderImageIn();
        //modifying the scroll bar after dragged
        sliderBarIn();
        //modifying the img desc after dragged
        sliderDescIn();
        //modifying the background text after dragged
        sliderBackgroundTextIn();
        let step = Object.values(slider.getStep())[0];
        let value = Object.values(slider.getValue())[0];
        //
        //Update the slider indicator when using Image slide DIRECTLY
        if(step==1){
          drag.setValue(value);
          sliderHeaderText('.header1');
          // $('#background-text').text('CISCO');
        }else if(step==2){
          drag.setValue(value);
          sliderHeaderText('.header2');
          // $('#background-text').text('KENT');
        }else if(step==3){
          drag.setValue(value);
          sliderHeaderText('.header3');
          // $('#background-text').text('RIOT');
        }else if(step==4){
          drag.setValue(value);
          sliderHeaderText('.header4');
          // $('#background-text').text('GGP');
        }
      }
    })
}
//Method for checking, adding effects when drag images DIRECTLY.
export const contentSlider=()=>{
  //initialise a image drag
  slider = new Dragdealer('image-carousel', {
    steps: 4,
    speed: 0.5,
    loose: true,
    requestAnimationFrame: true,
  });
  //CHECKING IMAGE DRAG
  let isDragging = false;
  $(".slide img")
  .mousedown(function() {
      //clear out animated class to allow slide animation
      $('#image-carousel img').removeClass('animated slideInLeft')
      $('.image-description').removeClass('animated fadeInRight');
      $('#background-text').removeClass('animated fadeInUp');
      isDragging = false;
      // $('#image-carousel img').addClass('dragging');
      sliderImageOut();
      //modifying the scroll bar if clicked
      sliderBarOut();
      //modifying the img desc if clicked
      sliderDescOut();
      //modifying the background txt if clicked
      sliderBackgroundTextOut();
  })
  .mousemove(function() {
      isDragging = true;
  })
  $(document).mouseup(function() {
      let wasDragging = isDragging;
      isDragging = false;
      if (!wasDragging) {
        //modifying the scroll bar if clicked but no drag
        sliderImageIn();
        //modifying the scroll bar if clicked but no drag
        sliderBarIn();
        //modifying the img desc if clicked but no drag
        sliderDescIn();
        //modifying the background txt if clicked but no drag
        sliderBackgroundTextIn();
      }
      if(wasDragging){
        //
        sliderImageIn();
        //modifying the scroll bar if clicked but no drag
        sliderBarIn();
        //modifying the img desc if clicked but no drag
        sliderDescIn();
        //modifying the background txt if clicked but no drag
        sliderBackgroundTextIn();
        // console.log('dragged')
        let step = Object.values(slider.getStep())[0];
        let value = Object.values(slider.getValue())[0];
        //Update the slider indicator when using Image slide DIRECTLY
        if(step==1){
          drag.setValue(value);
          sliderHeaderText('.header1');
          // $('#background-text').text('CISCO');
        }else if(step==2){
          drag.setValue(value);
          sliderHeaderText('.header2');
          // $('#background-text').text('KENT');
        }else if(step==3){
          drag.setValue(value);
          sliderHeaderText('.header3');
          // $('#background-text').text('RIOT');
        }else if(step==4){
          drag.setValue(value);
          sliderHeaderText('.header4');
          // $('#background-text').text('GGP');
        }
      }
  });
}
