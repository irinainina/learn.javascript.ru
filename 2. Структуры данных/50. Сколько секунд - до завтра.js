/*
Задание 50.
Сколько секунд - до завтра?
важность: 5

Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600

P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

https://learn.javascript.ru/task/get-seconds-to-tomorrow
*/

// Вариация предыдущей задачи



function getSecondsToTomorrow() {
    var now = new Date();

    // создать объект из текущей даты, без часов-минут-секунд + 1 день
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    var diff = now - today; // разница в миллисекундах
    return -Math.floor(diff / 1000); // перевести в секунды и сменить знак
}

getSecondsToTomorrow();