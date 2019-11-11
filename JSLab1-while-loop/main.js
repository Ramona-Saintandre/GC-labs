/**
 * Ramona Saintandre 
 * November 10th, 2019
 * GC - JSLab1 - while loop game   
 */

 /**
  * @let		string	userName  find out player1 name
  */

 let userName = prompt("Hello, What's your name");

 /**
  * @let		string	playGame  find out if the want to play
  *//**
   */
 let playGame = prompt(`"Hello, ${userName} would you like to play a game?`);
 /**
  * @if  playGame  player says yes game starts
  * @else player   is prompted with a message 		string	playGame  find out if the want to play
  *//**
   */
 if (playGame () == "yes"){
     prompt(`Great, ${userName}, Let the games begin`) ;
    }else{
        prompt("Goodbye, CHICKEN!!!!")
    };

   

    /**
     * @let player1	integer	player1 starts with 40 points
     */
    player1 = 40;
    /**
     * @let	playergrant	number starts with 10 points 
     */
    playerGrant =10;
    /**
     * @let		number	player1wins when playerGrant reaches 0 three times
     */
        player1wins = 0;