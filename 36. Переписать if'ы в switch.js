/*
Задание 36.
Переписать if"ы в switch
важность: 4

Перепишите код с использованием одной конструкции switch:

var a = +prompt("a?", "");

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( "2,3" );
}

http://learn.javascript.ru/task/list-primes
*/

var a = +prompt("a?", "");

switch(a) {
    case 0:
        alert( 0 );
        break;
        
    case 1:
        alert( 1 );
        break;
        
    case 2:
    case 3:
        alert( "2,3" );
        break;    
}