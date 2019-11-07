// Declare a variable with appropiate values
// a variable is a container for a valuesa variable is ceclard using var,let,const

let name= "Ramona Saintandre";
let age= "49";
let birthdate= "November 1, 1970"
let gcGR= true;
let lifeEvents = [
    "I was born in Fulda, Germany.Fulda",
    "I've been married for 15 years.",
    "I have 8 grandkids.",
    "This year I am celebrating 10 years of citizenship."
];

// If/Else statements name, birthday, age

if (gcGR) {
   console.log( `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Mi. 
I just turned ${age} on ${birthdate} !`
);
}else{
    console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Mi.
    I just turned ${age} on ${birthdate}! `);
   
}

// Write a for loop that starts at 0, iterates by increments of 1 while i is less than the length of lifeEvents

for (let i=0; i <lifeEvents.length; i++){
    console.log(lifeEvents[i])
};


// Declare a variable named randomNumber that is initialized to a random interger
// Write a while loop that loops while true
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://www.w3schools.com/js/js_random.asp


 let counter = 0;
 
 while (true){
let min = 1;
let max = 10;
    let randomNumber = Math.floor(Math.random()*(max-min + 1)) +min ;

if (randomNumber !==5){
    counter++;
    console.log( `${randomNumber}!==5`);

    // if random number is not equal to 5

 }else{

     counter++;
     console.log ("5 === 5 took ${counter} iterations to randomly gernerate the number 5");
     break;
 }
 }

