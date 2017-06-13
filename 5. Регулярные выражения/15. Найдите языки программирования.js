/* Задание 15
Найдите языки программирования

Существует много языков программирования, например Java, JavaScript, PHP, C, C++.

Напишите регулярное выражение, которое найдёт их все в строке «Java JavaScript PHP C++ C»

https://learn.javascript.ru/task/find-programming-language
*/

// Решение

var str = "Java JavaScript PHP C++ C";

var reg = /Java|JavaScript|PHP|C|C\+\+/g;

str.match(reg); // ["Java", "Java", "PHP", "C", "C"]

// Решение из учебника
// Вариант 1

var str = "Java JavaScript PHP C++ C";

var reg = /JavaScript|Java|PHP|C\+\+|C/g;

str.match(reg); // ["Java", "JavaScript", "PHP", "C++", "C"]

// Вариант 2

var reg = /Java(Script)?|C(\+\+)?|PHP/g;

var str = "Java, JavaScript, PHP, C, C++";

str.match(reg); // ["Java", "JavaScript", "PHP", "C++", "C"]

