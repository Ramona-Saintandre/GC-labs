'use strict'
/**
 * Ramona Saintandre 
 * November 10th, 2019
 * GC - JSLab2 - functions
 **/
/**
 * @let		string	userName  find out player1 name
 * @let		string	playGame  find out if the want to play
 * @if  playGame  player says yes game starts
 * @else player   is prompted with a message 		string	playGame  find out if the want to play
 * good bye alert is not working 
 */
let player1Health = 40;
let playerGrantHealth = 10;
let player1wins = 0;

let userName = prompt("Hello, What's your name");
let playGame = prompt(`"Hello, ${userName} would you like to play a game?`);

if (playGame = "yes") {
  alert(`Great, ${userName} Let the games begin`);
} else {
  alert("Goodbye, CHICKEN!!!!");
};

/**
 * how does the game start ?
 * @let player1Health	number	player1 starts with 40 points
 * @let	playergrantHealth	number starts with 10 points 
 * @let	player1wins 	number	player1wins when playerGrant reaches 0 three times
 */

/**
 * Start of game with a while loop 
 * @let	object	player1Health playerGrantHealth health/damage meter
 * not sure if I am using the right operator
 * https://www.w3schools.com/js/js_comparisons.asp
 * ===	equal value and equal type	x === 5	true
 * &&	and	(x < 10 && y > 1) is true
 */

while (player1Health > 0 && player1wins < 3) {

  console.log(`${userName} has ${player1Health} left`);
  console.log(`Grant the Mighty Chicken has ${playerGrantHealth} left`);

  player1Health -= (Math.ceil((Math.random() * 2)));
  playerGrantHealth -= (Math.ceil((Math.random() * 2)));

  if (playerGrantHealth <= 0) {
    player1wins++;
    playerGrantHealth = 10; //reseting Grant
  };
};

/**
 * @let	array	healthDamage
 * loop will remove random number either 1 or 2 from health for damage 
 */

let healthDamage = [1, 2];

/**
 * @let	player1Health	mixed	
 * https://www.w3schools.com/jsref/jsref_ceil.asp 
 * https://www.w3schools.com/jsref/jsref_floor.asp 
 * not sure if I should use ceil or floor , from reading the article I think I need floor for grant
 * because I am rounding down 
 * Ceil for player1 since they will get a point?
 * mulitplying by two because there are two numbers
 */


/**
 * @let		mixed	damagePlayer1 
 * Player1 does not reset, and wins the game after Grant has reset 3 times 
 * @let	mixed	damageGrant Grant looses when he reaches 0 three times 
 * So I need to configure this so that he loose a random point, and Player1 will get that point
 * Grant's game resets when he reaches 0, after the third time Player1 is declared the winner
 */

// end of while loop

//winner declaration

if (player1wins = 3) {
  console.log('Player1 is totally awesome!!!');
} else {
  console.log('Grant has kicked some butt');
};