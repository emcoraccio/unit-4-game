
let characters = {

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
  },


// let imperial = {

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
  let chosenHero = $('img.chosen-hero');
  let chosenEnemy = $('img.chosen-enemy');
  let chooseCharacText = $('p.choose');

  let characterImg = $('img.character');

  let lukeHealth = $('span.luke');
  let leiaHealth = $('span.leia');
  let yodaHealth = $('span.yoda');
  let atdpHealth = $('span.atdp');
  let tarkinHealth = $('span.tarkin');
  let stormtrooperHealth = $('span.stormtrooper');

  let heroAttack;
  let enemyAttack;
  let newAttack;
  let heroHealthText;
  let enemyHealthText;
  let heroHealth;
  let enemyHealth;
  
  let battleStarted = false;


  let reset = function() {
    lukeHealth.text(characters.luke.health);
    leiaHealth.text(characters.leia.health);
    yodaHealth.text(characters.yoda.health);
    atdpHealth.text(characters.atdp.health);
    tarkinHealth.text(characters.tarkin.health);
    stormtrooperHealth.text(characters.stormtrooper.health);
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
      _this.next().addClass('hero-health')
      heroHealthText = $('p.hero-health > span')
      chosenHeroDiv.append(_this.next());
      chosenHeroDiv.append(_this);
      (_this).addClass('chosen-hero')
      chosenHero = $('img.chosen-hero');

      
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
      _this.next().addClass('enemy-health')
      enemyHealthText = $('p.enemy-health > span')
      chosenEnemyDiv.append(_this.next());
      chosenEnemyDiv.append(_this);
      (_this).addClass('chosen-enemy')
      chosenEnemy = $('img.chosen-enemy');
      chooseCharacText.fadeOut();
      $('button.attack').show();
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

  let setChosenValues = function() {
    if(chosenHeroDiv.has('img').length && chosenEnemyDiv.has('img').length) {
      // let chosenHero = $('img.chosen-hero');
      // let chosenEnemy = $('img.chosen-enemy');
  
      let heroName = chosenHero.attr('name');
      let enemyName = chosenEnemy.attr('name');
  
      enemyAttack = characters[enemyName]['attack'];
      heroAttack = characters[heroName]['attack'];
  
      heroHealth = characters[heroName]['health'];
      enemyHealth = characters[enemyName]['health'];
      
      return [heroHealth, enemyHealth] 
    }
  }

  $('button.attack').on('click', function(){
    if(!battleStarted) {
      setChosenValues();
      newAttack = parseInt(heroAttack);
    }

    let isDefeated = function() {
      if (enemyHealth <= 0){
        chosenEnemyDiv.fadeOut('slow');
  
    }
  
    }

    enemyHealth -= parseInt(newAttack);
    isDefeated();
    heroHealth -= parseInt(enemyAttack)
  
    newAttack += heroAttack;
    heroHealthText.text(heroHealth)
    enemyHealthText.text(enemyHealth)

    battleStarted = true;
    
  });






});