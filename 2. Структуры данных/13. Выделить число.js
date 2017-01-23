/*
Задание 13.
Выделить число
важность: 4

Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.

http://learn.javascript.ru/task/extract-currency
*/

function extractCurrencyValue(str) {
    str = +str.slice(1);
    return str;
}