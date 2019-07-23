# Star Wars RPG

## Description of Game Play

* Game which has two classes of characters battling against each other
* User chooses which character to play as
* User is also able to choose which character will oppose them
* User's attack is multiplied each time


## Code Used

* html is manipulated using jquery
* the grid is established using materialize

## Functions 

#### reset 
  * used to reset the values at the beginning of the game for the initial spans

#### isDefeated
  * used to check if either character has been defeated in the battle

#### setChosenValues and setEnemyValues 
  * both used to set values for the characters which are chosen
  * setChosenValues to be used when user has chosen character to be and first character to fight
  * setEnemyValues to be used only after choosing subsequent characters to fight

#### attack
  * used to evaluate attack power of each character
  * deducts attack from opponent's health
  * sets attack value to html

