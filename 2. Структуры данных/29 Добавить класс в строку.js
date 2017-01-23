/*
Задание 29.
Добавить класс в строку
важность: 5

В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}

Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"

P.S. Ваша функция не должна добавлять лишних пробелов.

https://learn.javascript.ru/task/add-class
*/

var obj = {
    className: "open menu"
}

// Моё решение

function addClass(obj, cls) {
    var arr = obj.className.split(" ");
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == cls) {
            return
        }
        arr.push(cls);
        obj.className = arr.join(" ");
    }

}

addClass(obj, "new");
alert(obj.className);

// Решение из учебника

var obj = {
    className: "open menu"
}

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; // класс уже есть
    }

    classes.push(cls); // добавить

    obj.className = classes.join(' '); // и обновить свойство
}

addClass(obj, "new");
alert(obj.className);

// При всей их схожести, моё решение не работает

// Решение 2.
// Через 10 дней.
// Работает. Правда, проверка пишет, что код добавляет лишние пробелы
// Как исправить не знаю. Я и пробелы лишние не вижу, которые видит проверка. 
// Похоже, в консоли они не отображаются

function addClass(obj, cls) {
    if(obj.className) {
        var arr = obj.className.split(" ");
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] !== cls) {
                arr.push(cls);
            }
            return obj.className = arr.join(" ");
        }
        return;
    }
}