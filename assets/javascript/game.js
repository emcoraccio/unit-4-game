
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


$(document).ready(function () {

  let screen1 = $('div.screen1');
  let screen2 = $('div.screen2');
  let screen3 = $('div.screen3');
  let youWinScreen = $('div.you-win-screen');
  let youLoseScreen = $('div.you-lose-screen');

  let rebelsDiv = $('div.cont-rebels');
  let imperialsDiv = $('div.cont-imperials');
  let chosenHeroDiv = $('div.chosen-hero');
  let chosenEnemyDiv = $('div.chosen-enemy');
  let chosenHero = $('img.chosen-hero');
  let chosenEnemy = $('img.chosen-enemy');
  let $defeatedEnemies = $('div.defeated-enemies');
  let chooseCharacText = $('p.choose');
  let $yourSide = $('span.your-side');
  let $otherSide = $('span.other-side');

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
  let heroSide;
  let enemySide;

  let battleStarted = false;


  let reset = function () {
    lukeHealth.text(characters.luke.health);
    leiaHealth.text(characters.leia.health);
    yodaHealth.text(characters.yoda.health);
    atdpHealth.text(characters.atdp.health);
    tarkinHealth.text(characters.tarkin.health);
    stormtrooperHealth.text(characters.stormtrooper.health);
    battleStarted = false;
    
  }

  reset();
  //choose imperial or rebel
  $("span.choice").on('click', function (event) {
    let _this = $(this);
    let choice = _this.attr("choice");
    if (choice === "rebels") {
      rebelsDiv.fadeIn();
    }
    else {
      imperialsDiv.fadeIn();
    }
    screen2.hide();
  });

  //choose a character
  characterImg.on('click', function (event) {
    const $this = $(this);
    console.log(chosenHeroDiv.has('img').length);

    if (!chosenHeroDiv.has('img').length) {
      $this.next().addClass('hero-health')
      heroHealthText = $('p.hero-health > span')
      chosenHeroDiv.append($this.next());
      chosenHeroDiv.append($this);
      ($this).addClass('chosen-hero')
      chosenHero = $('img.chosen-hero');


      screen3.fadeIn();

      if ($this.attr("side") === "rebel") {
        rebelsDiv.fadeOut();
        heroSide = "rebels";
        enemySide = "imperials";
      }
      else {
        imperialsDiv.fadeOut();
        heroSide = "imperials";
        enemySide = "rebels";
      }
      chooseCharacText.text("choose a character to fight")
      console.log(chosenHeroDiv.has('img').length);
    }
    else if (!chosenEnemyDiv.has('img').length) {
      $this.next().addClass('enemy-health')
      enemyHealthText = $('p.enemy-health > span')
      chosenEnemyDiv.append($this.next());
      chosenEnemyDiv.append($this);
      ($this).addClass('chosen-enemy')
      chosenEnemy = $('img.chosen-enemy');
      chooseCharacText.fadeOut();
      $('button.attack').show();
      finalEnemy();
    }
  });

  //set end of game screen wording
  let setSideSpan = function(heroSide, enemySide) {
    $yourSide.text(heroSide.toUpperCase());
    $otherSide.text(enemySide.toUpperCase());
  };

  // check to see if you are fighting the final enemy
  let finalEnemy = function() {
    console.log($defeatedEnemies.has('img').length)
    console.log($defeatedEnemies);
    if((enemySide == "rebels" && !rebelsDiv.has('img').length) ||
        enemySide == "imperials" && !imperialsDiv.has('img').length){
      $('h2.side-title').fadeOut();
      $('h2.battle').text("FINAL BATTLE!")
    }
  };


  // hover display health
  characterImg.mouseenter(
    function () {
      $(this).next().slideDown();
    }
  )
  characterImg.mouseleave(
    function () {
      $(this).next().slideUp();
    }
  )


  let setChosenValues = function () {
    if (chosenHeroDiv.has('img').length && chosenEnemyDiv.has('img').length) {

      let heroName = chosenHero.attr('name');
      let enemyName = chosenEnemy.attr('name');

      enemyAttack = characters[enemyName]['attack'];
      heroAttack = characters[heroName]['attack'];

      heroHealth = characters[heroName]['health'];
      enemyHealth = characters[enemyName]['health'];

    }
  }

  // check to see if hero or enemy has been defeated
  let isDefeated = function () {
    setSideSpan(heroSide, enemySide);
    if (enemyHealth <= 0) {
      chosenEnemy.removeClass('chosen-enemy')
      chosenEnemyDiv.contents().appendTo($defeatedEnemies);
      $('button.attack').hide();

      if (heroSide === "rebels") {

        if (imperialsDiv.has('img').length) {
          chooseCharacText.text("choose another character to fight").fadeIn();
        }
        else {
          screen3.fadeOut();
          youWinScreen.fadeIn();
        }
      }
      else {
        if (rebelsDiv.has('img').length) {
          chooseCharacText.text("choose another character to fight").fadeIn();
        }
        else {
          screen3.fadeOut();
          youWinScreen.fadeIn();
        }
      }
    }
    else if (heroHealth <= 0) {
      screen3.fadeOut();
      youLoseScreen.fadeIn();
    }
  }

  // reduces players' health by amount they were attacked
  let attack = function () {
    enemyHealth -= parseInt(newAttack);
    isDefeated();
    heroHealth -= parseInt(enemyAttack)

    newAttack += heroAttack;
    heroHealthText.text(heroHealth)
    enemyHealthText.text(enemyHealth)
  }

  $('button.attack').on('click', function () {
    if (!battleStarted) {
      setChosenValues();
      newAttack = parseInt(heroAttack);
    }
    isDefeated();
    attack();

    battleStarted = true;
  });






});