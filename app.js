'use strict';

var db = [];
//I was toying with this but didnt want to break anything...
/*var answersList = [answer1, answer2, answer3, answer4, answer5];

function userPromptAnswers (answers){
  answersList[i] = answers;
  userPromptLogic();
}

function userPromptLogic () {
  if (answer1 === 'Y' || answer1 === 'YES') {
    alert('Yes! You are correct!!! I was on active duty for 6.5 years!');
    correct += 1;
    console.log('correct= ' + correct);
  } else {
    alert('No... you are wrong.');
    incorrect += 1;
    console.log('incorrect= ' + incorrect);
  }
}

userPromptAnswers (answer1); */

// Rockstar confirm
var correct = 0;
var incorrect = 0;
var confirmed = confirm('Are you ready to become a rockstar!?');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready... but were gonna start anyway.');
}

// grabing the user's name
var user = prompt('What is your name? Mine is Joel.');
console.log('The user\'s name is: ' + user);
console.log(db);
alert('Hello ' + user + '... I\'m going to ask you a few questions.');

// Question about the Air Force
function airforceFunction() {

  var answer1 = prompt(user + ' Please answer with a Y or N. Do you think I was in the Air Force?').toUpperCase();
  db[0] = {'Do you think I was in the Air Force? Correct answer: Y...': answer1};

  if (answer1 === 'Y' || answer1 === 'YES') {
    alert('Yes! You are correct!!! I was on active duty for 6.5 years!');
    correct += 1;
    console.log('correct= ' + correct);
  } else {
    alert('No... you are wrong.');
    incorrect += 1;
    console.log('incorrect= ' + incorrect);
  }
};

// Whats my age question!
function ageFunction() {

  var answer2 = prompt(user + ' please answer with a Yes or No. Do you believe I am 27 years old?').toLowerCase();
  db[1] = {'Do you believe I am 27 years old? Correct answer: Yes...': answer2};

  if (answer2 === 'yes' || answer2 === 'y') {
    alert('You are correct!');
    correct += 1;
    console.log('correct= ' + correct);
  } else {
    alert('Naw. Sorry you are wrong');
    incorrect += 1;
    console.log('incorrect= ' + incorrect);
  }
};

//Cat question =)
function kittyFunction() {

  var answer3 = prompt('Do you think I have a cat? This is a yes or no question, please answer with a yes or no.').toLowerCase();
  db[2] = {'Do you think I have a cat? Correct answer: yes...': answer3};

  if (answer3 === 'yes' || answer3 === 'y') {
    alert('You are amazing and correct!');
    correct += 1;
    console.log('correct= ' + correct);
  } else {
    alert('No, sorry you are wrong bro.');
    incorrect += 1;
    console.log('incorrect= ' + incorrect);
  }
};

//Do I have a little brother question...
function brotherFunction() {

  var answer4 = prompt('Do I have a little brother? This is a y or n question, so please answer with a y or n.').toLowerCase();
  db[3] = {'Do I have a little brother? Correct answer: y...': answer4};

  if (answer4 === 'y' || answer4 === 'yes') {
    alert('You are correct!');
    correct += 1;
    console.log('correct= ' + correct);
  } else {
    alert('Nope. You are wrong...');
    incorrect += 1;
    console.log('incorrect= ' + incorrect);
  }
};

//GTO question, I'm so sad I got rid of it.
function gtoFunction() {

  var answer5 = prompt('Do you think I currently have a GTO? yes or no please ' + user + '.').toLowerCase();
  db[4] = {'Do you think I currently have a GTO? Correct answer: no...': answer5};

  if (answer5 === 'yes' || answer5 === 'y') {
    alert('No... Sadly I sold it.');
    correct += 1;
    console.log('correct= ' + correct);
  } else {
    alert('You are amazing and correct! ');
    incorrect += 1;
    console.log('incorrect= ' + incorrect);
  }
};

//Number guessing game!
function guessingFunction() {

  var correctAnswer = Math.floor((Math.random() * 10) + 1);

  var attempts = 4;

  for (var i = 0; i < 4; i++) {
    var guessNumber = prompt('What is my favorite number? Input a number below.');

    if (guessNumber < correctAnswer) {
      attempts --;
      alert('Guess higher!');
    } else if (guessNumber > correctAnswer){
      attempts --;
      alert('Guess lower!');
    } else if (guessNumber == correctAnswer){
      alert('You guessed right!');
      correct += 1;
      console.log('correct= ' + correct);
      break;
    } else {
      alert('Wrong you suck, you didnt enter a valid thing')
    }
  }

  if (attempts === 0) {
    alert('You are out of attempts! Oh no!');
    incorrect += 1;
    console.log('incorrect= ' + incorrect);
  }
};

//Guess which states I have lived in.
function statesFunction() {

  var states = ['california', 'arizona', 'new mexico', 'texas', 'florida'];

  var statesAttempts = 6;

  for (var i = 0; i < 7; i++) {
    var statesQuestion = prompt('Can you guess what states I\'ve lived in besides Washington?').toLowerCase();

    if (statesQuestion === states[0] || statesQuestion === states[1] || statesQuestion === states[2] || statesQuestion === states[3] || statesQuestion === states[4]){
      alert('You are correct!');
      correct += 1;
      console.log('correct= ' + correct);
      break;
    } else {
      alert('You are wrong! Guess again!');
    }
  }

  if (statesAttempts === 0) {
    alert('You... are... AWFUL at this.');
    incorrect += 1;
    console.log('incorrect= ' + incorrect);
  }
};

airforceFunction();
ageFunction();
kittyFunction();
brotherFunction();
gtoFunction();
guessingFunction();
statesFunction();

var confirmed = confirm('Thanks for answering my questions ' + user + '!' + ' You got ' + correct + ' correct!');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready... Too bad I run this.');
}
