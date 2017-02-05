/*
Задание 5

Выделите ячейки по диагонали
важность: 5

Напишите код, который выделит все ячейки в таблице по диагонали.

Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:

// в переменной td DOM-элемент для тега <td>
td.style.backgroundColor = 'red';

https://learn.javascript.ru/task/select-diagonal-cells
*/

// Решение

var table = document.body.children[0];

for(var i = 0; i < 5; i++) {
    table.rows[i].cells[i].style.backgroundColor  = "red";
}

// Решение из учебника

var table = document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

// Моё короче ) 
// Хоть i < table.rows.length; в условии выглядит лучше