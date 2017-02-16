/* Задание 12

Найдите цвет в формате #abc или #abcdef

Напишите регулярное выражение, которое находит цвет в формате #abc или #abcdef. То есть, символ #, после которого идут 3 или 6 шестнадцатиричных символа.

Пример использования:

var re = /* ваш регэксп */

var str = "color: #3f3; background-color: #AA00ef; and: #abcd";

alert( str.match(re) ); // #3f3 #AA0ef

P.S. Значения из любого другого количества букв, кроме 3 и 6, такие как #abcd, не должны подходить под регэксп.

https://learn.javascript.ru/task/find-webcolor-3-or-6
*//

// Решение

    var re = /#([a-z0-9]{3}){1,2}\b/gi

    var str = "color: #3f3; background-color: #AA00ef; and: #abcd";

str.match(re); // #3f3 #AA0ef

// Решение 2

var re = /#[a-z0-9]{3}([a-z0-9]{3})?\b/gi

var str = "color: #3f3; background-color: #AA00ef; and: #abcd";

str.match(re); // #3f3 #AA0ef