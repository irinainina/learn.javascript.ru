/*
Задание 5.
В какую переменную будет присвоено значение?
важность: 5

Каков будет результат выполнения этого кода?

var value = 0;

function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }

  alert( value );
}

f();

Изменится ли внешняя переменная value ?

P.S. Какими будут ответы, если из строки var value = false убрать var?

https://learn.javascript.ru/task/which-value-is-modified
*/

/*
Решение
Переменная объявлена внутри функции, значение берётся оттуда же. Разумеется, true.

Если переменную внутри функции не объявлять (убрать var), то функция найдёт объявление переменной во внешнем окружении, значение в внутреннем окружении, и опять выведет true, но при этом и значение внешней переменной value тоже изменится.
До вызова функции alert(value); выводит 0, после вызова - true
*/

