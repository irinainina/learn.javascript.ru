/*
Задание 16.
Сумма свойств
важность: 5

Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

Если объект пустой, то результат должен быть 0.

Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650

P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.

https://learn.javascript.ru/task/sum-salaries
*/


    var summ = 0;
    for (var key in salaries) {
        summ += salaries[key];
    }
    summ;


// Решение 2 (через полторы недели)
// От предыдущего ничем не отличается кроме способа решения
// Код писался в консоли (без автоподсказок редактора) самостоятельно и легко

function sumSalaries(salaries) {
    var sum = 0;
    for(var key in salaries) {
        sum += salaries[key];

    } 
    return sum;
}

sumSalaries(salaries);