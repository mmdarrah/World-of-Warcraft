
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () =>{
      nav.classList.toggle('nav-active');
      // alert("test")
      navLinks.forEach((link, index) => {
          // console.log(index);
          if(link.style.animation){
              link.style.animation = '';
          }else{
              link.style.animation = `navLinkFade 1s ease forwards  ${index / 7 + 0.5 }s`
            }
            
          });
          burger.classList.toggle('x');
  });
}

navSlide();





  function checkForVisibility() {
    var cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
      if (isElementInViewport(card)) {

        card.classList.add("card-visible");
        
       

      } else {

        card.classList.remove("card-visible");

       
        
      }
    });
  }
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('scroll', checkForVisibility, false);
  }






// fire path

const firePath = {
    curviness: 1.25,
    autoRotate:true,
    values: [
        {x:-150, y: 150},{x:-200, y:90},{x:-250, y:110},{x:-350, y:110},{x:-450, y:90},{x:-550, y:70},{x:-700, y:20}
        ,{x:-850, y:70}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".fire", 1 ,{
        bezier: firePath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 1000,
    triggerHook:0
})

// .setTween(tween)
// .addIndicators()
// .setPin('.animation')
// .addTo(controller)



let numbers = (id) => {
  // console.log(id)

  let stats = document.getElementsByClassName(`${id}`);
  // console.log(stats)

  let poweValue =(stats[1].getAttribute("statValue")) 
  let speedValue =(stats[2].getAttribute("statValue")) 
  let costValue =(stats[3].getAttribute("statValue")) 

  
  let power = document.getElementsByClassName(`power ${id}`);
  let speed = document.getElementsByClassName(`speed ${id}`);
  let cost = document.getElementsByClassName(`cost ${id}`);
  let img = document.getElementsByClassName(`card__image card__image ${id}`);
  
  anime({
    targets: power,
    innerHTML: [0, poweValue],
    easing: 'linear',
    round: 10,
    duration: 1000,
    scale: 1.5
  });
  anime({
    targets: speed,
    innerHTML: [0, speedValue],
    easing: 'linear',
    round: 10,
    duration: 1000,
    scale: 1.5 
  });
  anime({
    targets: cost,
    innerHTML: [0, costValue],
    easing: 'linear',
    round: 10,
    duration: 1000,
    scale: 1.5
  });
  anime({
    targets: img,
    scale:1.1
  });
  
  

}








