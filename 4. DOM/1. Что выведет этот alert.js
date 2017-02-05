/* Задание 1

Что выведет этот alert?
    важность: 5

Что выведет alert?

<html>

    <head>
    <script>
    alert( document.body ); // ?
    </script>
    </head>

    <body>
    Привет, мир!
    </body>

</html>

https://learn.javascript.ru/task/body-from-head
*/

/*
Решение

С решением я ошиблась. Действительно, скрипт срабатывает до того как загрузится html поэтому ответ - null

Но и если переместить его в конец скрипта, выведет он вовсе не "Привет, мир", а 
[object HTMLBodyElement]
*/