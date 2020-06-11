'use strict';

// проверяет значение на число
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let firstMessage;
    
firstMessage = confirm('Угадай число от 1 до 100');
console.log(firstMessage);

if (firstMessage == true) {
  // функция угадай число
  const guessNumber = function() {
    const botNumber = 88;
    let userNumber;

    // функция получить число от пользователя
    const getNumber = function() {
      userNumber = prompt('Введи число от 1 до 100');
      console.log(userNumber);

      if (botNumber < userNumber) {
        alert('Загаданное число меньше');
        return getNumber();
      }
      if (botNumber > userNumber) {
        alert('Загаданное число больше');
        return getNumber();
      }
      if (!isNumber(userNumber)) {
        alert('Введи число!');
        return getNumber();
      }
      if (botNumber == userNumber) {
        alert('Поздравляю! Ты угадал число!');
      }
    };
    
    return getNumber();

  };
  guessNumber();

} else {
  alert('Игра завершена');
}

