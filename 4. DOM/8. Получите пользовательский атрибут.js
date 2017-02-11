/*
Задание 8

Получите пользовательский атрибут
важность: 5

    Получите div в переменную.
    Получите значение атрибута "data-widget-name" в переменную.
    Выведите его.

Документ:

<body>
  <div id="widget" data-widget-name="menu">Выберите жанр</div>
</body>

https://learn.javascript.ru/task/get-user-attribute
*/

// Решение 

var div = document.body.firstElementChild;
var name = div.getAttribute("data-widget-name");
alert(name);


// Решение из учебника


var div = document.getElementById('widget');

var widgetName = div.getAttribute('data-widget-name');
// или так, кроме IE10-
var widgetName = div.dataset.widgetName;

alert( widgetName ); // "menu"

// Вот этот момент нужно запомнить, что widget-name (через дефис) превращается в widgetName