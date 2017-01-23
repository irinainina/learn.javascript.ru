/*
Задание 51.
Вывести дату в формате дд.мм.гг
важность: 3

Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

Например:

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'

P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.

https://learn.javascript.ru/task/format-date-ddmmyy 
*/

// Моё решение (нерабочее)

function formatDate(date) {
    var date = new Date(2014, 0, 30);

    var formatter = new Intl.DateTimeFormat("ru", {
        
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

alert( formatter.format(date) ); // 31 декабря 2014 г.

// Решение из учебника

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

var d = new Date(2014, 0, 30); // 30 Янв 2014
alert( formatDate(d) ); // '30.01.14'
