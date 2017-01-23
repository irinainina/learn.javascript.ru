/* 
Задание 3. Какой скрипт выполнится первым?
В примере ниже подключены два скрипта small.js и big.js.

    Если предположить, что small.js загружается гораздо быстрее, чем big.js – какой выполнится первым?
https://learn.javascript.ru/task/async-defer-first
*/
    <script src="big.js"></script>
    <script src="small.js"></script> // big.js - обычный порядок загрузки

    // А вот так?

    <script async src="big.js"></script>
    <script async src="small.js"></script> // small.js - асинхронная загрузка: первым загрузился, первым выполнился

    // А так?

    <script defer src="big.js"></script>
    <script defer src="small.js"></script> // big.js - не асинхронная загрузка, скрипты грузятся в обычном порядке, но при этом не тормозят загрузку остального кода страницы
    