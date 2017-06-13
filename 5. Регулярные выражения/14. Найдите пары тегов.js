/* Задание 14
Найдите пары тегов

ББ-тег имеет вид [имя]...[/имя], где имя – слово, одно из: b, url, quote.

Например:

[b]текст[/b]
[url]http://ya.ru[/url]

ББ-теги могут быть вложенными, но сам в себя тег быть вложен не может, например:

Допустимо:
[url] [b]http://ya.ru[/b] [/url]
[quote] [b]текст[/b] [/quote]

Нельзя:
[b][b]текст[/b][/b]

Создайте регулярное выражение для поиска ББ-тегов и их содержимого.

Например:

var re = /* регулярка */

var str = "..[url]http://ya.ru[/url]..";
alert( str.match(re) ); // [url]http://ya.ru[/url]

Если теги вложены, то нужно искать самый внешний тег (при желании можно будет продолжить поиск в его содержимом):

var re = /* регулярка */

    var str = "..[url][b]http://ya.ru[/b][/url]..";
alert( str.match(re) ); // [url][b]http://ya.ru[/b][/url]

https://learn.javascript.ru/task/find-matching-bbtags
*//

// Решение

var str = "..[url][b]http://ya.ru[/b][/url]..";

var reg = /\[([b,url,quote])\].*?\[\/\1\]/g;

str.match(reg); // ["[b]http://ya.ru[/b]"]

// Решение из учебника

var re = /\[(b|url|quote)\][\s\S]*?\[\/\1\]/g;

var str1 = "..[url]http://ya.ru[/url]..";
var str2 = "..[url][b]http://ya.ru[/b][/url]..";

alert( str1.match(re) ); // [url]http://ya.ru[/url]
alert( str2.match(re) ); // [url][b]http://ya.ru[/b][/url]

// Отличие: у меня [b,url,quote] у автора b|url|quote
// При том что про альтернацию | расскажут только в следующей теме. А задача к этой. 

