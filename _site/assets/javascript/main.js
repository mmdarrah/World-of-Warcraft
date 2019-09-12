
let navBar = document.querySelector('.wrapper');
let navBtn = document.querySelectorAll('.firstpage-nav-btn');

function navbarMove() {
  let y = window.scrollY;
  if (y >= 90) {
    navBtn.forEach(navButtons => {
      navButtons.classList.add('firstpage-nav-btn');
    });
    navBar.classList.add('nav-up');
  } else {
    navBtn.forEach(navButtons => {
      navButtons.classList.remove('firstpage-nav-btn');
    });
    navBar.classList.remove('nav-up');
  }
}




function checkForVisibility() {
  var contents = document.querySelectorAll(".content");
  contents.forEach(function (content) {
    if (isElementInViewport(content)) {
      content.classList.add("headerVisible");
    } else {
      content.classList.remove("headerVisible");
    }
  });
}

function isElementInViewport(el) {
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

  addEventListener("load", function () {
    animatePics();
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
let classInfo1 = document.querySelectorAll('.hunter-info');
let classInfo2 = document.querySelectorAll('.rogue-info');
let classInfo3 = document.querySelectorAll('.mage-info');
let classInfo4 = document.querySelectorAll('.paladin-info');
let classInfo5 = document.querySelectorAll('.priest-info');
let classInfo6 = document.querySelectorAll('.monk-info');
let classInfo7 = document.querySelectorAll('.warrior-info');
let classInfo8 = document.querySelectorAll('.warlock-info');
let classInfo9 = document.querySelectorAll('.shaman-info');
let classInfo10 = document.querySelectorAll('.deathknight-info');
let classInfo11 = document.querySelectorAll('.druid-info');

let classInfo = [classInfo1.item(0), classInfo2.item(0), classInfo3.item(0), classInfo4.item(0), classInfo5.item(0), classInfo6.item(0), classInfo7.item(0), classInfo8.item(0),
classInfo9.item(0), classInfo10.item(0), classInfo11.item(0)];
let info = document.getElementById('info-p');
let infodiv = document.getElementById('info-div');
for (let i = 0; i < classInfo.length; i++) {
  document.getElementById("my-btn").addEventListener("click", function () {

    if (classInfo[i].style.opacity == '1') {
      classInfo[i].style.opacity = "0";
      infodiv.style.opacity = "0";
    } else {
      infodiv.style.opacity = "1";
      classInfo[i].style.opacity = "1";
    }
    switch (i) {
      case 0:
        classInfo[0].addEventListener('click', function () {
          info.innerText = "Hunters battle their foes at a distance, commanding their pets to attack while they nock their arrows and fire their guns. Though their missile weapons are effective at short and long ranges, hunters are also highly mobile. They can evade or restrain their foes to control the arena of battle."
        });
        break;
      case 1:
        classInfo[1].addEventListener('click', function () {
          info.innerText = "Rogues often initiate combat with a surprise attack from the shadows, leading with vicious melee strikes. When in protracted battles, they utilize a successive combination of carefully chosen attacks to soften the enemy up for a killing blow. Rogues must take special care when selecting targets so that their combo attacks are not wasted, and they must be conscious of when to hide or flee if a battle turns against them."
        });
        break;
      case 2:
        classInfo[2].addEventListener('click', function () {
          info.innerText = "Mages demolish their foes with arcane incantations. Although they wield powerful offensive spells, mages are fragile and lightly armored, making them particularly vulnerable to close-range attacks. Wise mages make careful use of their spells to keep their foes at a distance or hold them in place."
        });
        break;
      case 3:
        classInfo[3].addEventListener('click', function () {
          info.innerText = "Paladins stand directly in front of their enemies, relying on heavy armor and healing in order to survive incoming attacks. Whether with massive shields or crushing two-handed weapons, Paladins are able to keep claws and swords from their weaker fellows – or they use healing magic to ensure that they remain on their feet."
        });
        break;
      case 4:
        classInfo[4].addEventListener('click', function () {
          info.innerText = "Priests use powerful healing magic to fortify themselves and their allies. They also wield powerful offensive spells from a distance, but can be overwhelmed by enemies due to their physical frailty and minimal armor. Experienced priests carefully balance the use of their offensive powers when tasked with keeping their party alive."
        });
        break;
      case 5:
        classInfo[5].addEventListener('click', function () {
          info.innerText = "Whatever their combat role, monks rely mainly on their hands and feet to do the talking, and on strong connection with their inner chi to power their abilities. Abilities such as Expel Harm and Chi Wave both heal their allies while at the same time damaging their enemies."
        });
        break;
      case 6:
        classInfo[6].addEventListener('click', function () {
          info.innerText = "Warriors equip themselves carefully for combat and engage their enemies head-on, letting attacks glance off their heavy armor. They use diverse combat tactics and a wide variety of weapon types to protect their more vulnerable allies. Warriors must carefully master their rage – the power behind their strongest attacks – in order to maximize their effectiveness in combat"
        });
        break;
      case 7:
        classInfo[7].addEventListener('click', function () {
          info.innerText = "Warlocks burn and destroy weakened foes with a combination of crippling illnesses and dark magic. While their demon pets protect and enhance them, warlocks strike at their enemies from a distance. As physically weak spellcasters bereft of heavy armor, cunning warlocks allow their minions to take the brunt of enemy attacks in order to save their own skin"
        });
        break;
      case 8:
        classInfo[8].addEventListener('click', function () {
          info.innerText = "During combat, shaman place damaging and controlling totems on the ground to maximize their effectiveness while hindering their enemies. Shaman are versatile enough to battle foes up close or at range, but wise shaman choose their avenue of attack based on their enemies’ strengths and weaknesses."
        });
        break;
      case 9:
        classInfo[9].addEventListener('click', function () {
          info.innerText = "Death Knights engage their foes up-close, supplementing swings of their weapons with dark magic that renders enemies vulnerable or damages them with unholy power. They drag foes into one-on-one conflicts, compelling them to focus their attacks away from weaker companions. To prevent their enemies from fleeing their grasp, death knights must remain mindful of the power they call forth from runes, and pace their attacks appropriately"
        });
        break;
      case 10:
        classInfo[10].addEventListener('click', function () {
          info.innerText = "Druids are versatile combatants, in that they can fulfill nearly every role – healing, tanking, and damage dealing. It’s critical that druids tailor the form they choose to the situation, as each form bears a specific purpose"
        });
        break;


    }

  });
}

let classes = [class1, class2, class3, class4, class5, class6, class7, class8, class9, class10, class11];
function makeNewPosition() {

  let w = window.innerWidth / 2;
  let h = window.innerHeight / 2;

  // var nh = Math.floor(Math.random() * h);
  // var nw = Math.floor(Math.random() * w);

  return [h, w];

}
function animatePics() {
  let pos = makeNewPosition();
  anime({
    targets: classes,
    rotate: 360,
    translateY: [
      {
        value: '+=5px',
      },
    ],

    loop: true,
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'alternate',

    delay: function (el, i, l) {
      return i * 100;
    },
    endDelay: function (el, i, l) {
      return (l - i) * 100;
    }

  });

}

