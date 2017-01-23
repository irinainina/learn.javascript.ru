/*
Задание 25.
Поиск в массиве
важность: 3

Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

Например:

arr = ["test", 2, 1.5, false];

find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2

find(arr, 0); // -1

https://learn.javascript.ru/task/array-find
*/

function find(arr, value) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
}

   