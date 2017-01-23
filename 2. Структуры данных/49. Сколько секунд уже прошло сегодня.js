/*
Задание 49.
Сколько секунд уже прошло сегодня?
важность: 5

Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

https://learn.javascript.ru/task/get-seconds-today
*/

// Моё решение (нерабочее)

function getSecondsToday() {
    var date = new Date();
    var date0 = new Date (year, month, date);
    return (+date - +date0);
}

getSecondsToday();

// Решение из учебника

function getSecondsToday() {
    var now = new Date();

    // создать объект из текущей даты, без часов-минут-секунд
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var diff = now - today; // разница в миллисекундах
    return Math.floor(diff / 1000); // перевести в секунды
}

