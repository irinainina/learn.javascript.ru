/*
Задание 23.
Создайте калькулятор для введённых значений
важность: 4

Напишите код, который:

    Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
    Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
    При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
    Выводит сумму всех значений массива

https://learn.javascript.ru/task/calculator-for-input
*/

var arr = [];
var a;

do {
    a = prompt("Введите, пожалуйста, любое число", "");
    arr.push(a);
}
while (a != undefined);

var sum = 0;
for(i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

alert("Сумма всех чисел: " + sum);

// Решение с учебника

var numbers = [];

while (true) {

    var value = prompt("Введите число", 0);

    if (value === "" || value === null || isNaN(value)) break;

    numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert( sum );

// Цикл do while здесь мне нравится больше, но, похоже, не все условия мною учтены