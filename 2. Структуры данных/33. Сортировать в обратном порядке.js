/*
Задание 33.
Сортировать в обратном порядке
важность: 5

Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];

// отсортируйте?

alert( arr ); // 8, 5, 2, 1, -10

https://learn.javascript.ru/task/sort-back
*/

// Решение №1. Здесь я не поняла условие. А может оно так было сформулировано. Массив сортируется в обратном порядке.

var arr = [5, 2, 1, -10, 8];
arr.reverse();

alert( arr );

// Решение №2. Здесь всё верно и в обратном порядке сортируются числа из массива

function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}

var arr = [5, 2, 1, -10, 8];

arr.sort(compareNumeric);

alert(arr); 

// Решение из учебника.

var arr = [5, 2, 1, -10, 8];

function compareReversed(a, b) {
    return b - a;
}

arr.sort(compareReversed);

alert( arr );