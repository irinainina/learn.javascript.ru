/* Задание 17
Найдите тег style

Напишите регулярное выражение, которое будет искать в тексте тег <style>. Подходят как обычный тег <style>, так и вариант с атрибутами <style type="...">.

Но регулярное выражение не должно находить <styler>!

Использование:

var re = ваш регэксп

alert( "<style> <styler> <style test>".match(re) ); // <style>, <style test>

https://learn.javascript.ru/task/match-exact-tag
*/

// Решение

var re = /<style( .*)?>/g

"<style> <styler> <style test>".match(re); // <style>, <style test>


