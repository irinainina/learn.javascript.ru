/*
Задание 14.
Проверка стандарта
важность: 2

Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».

Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».

http://learn.javascript.ru/task/check-standard

*/

        var name = prompt("Каково «официальное» название JavaScript?", "");
        if (name == "EcmaScript") {
            alert("Bерно");
        } else {
            alert("Не знаете? «EcmaScript»!");
        }
   