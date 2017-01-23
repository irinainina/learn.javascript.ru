/*
Задание 11.
Проверьте спам
важность: 5

Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

http://learn.javascript.ru/task/check-spam
*/

function checkSpam(str) {
    str = str.toLowerCase();
    if (~str.indexOf("viagra") || ~str.indexOf("xxx")) {
        return true;
    }
    return false;
} 

