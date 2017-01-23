/*
Задание 18.
Перепишите 'if..else' в '?'
важность: 5

Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости – оформляйте код в несколько строк.

var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

http://learn.javascript.ru/task/rewrite-if-else-question
*/

var login = prompt("Ваш логин?", "");

var message = (login == "Вася") ? "Привет" :
(login == "Директор") ? "Здравствуйте" :
(login == "") ? "Нет логина" : "";
alert( message );
