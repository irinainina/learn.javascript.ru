/*
Задание 26.
Фильтр диапазона
важность: 3

Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

Пример работы:

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился

https://learn.javascript.ru/task/filter-range
*/

var filtered = [];

function filterRange(arr, a, b) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= a && arr[i] <= b) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}


// Проверка

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
filtered; // [5, 4, 3];


   