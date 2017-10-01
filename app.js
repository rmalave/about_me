'use strict';

var user, answer6, answer7, answer, score = 0;

var questions = [
  'Do I like videogames?',
  'Is my favorite hobby photography?',
  'Do I have any pets?',
  'Do I like to go hiking?',
  'Do I paint?'
];

var answers = [
  'yes',
  'yes',
  'no',
  'yes',
  'no',
];

var responses = [
  'Yes! I love to play games! When I have time that is.',
  'Right! I love hiking/backpacking to beautifull places and taking photos!',
  'Nope. But I would love to have a dog in the future!',
  'Yes! you probably remember I mentioned I like to take photos when I hike ;)',
  'Nope! Sadly. I would love to learn to paint.'
];

var placesILived = [
  'Puerto Rico',
  'California',
  'Idaho',
  'Germany',
  'New York',
  'Texas',
  'Oregon',
  'Paris'
];

user = prompt('Hi, what is your name?').toLowerCase();
console.log('user = ' + user);

alert(user + ', welcome to my guessing game. Let\'s see if you can guess a few things about me');

/*
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
*/

/*
var chances = 4;
do{
  answer6 = parseInt(prompt('What is my favorite number. HINT: between 2-6.'));
  if(answer6 < 3 && chances > 0) {
    chances--;
    alert('Too low! try again? You have ' + chances + ' more chances!');
  } else if(answer6 > 3 && chances > 0) {
    chances--;
    alert('Too high! try again? You have ' + chances + ' more chances!');
  }
}while(answer6 !== 3 && chances > 0);
*/

answer7 = prompt('Can you guess a place I\'ve lived before Seattle? ' + placesILived).toLowerCase();

/*
if(score === answers.length) {
  alert('Perfect Score! Score: ' + score + '/' + answers.length);
} else if((score / answers.length) * 100 > 0.75) {
  alert('Nice! you got most of them! Score: ' + score + '/' + answers.length);
} else {
  alert('Well, that was a good try. Score: ' + score + '/' + answers.length);
}
*/
