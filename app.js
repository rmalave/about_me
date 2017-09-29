'use strict';

var userPoints = 0;
var user, score = 0, answer1, answer2, answer3, answer4, answer5;

user = prompt('Hi, what is your name?').toLowerCase();
console.log('user = ' + user);

alert(user + ', welcome to my guessing game. Let\'s see if you can guess a few things about me');

answer1 = prompt('Do I like videogames? Type yes or no').toLowerCase();
if(answer1 === 'yes' || answer1 === 'y') {
  score++;
  alert('Score: ' + score + '\nOh yeah. I love me some videogames.');
  console.log('answer1 = ' + answer1);
  console.log('score = ' + score);
} else {
  alert('Score: ' + score + 'Wrong answer! I love videogames!');
  console.log('answer1 = ' + answer1);
  console.log('score = ' + score);
}

answer2 = prompt('Is Rafael\s favorite hobby photography? Type yes or no').toLowerCase();
if(answer2 === 'yes' || answer2 === 'y') {
  score++;
  alert('Score: ' + score + '\nPhotography is one of my favorite hobbies');
  console.log('answer1 = ' + answer2);
  console.log('score = ' + score);
} else {
  alert('Score: ' + score + '\nWrong! I love photography!');
  console.log('answer2 = ' + answer2);
  console.log('score = ' + score);
}

answer3 = prompt('Do you think I like to exercise? Type yes or no').toLowerCase();
if(answer3 === 'yes' || answer3 === 'y') {
  score++;
  alert('Score: ' + score + '\nNice job! I love to exercise.');
  console.log('answer3 = ' + answer3);
  console.log('score = ' + score);
} else {
  alert('Score: ' + score + '\nWrong! I love to exercise!');
  console.log('answer3 = ' + answer3);
  console.log('score = ' + score);
}

answer4 = prompt('Do you think I like beer? Type yes or no').toLowerCase();
if(answer4 === 'yes' || 'y') {
  score++;
  alert('Score: ' + score + '\nYes! I love to open a cold one after a long day at work.');
  console.log('answer4 = ' + answer4);
  console.log('score = ' + score);
} else {
  alert('Score: ' + score + '\nWrong! I like a beer after a long day at work.');
  console.log('answer4 = ' + answer4);
  console.log('score = ' + score);
}

answer5 = prompt('Is my favorite color blue? Type yes or no').toLowerCase();
if(answer5 === 'yes' || answer5 === 'y') {
  score++;
  alert('Score: ' + score + '\nYes! right answer.');
  console.log('answer4 = ' + answer4);
  console.log('score = ' + score);
} else {
  alert('Score: ' + score + '\nNope! wrong answer.');
  console.log('answer4 = ' + answer4);
  console.log('score = ' + score);
}
