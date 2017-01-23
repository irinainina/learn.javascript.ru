/*
Задание 45.
Имя дня недели
важность: 5

Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

Например:

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'

https://learn.javascript.ru/task/get-week-day
*/

// Решение

var date = new Date(2012, 0, 3);
function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            return 'вс';
            break;
        case 1:
            return 'пн';
            break;
        case 2:
            return 'вт';
            break;
        case 3:
            return 'ср';
            break;
        case 4:
            return 'чт';
            break;
        case 5:
            return 'пт';
            break;
        case 6:
            return 'сб';
            break;
        default:
            return 'Я таких значений не знаю';
    }
}
alert(getWeekDay(date));

// Решение из учебника значительно короче

var date = new Date(2014, 0, 3); // 3 января 2014
alert( date.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'