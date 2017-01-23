/*
Задание 30.
Перевести текст вида border-left-width в borderLeftWidth
важность: 3

Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.

https://learn.javascript.ru/task/camelcase
*/

// Моё решение(нерабочее)

function camelize(str) {
    var arr = str.split("-");
    for(var i=0; i < arr.length; i++) {
        arr[i] = arr[i].charAt[0].toUpperCase() + arr[i].slice(1);
    }
    str = arr.join("");
}

// Решение из учебника

function camelize(str) {
    var arr = str.split("-");

    for (var i = 1; i < arr.length; i++) {
        // преобразовать: первый символ с большой буквы
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join("");
}

/* Мои ошибки
1. for(var i=0;... должно быть for(var i=1; (по условию первый символ не меняется)
2. charAt[0] должно быть charAt(0)
3. str = arr.join(""); должно быть return arr.join("");
*/

