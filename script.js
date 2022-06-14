'use strict';


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);
  console.log(guess)
 

  // When there is no input....................................
  if (!guess) {
    displayMessage('🛑 No number!');

    // When players win....................................
  } else if (guess === secretNumber) {
    displayMessage('🎊 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;

    if (highscore < score) { 
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 📈' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // Botton Again
  document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
