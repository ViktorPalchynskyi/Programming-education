*references*: [[JS Functions]], [[JS Engine]]
*related*: [[Лексическое Окружение(LexicalEnvironment)]], [[Контекст выполнения (execution context)]]
*tags*: #article #JS_functions 

*sources*: https://habr.com/ru/company/ruvds/blog/422089/

*why i read the article*: 

Как часть статьи об [[Контекст выполнения (execution context)|контексте выполнения]].

*questions i want to know answer for*:

*key ideas of the article*: 

Окружение переменных(VariableEnvironment) - это разновидность [[Лексическое Окружение(LexicalEnvironment)|лексического окружения]]. Разница заключается в том, что в обычном лексическом окружении происходит связывание функций и переменным объявленных при помощи ключевого слова `let` или `const`, а в окружении переменных хранится информация об связывании переменных объявленных при помощи ключевого слова `var`. 

Переменные, созданные при помощи `var` назначается значение `undefined`, в то время как `let` и `const` не инициализированы вовсе. По этой причине можно получить доступ к переменных объявленных через `var`, до их объявления, а при попытке получить доступ к `let` и `const` мы получим ошибку.  Данное явление называется [[Hoisting(Всплытие)|"всплытием" (Hoisting)]]  переменных.



