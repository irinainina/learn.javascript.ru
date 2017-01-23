/*
Задание 47.
День указанное количество дней назад
важность: 4

Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.

Например, для 2 января 2015:

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)

P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.

https://learn.javascript.ru/task/get-date-ago
*/

// Моё решение (предварительное)

function getDateAgo(date, days) {
    date.setDate(-days);
    return date;
}

// Решение из учебника(предварительное)

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

// Ок, ошибку поняла
// Клонируем текущую дату, чтобы она не изменилась
// К счастью, достаточно простого присвоения

function getDateAgo(date, days) {
    var date2 = new Date(date);
    date2.setDate(date2.getDate() - days); // Здесь также работает и выражение date.getDate() - days
    return date2.getDate();
}