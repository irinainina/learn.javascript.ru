/*
Задание 4

Вопрос по навигационным ссылкам
важность: 5

Если elem – это произвольный узел DOM…

1. Верно ли, что elem.lastChild.nextSibling всегда null?

2. Верно ли, что elem.children[0].previousSibling всегда null ?


https://learn.javascript.ru/task/body-from-head
*/

// Решение

// 1. Верно ли, что elem.lastChild.nextSibling всегда null?

// Да

// 2. Верно ли, что elem.children[0].previousSibling всегда null ?

// Нет, children покажет только элементы, previousSibling - все узлы, в т.ч и пробельные тоже

// Решение из учебника

// Оговорка: elem.lastChild.nextSibling или elem.children[0].previousSibling выдаст ошибку, если elem не имеет детей