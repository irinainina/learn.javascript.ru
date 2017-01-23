/*
Задание 9.
Глобальный счётчик
важность: 5

Что выведут эти вызовы, если переменная currentCount находится вне makeCounter?

var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert( counter() ); // ?
alert( counter() ); // ?

alert( counter2() ); // ?
alert( counter2() ); // ?

https://learn.javascript.ru/task/counter-window-variable
*/

/*
Решение
currentCount глобальная переменная, и когда дело дойдёт до вызова функции alert( counter2() );, её возьмут из внешнего окружения с значением, которое на тот момент у неё будет. Так что 1-2-3-4
*/


