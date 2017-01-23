/*
Задание 18.
Умножьте численные свойства на 2
важность: 3

Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

https://learn.javascript.ru/task/multiply-numeric
*/

// Моё решение (неработающее)

function multiplyNumeric(obj) {
    for(var key in obj) {
        return 2* isNumeric(obj[key]);
    }
}

// Правильное решение

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

// Как-то с объектами всё очень печально

// Решение 2
// Через 10 дней

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for(var key in menu) {
        menu[key] *= 2;
    }
    if(isNaN(menu[key])){
        return;
    }
    return menu[key];
}

multiplyNumeric(menu);

// Да, оно всё ещё не работает.
// Но уже объекты не кажутся такими ужасными и непонятными как раньше