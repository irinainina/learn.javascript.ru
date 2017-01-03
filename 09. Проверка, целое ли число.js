/*
Задание 9
Проверка, целое ли число
важность: 3

Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

Например:

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false

http://learn.javascript.ru/task/check-integer
*/



/* Решение

true это 1, false - 0.
Т.е. функция должна возвращать 1 для целых чисел и 0 для чисел с дробной частью - не получилось, пришлось делать через цикл

Округлить число до целого позволит двойное "не"
alert( ~~12.345 ); // 12

Подойдёт и Исключающее ИЛИ (^) с нулём:

alert( 12.345 ^ 0 ); // 12

Если результат точно равен исходному числу, оно было целое - true 
Если не точно равен, исходное число было дробным - false

*/

var number = prompt("Введите целое число", "");
var numberWhole = number ^ 0;
if (number == numberWhole) {
    alert(true);
}
else {
    alert(false);
}




