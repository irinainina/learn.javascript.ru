/*
Задание 17.
Свойство с наибольшим значением
важность: 5

Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».

Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// ... ваш код выведет "Петя"

https://learn.javascript.ru/task/max-salary
*/


var max = 0;
var maxName = "";
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
    }
}

alert( maxName || "нет сотрудников" );

// Решение 2 (через полторы недели)
// От предыдущего отличается мало. 
// Но решение было полностью самостоятельным и задача показалась несложной

function maxSalaries(salaries) {
    var max = 0;
    for(var key in salaries) {
        salaries[key] > max ? max = salaries[key] : max;
    } 
    return max;
}

maxSalaries(salaries);