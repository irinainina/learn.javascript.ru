/*
Задание 35.
Напишите "if", аналогичный "switch"
важность: 5

Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case "IE":
    alert( "О, да у вас IE!" );
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert( "Да, и эти браузеры мы поддерживаем" );
    break;

  default:
    alert( "Мы надеемся, что и в вашем браузере все ок!" );
}

http://learn.javascript.ru/task/rewrite-switch-if-else
*/

var browser = prompt("Какой у вас браузер?", "");
if(browser == "IE") {
    alert( "О, да у вас IE!" );
}
else if (browser == ("IE" || "Chrome" || "Firefox" || "Safari" || "Opera")) {
    alert( "Да, и эти браузеры мы поддерживаем" );
} // Внимание! Здесь круглые скобки обязательны, потому что приоритет == (10) выше, чем || (5)
else {
    alert( "Мы надеемся, что и в вашем браузере все ок!" );
}