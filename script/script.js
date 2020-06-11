'use strict';

// проверяет значение на число
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const startGame = function() {

  let firstMessage;
    
  firstMessage = confirm('Угадай число от 1 до 100');
  console.log(firstMessage);

  if (firstMessage == true) {
    // функция угадай число
    const guessNumber = function() {
      
      let botNumber;

      const getRandomIntInclusive = function(min, max) {
        min = Math.ceil(1);
        max = Math.floor(100);
        return Math.floor(Math.random() * (max - min)) + min;
      };

      botNumber = getRandomIntInclusive();
      console.log(botNumber);

      let userNumber;

      // функция завершить игру
      const stopGame = function() {
        alert('Игра завершена');
      };

      // функция получить число от пользователя
      const getNumber = function() {
        userNumber = prompt('Введи число от 1 до 100');
        console.log(userNumber);

        if (botNumber < userNumber) {
          alert('Загаданное число меньше');
          return getNumber();
        } else if (userNumber == null) {
          return stopGame();
        }
        if (botNumber > userNumber) {
          alert('Загаданное число больше');
          return getNumber();
        } else if (userNumber == null) {
          stopGame();
        }
        if (!isNumber(userNumber)) {
          alert('Введи число!');
          return getNumber();
        } else if (userNumber == null) {
          stopGame();
        }
        if (botNumber == userNumber) {
          alert('Поздравляю! Ты угадал число!');
          return startGame();
        }
      };
      
      return getNumber();

    };
    guessNumber();

  } else {
    // функция завершить игру
    const stopGame = function() {
      alert('Игра завершена');
    };
    stopGame();
  }
};

startGame();

