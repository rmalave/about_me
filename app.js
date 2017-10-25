'use strict';

var score = 0;

// List of questions to ask user
var questions = ['Do I like videogames?', 'Is my favorite hobby photography?',
  'Do I have any pets?', 'Do I like to go hiking?', 'Do I paint?'
];

// List of answers for each question
var answers = ['yes', 'yes', 'no', 'yes', 'no',
];

// Responses to each question.
var responses = [
  'Yes! I love to play games! When I have time that is.',
  'Right! I love hiking/backpacking to beautifull places and taking photos!',
  'Nope. But I would love to have a dog in the future!',
  'Yes! you probably remember I mentioned I like to take photos when I hike ;)',
  'Nope! Sadly. I would love to learn to paint.'
];

// List for last question
var placesILived = ['Puerto Rico', 'California', 'Germany'
];

 //Store user's name
var user = prompt('Hi, what is your name?').toLowerCase();
console.log('user = ' + user);
alert(user + ', welcome to my guessing game. Let\'s see if you can guess a few things about me');

// Loop through questions and reply with appropriate response
var answer;
for(var i = 0; i < questions.length; i++) {
  answer = prompt(questions[i] + '( yes or no).').toLowerCase();
  console.log(answer);
  if(answer === answers[i]) {
    score++;
    alert(responses[i] + ' Score: ' + score);
  } else {
    alert('Wrong answer!');
  }
}

var attempts = 4;
var answer6 = prompt('Can you guess my favorite number? HINT: 2-8');
while(attempts != 1) { 
  if(answer6 == '3') {
    alert('Yes! You got it right! My favorite number is 3!');
    score++;
    break;
  } else {
    attempts--;
    alert('Sorry, wrong answer!');
    answer6 = prompt('Try again! You have ' + attempts + ' guesses left!');
  }
}
if (attempts == 1) {
  alert('You ran out of guesses! My favorite number is 3!');
}

function checkGuess(answer) {
  for(var i = 0; i < placesILived.length; i++) {
    if(answer == placesILived[i]) {
      return true;
    }
  }
  return false;
}

var attempts = 6;
var answer7 = prompt('Guess a place I have lived besides Washington? You have 6 guesses! ');
while(attempts != 1) { 
  if(checkGuess(answer7)) {
    alert('Yes! You got it right!');
    score++;
    break;
  } else {
    attempts--;
    alert('Sorry, wrong answer!');
    answer7 = prompt('Try again! You have ' + attempts + ' guesses left!');
  }
}
if (attempts == 1) {
  alert('You ran out of guesses! Try again next time!');
}

// Show total number of correct answers to the user
alert('You got ' + score + ' out of 7 questions correct ' + user + '!');
