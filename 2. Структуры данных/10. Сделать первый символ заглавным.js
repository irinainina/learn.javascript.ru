/*
Задание 10.
Сделать первый символ заглавным
важность: 5

Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:

ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке

P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().

http://learn.javascript.ru/task/ucfirst
*/

function ucFirst(str) {
    var firstSymbol = str.charAt(0).toUpperCase();
    str = firstSymbol + str.slice(1);
    return str;
}