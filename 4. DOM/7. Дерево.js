/*
Задание 7

Дерево
важность: 5

Есть дерево из тегов <ul>/<li>.

Напишите код, который для каждого элемента <li> выведет:

1. Текст непосредственно в нём (без подразделов).
2. Количество вложенных в него элементов <li> – всех, с учётом вложенных.

https://learn.javascript.ru/task/tree-info
*/

// Решение (нерабочее)

var li = document.getElementsByTagName("li");

function alertLi() {
    for(i = 0; i < li.length; i++) {
        alert(li.firstChild + li.getElementsByTagName("*"))
    }
}

// Решение из учебника

var lis = document.getElementsByTagName('li');

for (i = 0; i < lis.length; i++) {
    // получить название из текстового узла
    var title = lis[i].firstChild.data;

    title = title.trim(); // убрать лишние пробелы с концов

    // получить количество детей
    var childCount = lis[i].getElementsByTagName('li').length;

    alert(title + ': ' + childCount);
}

// Отдалённое сходство есть. Мои ошибки
// 1. Не указан индекс li[i]
// 2. Не указана длинна li[i].getElementsByTagName('li').length
// 3. Ищутся все вложенные элементы ("*"), вместо вложенных ('li')
// 4. А вот что такое .data в .firstChild.data я даже не догадываюсь
// Потому что про то, что "Содержимое текстовых узлов доступно через свойство data" будет сказано в 7 главе, а эта задача к 5.
// 5. Про метод str.trim() удаляющий пробелы в учебнике речь не шла и не будет идти. Хоть он здесь не самый важный, конечно
// 6. Для цикла условие должно выглядеть так: for (var i = 0, length = li.length; i < length ; i++)
// Почему объясняют здесь: http://disq.us/p/1dpx6y3