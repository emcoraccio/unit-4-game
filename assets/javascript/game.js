
let rebel = {

  luke: {
    health: 120,
    attack: 11
  },

  leia: {
    health: 150,
    attack: 9
  }, 

  yoda: {
    health: 90,
    attack: 15
  }

}

let imperial = {

  atdp: {
    health: 145,
    attack: 20
  },

  tarkin: {
    health: 50,
    attack: 6
  },

  stormtrooper: {
    health: 80,
    attack: 9
  }

}

function whichSide (event) {

}



$(document).ready(function(){
  
  let screen1 = $('div.screen1');
  let screen2 = $('div.screen2');
  let screen3 = $('div.screen3');

  let rebelsDiv = $('div.cont-rebels');
  let imperialsDiv = $('div.cont-imperials');
  let chosenHeroDiv = $('div.chosen-hero');
  let chosenEnemyDiv = $('div.chosen-enemy');
  let chooseCharacText = $('p.choose');

  let characterImg = $('img.character');

  let lukeHealth = $('span.luke');
  let leiaHealth = $('span.leia');
  let yodaHealth = $('span.yoda');
  let atdpHealth = $('span.atdp');
  let tarkinHealth = $('span.tarkin');
  let stormtrooperHealth = $('span.stormtrooper');


  let reset = function() {
    lukeHealth.text(rebel.luke.health);
    leiaHealth.text(rebel.leia.health);
    yodaHealth.text(rebel.yoda.health);
    atdpHealth.text(imperial.atdp.health);
    tarkinHealth.text(imperial.tarkin.health);
    stormtrooperHealth.text(imperial.stormtrooper.health);
  }

  reset();
  //choose imperial or rebel
  $("span.choice").on('click', function(event){
    let _this = $(this);
    let choice = _this.attr("choice");
    if(choice === "rebels"){
      rebelsDiv.fadeIn();
    }
    else {
      imperialsDiv.fadeIn();
    }
    screen2.hide();
  });
  
  //choose a character
  characterImg.on('click', function(event){
    let _this = $(this);
    console.log(chosenHeroDiv.has('img').length);
    
    if(!chosenHeroDiv.has('img').length){
      chosenHeroDiv.append(_this.next());
      chosenHeroDiv.append(_this);
      
      screen3.fadeIn();
      
      if(_this.attr("side") === "rebel"){
        rebelsDiv.fadeOut();
      }
      else {
        imperialsDiv.fadeOut();
      }
      chooseCharacText.text("choose a character to fight")
      console.log(chosenHeroDiv.has('img').length);
    } 
    else if (!chosenEnemyDiv.has('img').length) {
      chosenEnemyDiv.append(_this.next());
      chosenEnemyDiv.append(_this);
      chooseCharacText.fadeOut();
    }
  });

  // hover display health
  characterImg.mouseenter(
    function() {
      $(this).next().slideDown();
    }
  )
  characterImg.mouseleave(
    function(){
      $(this).next().slideUp();
    }
  )



  }





);