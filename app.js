'use strict';

var db = [];
/*var rightAnswer = 5;*/
var confirmed = confirm('Are you ready to become a rockstar!?');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready... but were gonna start anyway.');
}

var user = prompt('What is your name? Mine is Joel.');
console.log('The user\'s name is: ' + user);
console.log(db);
alert('Hello ' + user + '... I\'m going to ask you a few questions.');

var answer1 = prompt(user + ' Please answer with a Y or N. Do you think I was in the Air Force?');
db[0] = {'Do you think I was in the Air Force? Correct answer: Y...' : answer1};

if (answer1.toUpperCase() === 'Y') {
  alert('Yes! You are correct!!! I was on active duty for 6.5 years!');
} else {
  alert('No... you are wrong.');
  /*var rightAnswer = rightAnswer -1;*/
}

var answer2 = prompt(user + ' please answer with a Yes or No. Do you believe I am 27 years old?');
db[1] = {'Do you believe I am 27 years old? Correct answer: Yes...': answer2};

if (answer2.toLowerCase() === 'yes') {
  alert('You are correct!');
} else {
  alert('Naw. Sorry you are wrong');
  /*rightAnswer = rightAnswer -1;*/
}

var answer3 = prompt('Do you think I have a cat? This is a yes or no question, please answer with a yes or no.');
db[2] = {'Do you think I have a cat? Correct answer: yes...': answer3};

if (answer3.toLowerCase() === 'yes') {
  alert('You are amazing and correct!');
} else {
  alert('No, sorry you are wrong bro.');
  /*rightAnswer = rightAnswer -1;*/
}

var answer4 = prompt('Do I have a little brother? This is a y or n question, so please answer with a y or n.');
db[3] = {'Do I have a little brother? Correct answer: y...': answer4};

if (answer4.toLowerCase() === 'y') {
  alert('You are correct!');
} else {
  alert('Nope. You are wrong...');
  /*rightAnswer = rightAnswer -1;*/
}

var answer5 = prompt('Do you think I currently have a GTO? yes or no please ' + user + '.');
db[4] = {'Do you think I currently have a GTO? Correct answer: no...': answer5};

if (answer5.toLowerCase() === 'yes') {
  alert('No... Sadly I sold it.');
} else {
  alert('You are amazing and correct! ');
  /*rightAnswer = rightAnswer -1;*/
}

var confirm = confirm('Thanks for answering my questions ' + user!);

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready... Too bad I run this.');
}
