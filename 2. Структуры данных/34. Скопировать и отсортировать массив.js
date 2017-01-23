/*
Задание 34.
Скопировать и отсортировать массив
важность: 5

Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.

Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];

// ... ваш код ...

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

Постарайтесь сделать код как можно короче.

https://learn.javascript.ru/task/copy-sort-array
*/

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice();

arrSorted.sort();

alert( arrSorted ); 
alert( arr );

// Самое простое задание. Пользоваться готовыми методами не в пример проще, чем придумывать свои

// Решение из учебника

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

alert( arrSorted );
alert( arr );