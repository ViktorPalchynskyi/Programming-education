// https://learn.javascript.ru/task/strange-instanceof
// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true
// потому что для фА и Фб прототип общий
// a.__proto__ == B.prototype, так что instanceof возвращает true.
