
let navBar = document.querySelector('.wrapper');
let navBtn = document.querySelectorAll('.nav-btn');

function navbarMove() {
  let y = window.scrollY;
  if (y >= 90) {
    navBtn.forEach(navButtons => {
      navButtons.classList.add('nav-btn');
    });
    navBar.classList.add('nav-up');
  } else {
    navBtn.forEach(navButtons => {
      navButtons.classList.remove('nav-btn');
    });
    navBar.classList.remove('nav-up');
  }
}




function checkForVisibility() {
  var contents = document.querySelectorAll(".content");
  contents.forEach(function(content) {
    if (isElementInViewport(content)) {
      content.classList.add("headerVisible");
    } else {
      content.classList.remove("headerVisible");
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
  addEventListener('DOMContentLoaded', checkForVisibility, false); 
  addEventListener('load', checkForVisibility, false);
  addEventListener('scroll', checkForVisibility, false);
  addEventListener('scroll', navbarMove, false);

    addEventListener("load", function(){
      setInterval(() => {
        animatePics();
        
      }, 5100);

  });

  
}


let class1 = document.querySelectorAll('.hunter');
let class2 = document.querySelectorAll('.rogue');
let class3 = document.querySelectorAll('.mage');
let class4 = document.querySelectorAll('.paladin');
let class5 = document.querySelectorAll('.priest');
let class6 = document.querySelectorAll('.monk');
let class7 = document.querySelectorAll('.warrior');
let class8 = document.querySelectorAll('.warlock');
let class9 = document.querySelectorAll('.shaman');
let class10 = document.querySelectorAll('.deathknight');
let class11 = document.querySelectorAll('.druid');

let classes = [class1,class2,class3,class4,class5,class6,class7,class8,class9,class10,class11];
function makeNewPosition(){

  let w = window.innerWidth / 2- 200 ;
  let h = window.innerHeight -50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  var z = 5;
  return[nh, nw, z];
  
}
function animatePics() {
  let pos = makeNewPosition();
  classes.forEach(klass => {
    klass.style.zIndex += pos[2];
  });
  anime({
      targets: classes,
      translateY: pos[1],
      translateX: pos[0],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 2000,
      delay: function(el, i, l) {
        return i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      }
      
    });
 
}