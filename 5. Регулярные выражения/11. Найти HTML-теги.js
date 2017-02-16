/* Задание 11

Найти HTML-теги

Создайте регулярное выражение для поиска всех (открывающихся и закрывающихся) HTML-тегов вместе с атрибутами.

Пример использования:

var re = /* ваш регэксп */

var str = '<> <a href="/"> <input type="radio" checked> <b>';

alert( str.match(re) ); // '<a href="/">', '<input type="radio" checked>', '<b>'

В этой задаче можно считать, что тег начинается с <, заканчивается > и может содержать внутри любые символы, кроме < и >.

Но хотя бы один символ внутри тега должен быть: <> – не тег.

https://learn.javascript.ru/task/find-html-tags-greedy-lazy
*//

// Решение
    
var re = /<[^<,>]+>/g
var str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(re); // '<a href="/">', '<input type="radio" checked>', '<b>'

// Решение из учебника

var re = /<[^>]+>/g
var str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(re); // <a href="/">, <input type="radio" checked>, <b>

