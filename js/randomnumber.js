var upper = 1000;
var randomNumber = getRandomNumber(upper);
console.log('randomNumber', randomNumber);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) +1
}

while (guess !== randomNumber) {
    console.log('guess==>', guess); //at 1st, guess is undefined
    //console.log('randomNumber', randomNumber); //however
    guess = getRandomNumber(upper);
    attempts +=1;
}