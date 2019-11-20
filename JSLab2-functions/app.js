"use strict"
// app.js is for all declared functions/
/**
 * @let		string	userName  find out player1 name
 * @let		string	playGame  find out if the want to play
 * @if  playGame  player says yes game starts
 * @else player   is prompted with a message 		string	playGame  find out if the want to play
 * good bye alert is not working 
 * @todo need to make a branch and turn this into ternary 
 */
function startGame() { //brought over from lab1
  let userName = prompt("Hello, What's your name");
  let playGame = prompt(`"Hello, ${userName} would you like to play a game?`);
  if (playGame = "yes") {
    alert(`Great, ${userName} Let the games begin`);
  } else {
    //learned from soloLearn testing it out here
    confirm("Goodbye, CHICKEN!!!!");
  };
}
/**
 * Step 1 
 * @param randomDamage declare arrow function with no parameters
 * return interger between 1-10
 */
randomDamage = () => Math.ceil(Math.random) * 10);

/**
 * Step 2
 * @param chooseOption declare arrow funtion with 2 parameters
 * with 2 parameters opt1, opt2
 * @randNum declare initialize variaable to either 0 or 1 randomly 
 * return opt1 if @randNum to 0 otherwise return opt2
 * @todo Use ternary operator
 * Tenary operator takes 3 opperands, tenary opperator is a shortcut for an if statement
 * Tenary operators always recieve 2 conditions for both true and false 
 */
let chooseOption = (opt1, opt2) {
  let randNum = (Math.ceil(Math.random()) * 2);
  return randNum === 0 ? opt1 : opt2;
};

/**
 * Step 3
 * function expression @attackPlayer 1 parameter
 * @param health return randomDamage
 * 
 */

let attackPlayer = function (health) {
  return health - (randomDamage)
};

/**
 * step 4
 * @param logHealth arrow function with two parameters 
 * @param player and @health console.log
 */

let logHealth = (player, health) => {
  console.log(`${player} health ${health}`);
};

/**
 * step 5
 * @logDeath declare arrow function with two parameters 
 * @winner and @loser console.log 
 */

let logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

/**
 * Step 6
 * @isDead declare arrow function with one parameter named @health
 * return boolean value of true or false @health <=0
 */

let isDead = (health) => {
  return health <= 0;
}

/**
 * Step 7
 * declare a function @fight with 4 parameters 
 * @player1
 * @player2
 * @player1Health
 * @player2Health
 * within the @fight function, write while loop that loops while true
 * 
 */

/**
 * Step 8
 *declare and initilize @attacker equal to @chooseOption with 
 @player1 and @player2 as arguments
 */

 /**
  * Step 9
  * has an if statement  triggered whe @attacker is equal to @player1
  *  
  */

 /**  
  * Step 10
  * @param {*} player2Health equal to the prodcut of @attackPlayer with @player2Health
  * @todo create a branch and turn this into a teranary operation
  * 
    */

    /**
     * Step 11
     * call @logHealth with 
     * @param  player2   @param  player2Health as arguments  
     * @todo ask Chris if this should be a teranary operation   
     */

     /**
      * Step 12
      * if statement @isDead with 
      * @param player2Health as an argument equates to true , 
      */

      /**
       * Step 13
       * @logDeath call function with 
       * @player1 and @player2 as arguments 
       */

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1);
    player2Health = attackPlayer(player2Health);
    logHealth(player2,player2Health);
    if(isDead(player2Health)){
    logDeath(player1,player2);
    break;//not sure if this is the right place for the break ?
    }
    /**
     * Step 14
     * Create an else statement that runs @isDead and sets  
     * @player1 equal to the @attackPlayer function with @player1Health as its argument
     * call the @logHealth with @player1 and @player1Health as its arguments
     * call the @logDeath function with @player2 and @player1 as arguments 
     */


  }else{
    player1Health = attackPlayer(player1Health);
    logHealth(player1,player1Health);
  }
}

// player1Health = 40;
// playerGrantHealth = 10;
// player1wins = 0;



// /**
//  * Start of game with a while loop 
//  * @let	object	player1Health playerGrantHealth health/damage meter
//  * not sure if I am using the right operator
//  * https://www.w3schools.com/js/js_comparisons.asp
//  * ===	equal value and equal type	x === 5	true
//  * &&	and	(x < 10 && y > 1) is true
//  */
// while (player1Health > 0 && playerGrantHealth > 0) {

//   /**
//    * @console.log score with health that is left 		
//    */
//   console.log(`${userName} has ${player1Health} left`);
//   console.log(`Grant the Mighty Chicken has ${playerGrantHealth} left`);
// };

// /**
//  * @let		array	healthDamage
//  * loop will remove random number either 1 or 2 from health for damage 
//  */
// let healthDamage = [1, 2];

// /**
//  * @var	player1Health	mixed	
//  * https://www.w3schools.com/jsref/jsref_ceil.asp 
//  * https://www.w3schools.com/jsref/jsref_floor.asp 
//  * not sure if I should use ceil or floor , from reading the article I think I need floor for grant
//  * because I am rounding down 
//  * Ceil for player1 since they will get a point?
//  * mulitplying by two because there are two numbers
//  */
// player1Health = (Math.ceil(Math.random() * 2));
// playerGrantHealth = (Math.floor(Math.random() * 2));



// /**
//  * @let		mixed	damagePlayer1 
//  * Player1 does not reset, and wins the game after Grant has reset 3 times 
//  */
// let damagePlayer1 = healthDamage - damageGrant;
// /**
//  * @let	mixed	damageGrant Grant looses when he reaches 0 three times 
//  * So I need to configure this so that he loose a random point, and Player1 will get that point
//  * Grant's game resets when he reaches 0, after the third time Player1 is declared the winner
//  */
// //  let damageGrant =   healthDamage - I am totally lost. I can not figure out how to bring this all together 
// // This is how far I was able to get
// // Sorry