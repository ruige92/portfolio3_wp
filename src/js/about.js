//Animated SVG scroll down icon.
export const scrollDownIcon=()=>{
  anime({
    targets:'#scroll-icon #scroll-item',
    delay:1500,
    translateY:20,
    opacity:1,
    easing:'easeInOutSine',
    loop:true
  })
  anime({
    targets:'#scroll-icon #scroll-line',
    opacity:1,
    loop:false
  })
}

//Random color generator
const randomColor=()=>{
  let colors = ['#4286f4','#f44141','#f4cd41','#41f48b','#ae5be5',''];
  let color = colors[Math.floor(Math.random()*colors.length)];
  return color;
}
//Random word generator
const randomWord=()=>{
  let words = ['EAGER', 'PROACTIVE', 'CREATIVE', 'HUNGRY', 'HAPPY', 'CURIOUS', 'HUMBLE'];
  let word = words[Math.floor(Math.random()*words.length)];
  return word;
}
//shuffle generator, initialise
const shuffleText=()=>{
  const elements = document.querySelectorAll('.landing-left [data-chaffle]');
  Array.prototype.forEach.call(elements, function (el) {
    const chaffle = new Chaffle(el, {
      speed:"20",
      delay:"200"
    });
    chaffle.init();
  });
};
//Method that sets random word with random color to selected DOM.
export const callShuffle=()=>{
  let newInt = setInterval(function(){
    let newWord = randomWord();
    $('.landing-left [data-chaffle]').text(randomWord());
    $('.landing-left [data-chaffle]').css('color',randomColor());
    shuffleText();
  },5000);
}
