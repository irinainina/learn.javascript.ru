/*
Задание 13.
if (строка с нулём)
важность: 5

Выведется ли alert?

if ("0") {
  alert( 'Привет' );
}

http://learn.javascript.ru/task/if-zero-string
*/

/*
Решение.

То, что выполнится, понятно: строка есть строка, что бы в ней не было записано (главное, чтобы было записано хоть что-то).
Нашла дополнение про лжные значения. Цитирую

Falsy (ложных? лживеньких?) значений ровно 7, их надо знать наизусть: 0, -0 (да, в программировании есть отрицательный ноль), NaN, null, undefined, '' (пустая строка), false. Все остальные значения truthy, в том числе '0' (строка из символа 0). При преобразовании в логический (булев) тип falsy значения преовращаются в false, а все остальные — в true:

console.log(0 ? "truthy" : "falsy"); // falsy
console.log('0' ? "truthy" : "falsy"); // truthy
console.log({} ? "truthy" : "falsy"); // truthy
console.log([] ? "truthy" : "falsy"); // truthy
console.log('' ? "truthy" : "falsy"); // falsy
if (1) { console.log('truthy'); } else { console.log('falsy'); } // truthy

Источник: https://gist.github.com/codedokode/ce30e7a036f18f416ae0
*/

if ("0") {
    alert( 'Привет' );
}
