/*
Задание 31.
Функция removeClass
важность: 5

У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};

Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'

Лишних пробелов после функции образовываться не должно.

https://learn.javascript.ru/task/remove-class
*/

function removeClass(obj, cls) {
    var arr = obj.className.split(" ");
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == cls) {
            arr.splice(i, 1);
        }
        obj.className = arr;
    }
}

// Просто удивительно. Работает! Но дубликаты не удаляет

// Решение с учебника 

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1); // удалить класс
            i--; // (*)
        }
    }
    obj.className = classes.join(' ');

}

/*
Мои ошибки
1. не указала i--; нужное для того, чтобы следующая итерация цикла заново проверила элемент с номером i, который оказался на месте удалённого
2. не использовала .join(' '); в самом конце
*/

