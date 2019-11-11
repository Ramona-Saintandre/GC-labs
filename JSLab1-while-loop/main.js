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
     * @let player1Health	number	player1 starts with 40 points
     */
    player1Health = 40;
    /**
     * @let	playergrantHealth	number starts with 10 points 
     */
    playerGrantHealth =10;
    /**
     * @let	player1wins 	number	player1wins when playerGrant reaches 0 three times
     */
        player1wins = 0;

        /**
         * Start of game with a while loop 
         * @let	object	player1Health playerGrantHealth health/damage meter
         * 
         */
        while(player1Health >0 === playerGrantHealth>0){

            /**
             * @console.log score with health that is left 		
             */
            console.log(`${userName} has ${playerHealth} left`);
            console.log(`Grant has ${playerGrantHealth} left`);
        };

        

