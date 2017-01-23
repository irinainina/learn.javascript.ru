/*
Задание 42.
Проверка на аргумент-undefined
важность: 5

Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0

https://learn.javascript.ru/task/check-arguments-undefined
*/

// Моё решение. Работает! 

function f(x) {
    return(arguments.length > 0 ? 1 : 0);
}

f(undefined); // 1
f(); // 0

// Решение из учебника

function f(x) {
    alert( arguments.length ? 1 : 0 );
}

f(undefined);
f();

// Мне моё решение понятнее. Потому что отсутствие arguments.length для пустого arguments для меня не очевидно. Я бы сказала, что в таком случае arguments.length = 0;
