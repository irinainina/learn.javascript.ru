/*
Задание 8.
Перекрытие переменной
важность: 4

Если во внутренней функции есть своя переменная с именем currentCount – можно ли в ней получить currentCount из внешней функции?

function makeCounter() {
  var currentCount = 1;

  return function() {
    var currentCount;
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
  };
}

https://learn.javascript.ru/task/access-outer-variable
*/

/*
Решение
Нет. Если есть локальная переменная внутри функции, именно она будет использоваться.
*/


