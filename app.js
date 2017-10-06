'use strict';

var userPoints = 0;
// List for last question
var placesILived = ['Spain', 'California', 'Idaho', 'Germany', 'New York',
  'Texas', 'Oregon', 'Paris'
];

//Store user's name
var user = prompt('Hi, what is your name?').toLowerCase();
console.log('user = ' + user);
alert(user + ', welcome to my guessing game. Let\'s see if you can guess a few things about me');

//Question 1
function question1() {
  var answer = prompt('Do I like videogames. Type Yes or No').toLowerCase();
  console.log('First question, user has started with zero points.');

  if(answer === 'yes' || answer === 'y') {
    alert('Yes! I love to play games! When I have time that is.');
    userPoints++;
    console.log(userPoints);
  } else {
    alert('Wrong. I love videogames.');
  }
}
question1();

//Question 2
function question2() {
  var answer1 = prompt('Is my favorite hobby photography?').toLowerCase();
  console.log('After Question 1, user has ' + userPoints + '!');

  if(answer1 === 'yes' || answer1 === 'y') {
    alert('Right! I love hiking/backpacking to beautifull places and taking photos');
    userPoints++;
    console.log(userPoints);
  } else {
    alert('Sorry, that\'s wrong.');
  }
}
question2();

//Question 3
function question3() {
  var answer2 = prompt('Do I have any pets?').toLowerCase();
  console.log();
  if(answer2 === 'no' || answer2 === 'n') {
    alert('Nope. But I would love to have a dog in the future!');
    //userPoints++;
    console.log(userPoints);
  } else {
    alert('No, I\'m sorry that isn\'t correct either.');
  }
}
question3();

//Question 4
function question4() {
  var answer3 = prompt('Do I like to go hiking?').toLowerCase();
  console.log(answer3);
  if(answer3 === 'no' || answer3 === 'n') {
    alert('Yes! you probably remember I mentioned I like to take photos when I hike ;)');
    userPoints++;
    console.log(userPoints);
  } else {
    alert('Incorrect!');
  }
}
question4();

//Question 5
function question5() {
  var answer4 = prompt('Do I paint?').toLowerCase();
  console.log('user answered and has ' + userPoints + ' so far');

  if(answer4 === 'no' || answer4 === 'n') {
    alert('Nope! Sadly. I would love to learn to paint.' + userPoints + ' /5!');
    userPoints++;
    console.log(userPoints);
  } else {
    alert('Sorry, that is not right.');
  }
}
question5();

function question6() {
  var answer6;
  for(var i = 4; i > 0; i--) {
    answer6 = parseInt(prompt('What is my favorite number. HINT: between 2-6. You have ' + i + ' guesses left!'));
    if(answer6 === 3) {
      userPoints++;
      alert('Correct! the answer is 3!');
      break;
    } else if(answer6 < 3) {
      alert('Too low!');
    } else if(answer6 > 3) {
      alert('Too high!');
    }
  }
  alert('You ran out of guesses! The correct answer is 3!');
}
question6();

function question7() {
  var answer7;
  for(var i = 6; i > 0; i--) {
    answer7 = prompt('Guess a place I have lived before? You have ' + i + ' guesses left. ' + placesILived);
    console.log('answer7 = ' + answer7);
    if(placesILived.indexOf(answer7) > -1) {
      userPoints++;
      alert('Correct! I have lived in ' + answer7 + '.');
      break;
    } else if(answer7 < 3) {
      alert('Too low!');
    } else if(answer7 > 3) {
      alert('Too high!');
    }
  }
  alert('You ran out of guesses! The correct answer is Germany!');
  // Show total number of correct answers to the user
  alert('You got ' + userPoints + ' out of 7 questions correct ' + user + '!');
}
question7();
