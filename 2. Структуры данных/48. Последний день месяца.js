/*
Задание 48.
Последний день месяца?
важность: 5

Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

Параметры:

    year – 4-значный год, например 2012.
    month – месяц от 0 до 11.

Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

https://learn.javascript.ru/task/last-day-of-month
*/

function getLastDayOfMonth(year, month) {
    var date = new Date (year, month, 0);
    return date.getDay();
}

alert( getLastDayOfMonth(2012, 0) ); 
