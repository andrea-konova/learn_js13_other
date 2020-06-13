'use strict';

// проверяет значение на число
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const startGame = function() {

  let firstMessage;
    
  firstMessage = confirm('Угадайте число от 1 до 100');
  console.log(firstMessage);

  if (firstMessage == true) {
    // функция угадай число
    const guessNumber = function() {
      
      let counter = 10;
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
        userNumber = prompt('Введите число от 1 до 100');
        console.log(userNumber);

        counter--;
        if (counter == 0) {
          let secondMessage;
          secondMessage = confirm('Попытки закончились, хотите сыграть еще?');
          if (secondMessage == true) {
            counter = 10;
            botNumber = getRandomIntInclusive();
            console.log(botNumber);
            getNumber();
            return 0;
          } else if (secondMessage == false) {
            stopGame();
            return 0;
          }
        }

        if (botNumber < userNumber) {
          alert('Загаданное число меньше, осталось попыток: ' + counter);
          getNumber();
          return 0;
        } else if (userNumber == null) {
          stopGame();
          return 0;
        }
        if (botNumber > userNumber) {
          alert('Загаданное число больше,  осталось попыток: ' + counter);
          getNumber();
          return 0;
        } else if (userNumber == null) {
          stopGame();
        }
        if (!isNumber(userNumber)) {
          alert('Введите число!');
          getNumber();
          return 0;
        } else if (userNumber == null) {
          stopGame();
        }
        if (botNumber == userNumber) {
          let thirdMessage;
          thirdMessage = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if (thirdMessage == true) {
            counter = 10;
            botNumber = getRandomIntInclusive();
            console.log(botNumber);
            getNumber();
            return 0;
          } else if (thirdMessage == false) {
            stopGame();
            return 0;
          }
          startGame();
          
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

