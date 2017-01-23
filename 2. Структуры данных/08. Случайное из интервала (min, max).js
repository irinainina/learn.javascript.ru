/*
Задание 8.
Случайное из интервала (min, max)
важность: 2

Напишите код для генерации случайного числа от min до max, не включая max.

http://learn.javascript.ru/task/random-min-max
*/

var min, max;

alert(Math.random() * (max-min) + min);