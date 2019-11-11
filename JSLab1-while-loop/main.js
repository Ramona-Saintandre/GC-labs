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
  * good bye alert is not working 
  *//**
   */
 if (playGame = "yes"){
     alert(`Great, ${userName}, Let the games begin`) ;
    }else{
        alert("Goodbye, CHICKEN!!!!")
    };

   

    /**
     * how does the game start ?
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
         * not sure if I am using the right operator
         */
        while(player1Health >0 === playerGrantHealth>0){

            /**
             * @console.log score with health that is left 		
             */
            console.log(`${userName} has ${playerHealth} left`);
            console.log(`Grant the Mighty Chicken has ${playerGrantHealth} left`);
        };

        /**
         * @let		array	healthDamage
         * loop will remove random number either 1 or 2 from health for damage 
         */
        let healthDamage = [1,2];

        /**
         * @var	player1Health	mixed	
         * https://www.w3schools.com/jsref/jsref_ceil.asp 
         * https://www.w3schools.com/jsref/jsref_floor.asp 
         * not sure if I should use ceil or floor , from reading the article I think I need floor for grant
         * because I am rounding down 
         * Ceil for player1 since they will get a point?
         * 
         */
        player1Health = (Math.ceil(Math.random()*2));
        playerGrantHealth = (Math.floor(Math.random()*2));




