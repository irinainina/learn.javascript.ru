/*
Задание 12.
Строковый буфер с очисткой
важность: 5

Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:

function makeBuffer() {
    ...ваш код...
}

    var buffer = makeBuffer();

    buffer("Тест");
    buffer(" тебя не съест ");
    alert( buffer() ); // Тест тебя не съест

    buffer.clear();

    alert( buffer() ); // ""
    
https://learn.javascript.ru/task/stringbuffer-with-clear
*/

// Вот такое решение. Неработающее, разумеется

function makeBuffer() {
    var text = "";

    return function(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;

        return function clear() {
            text = "";
        }
    };
};

var buffer = makeBuffer();

// Попытка №2

function makeBuffer(clear) {
    var text = "";

    return function(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        
        else if(clear !== undefined) {
            return text;
        }
        
        text += piece;

    };
};

var buffer = makeBuffer();
buffer(clear);

alert( buffer(clear) );

/*
Две проблемы. Во-первых, clear вызывается в качестве аргумента, во-вторых, код не работает и возвращает undefined вместо строки
*/

// Попытка №3. последння

function makeBuffer() {
    var text = "";

    return {
        function(piece) {
            if (arguments.length == 0) { // вызов без аргументов
                return text;
            }
            text += piece;
        },

        clear: function () {
            text = "";
        }
    };
};

var buffer = makeBuffer();
buffer.clear();

alert( buffer.clear() ); 

// Результат undefined

// Решение из учебника

function makeBuffer() {
    var text = '';

    function buffer(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };

    buffer.clear = function() {
        text = "";
    }

    return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""

// Даже не знаю что здесь сказать. Разве что так "А что, так тоже можно было?"