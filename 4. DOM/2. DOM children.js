/*
Задание 2
    
DOM children
важность: 5

Для страницы:

<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <div>Пользователи:</div>
  <ul>
    <li>Маша</li>
    <li>Вовочка</li>
  </ul>

  <!-- комментарий -->

  <script>
    // ... ваш код
  </script>

</body>

</html>

1. Напишите код, который получит элемент HEAD.
2. Напишите код, который получит UL.
3. Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами LI?


https://learn.javascript.ru/task/dom-children
*/

//Решение
// 1. Напишите код, который получит элемент HEAD

document.documentElement.firstElementChild;

// 2. Напишите код, который получит UL

document.body.children[1];

// 3. Напишите код, который получит второй LI

document.body.children[1].children[1];

// Решение из учебника такое же, дополнение к 1 заданию
//  в современных браузерах доступен document.head.

















