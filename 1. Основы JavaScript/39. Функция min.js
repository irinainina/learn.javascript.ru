/*
Задание 39.
Функция min
важность: 1

Задача «Hello World» для функций :)

Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

http://learn.javascript.ru/task/min
*/


var a, b;
function min (a, b) {
    (a > b) ? alert(b) : alert(a);
}

min(2, 5); // 2
min(3, -1); //-1
min(1, 1); //1