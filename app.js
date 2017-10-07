'use strict';

var questions = [
  ['Do I like videogames. Type Yes or No?', 'yes', 'y'],
  ['Is my favorite hobby photography?', 'yes', 'y'],
  ['Do I have any pets?', 'no', 'n'],
  ['Do I like to go hiking?', 'no', 'n'],
  ['Do I paint?', 'no', 'n']
];

var responses = [
  ['Yes! I love to play games! When I have time that is', 'Wrong. I love videogames.'],
  ['Right! I love hiking/backpacking to beautifull places and taking photos!','Sorry, that\'s wrong.'],
  ['Do I have any pets?', 'No, I\'m sorry that isn\'t correct either.'],
  ['Yes! you probably remember I mentioned I like to take photos when I hike ;)', 'Incorrect!'],
  ['Nope! Sadly. I would love to learn to paint!', 'Sorry, that is not right.']
];

var user;
var userPoints = 0;
// List for last question
var placesILived = ['Spain', 'California', 'Idaho', 'Germany', 'New York',
  'Texas', 'Oregon', 'Paris'
];

//Questions
function question() {
  user = prompt('Hi, what is your name?');
  console.log('user = ' + user);

  alert(user + ', welcome to my guessing game. Let\'s see if you can guess a few things about me');

  var answer;
  for (var i = 0; i < questions.length; i++) {
    answer = prompt(questions[i][0]).toLowerCase();
    console.log(questions[i][0]);
    console.log(answer);

    if(answer === questions[i][1] || answer === questions[i][2]) {
      userPoints++;
      console.log(' user points = ' + userPoints);
      alert(responses[i][0] + ' You have ' + userPoints + ' points.');
    } else {
      alert(responses[i][1] + ' You have ' + userPoints + ' points.');
    }
  }
}
question();

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
