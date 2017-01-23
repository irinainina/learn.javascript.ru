/*
Задание 15.
Определите, пуст ли объект
важность: 5

Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

Работать должно так:

function isEmpty(obj) {
  ваш код
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false

https://learn.javascript.ru/task/is-empty
*/

function isEmpty(obj) {
    var i = 0;
    for(var key in obj) {
        i++;
        }
    if(i > 0) {
        return false;
    }
    return true;
}

/* Здесь допустила глупую ошибку - считала true, если объект НЕ пуст и перебрала три разных решения, не понимая, почему они не работают. И даже когда увидела правильное решение, всё равно не сразу поняла почему наличие у объекта свойств это false

А вот вариант с оператором знак вопроса не сработал

(i > 0) ? false : true;
*/

// Решение 2

function isEmpty(obj) {

    for(var key in obj) {
        return false;
    }
    return true;
}

// Решение 3 (через полторы недели)

function isEmpty(obj) {
    return(Object.keys(obj).length > 0 ? false : true);
}



