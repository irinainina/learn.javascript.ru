/*
Задание 22.
Получить случайное значение из массива
важность: 3

Напишите код для вывода alert случайного значения из массива:

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

P.S. Код для генерации случайного целого от min to max включительно:

var rand = min + Math.floor(Math.random() * (max + 1 - min));

https://learn.javascript.ru/task/random-from-array
*/

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min = 0;
var max = arr.length - 1;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
alert(arr[rand]);

// Ок. Даже если решение неоптимальное, оно работает
