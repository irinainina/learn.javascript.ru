/*
Задание 16.
Проверка логина
важность: 3

Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».

http://learn.javascript.ru/task/check-login
*/
var login = prompt("Введите ваш логин", "");

    if (login == "Админ") {
        var password = prompt("Введите ваш пароль", "");
        
        if (password == "Чёрный Властелин") {
            alert("Добро пожаловать!");
        }
        else if (password == null)  {
            alert("Вход отменён");
        }
        else {
            alert("Пароль неверен");
        }
        
    } 
    else if (login == null) {
        alert("Вход отменён");
        }
    else {
        alert("Я вас не знаю");
    }

