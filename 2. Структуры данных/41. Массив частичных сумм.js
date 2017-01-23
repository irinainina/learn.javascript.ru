/*
Задание 41.
Массив частичных сумм
важность: 2

На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

То есть:

для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

    Функция не должна модифицировать входной массив.
    В решении используйте метод arr.reduce.

https://learn.javascript.ru/task/partial-sums-array
*/

// Моё решение (нерабочее)

var arr = [1, 2, 3, 4, 5]
function getSums(arr) {
    var arr2 = [];
    arr.reduce(function(sum, current) {
        return sum + current;
        arr2.push(sum);
    }, 0);
    return arr2;
}

// Решение из учебника
// Неправильный вариант может выглядеть так:

function getSums(arr) {
    var result = [];
    if (!arr.length) return result;

    arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });

    return result;
}

getSums([1,2,3,4,5]); // результат: 1,3,6,10

// Заметили, в чём ошибка?

// В получившемся массиве всего четыре элемента, отсутствует последняя сумма.

// Это из-за того, что последняя сумма является результатом метода reduce, он на ней заканчивает проход и далее функцию не вызывает, поэтому она оказывается не добавленной в result.

// Исправим это:

function getSums(arr) {
    var result = [];
    if (!arr.length) return result;

    var totalSum = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}

alert(getSums([1,2,3,4,5])); // 1,3,6,10,15
alert(getSums([-2,-1,0,1])); // -2,-3,-3,-2