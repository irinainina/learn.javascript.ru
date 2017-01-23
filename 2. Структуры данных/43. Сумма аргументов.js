/*
Задание 43.
Сумма аргументов
важность: 5

Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10

https://learn.javascript.ru/task/sum-arguments
*/

function sum() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// Достаточно простое задание

// Решение из учебника

function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

// Удивительно, но совпало один в один. Хотя я думала, что моё решение неоптимальное
