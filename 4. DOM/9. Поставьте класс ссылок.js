/*
Задание 9

Поставьте класс ссылкам
важность: 3

Сделайте желтыми внешние ссылки, добавив им класс external.

Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.

<style>
  .external {
    background-color: yellow
  }
</style>

<a name="list">список</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

https://learn.javascript.ru/task/set-class-links
*/

// Решение 

var a = document.querySelectorAll("a");
for (var i = 0, length = a.length; i < length; i++) {
    if(a.href != null || )
}


// Решение из учебника

       var links = document.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {

        var a = links[i];

        var href = a.getAttribute('href');

        if (!href) continue; // нет атрибута

        if (href.indexOf('://') == -1) continue; // без протокола

        if (href.indexOf('http://internal.com') === 0) continue; // внутренняя

        a.classList.add('external');
    }

    …Но, как это часто бывает, знание CSS может упростить задачу. Удобнее и эффективнее здесь – указать проверки для href прямо в CSS-селекторе:

    // ищем все ссылки, у которых в href есть протокол,
    // но адрес начинается не с http://internal.com
    var css = 'a[href*="://"]:not([href^="http://internal.com"])';
    var links = document.querySelectorAll(css);

    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('external');
    }