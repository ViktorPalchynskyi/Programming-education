Name: Artem

---

## _Control questions for today's lesson_:

1. Какие есть подходы исполнения программного кода? Распишите приемушества и недостатки каждого подхода.
2. Какие есть подходы к типизации кода? Распишите приемушества и недостатки каждого подхода.
3. Какие типы данных есть в JS?
4. Какие типы примитивов есть в JS?
5. Как храняться данные в памяти в каждом типе данных?
6. Чем процесс отличаеться от программы? программа - файлик с инструкциями
7. Что такое стек и куча? В чем отличие?

## _Answers_:

1. Компилируемый и интерпретируемый подходы.

В компилируемом подходе инструкции в исходном файле с кодом компилируются в машинный код(байт код). Именно этот файл запускается "виртуальной машинной"

В интерпретируемом подходе инструкции не преобразуются ни в какой новый вид, а исполняются с помощью специальной программы интерпретатора

Преимущества компилируемого подхода:

- Возможность обнаружить ошибки в коде на этапе компиляции
- Машинный код более прост, поэтому обычно у таких программ более высокая производительность

Недостатки компилируемого подхода:

- Сложно исправлять ошибки в коде. Приходиться заново перекомпилировать файл, а это может быть долго

Преимущества интерпретирумого подхода:

- Возможность быстро исправлять ошибки
- Нет необходимости проводить лишние манипуляции по компиляции кода

Недостатки интерпретирумого подхода:

- Более низкая производительность относительно компилируемого подхода

2. Типизация бывает строгая и нестрогая.

Преимущества строгой:

- меньше вероятность ошибки, так как "компилятор кода" проверяет код. Надежность короче
- Более точное понимание, как работает код. ТЫ всегда знаешь где какой тип данных
- улучшенная производительность, так как избегаются лишние преобразования типов

Преимущества нестрогой:

- более свободное и быстрое написание кода. Очень удобно если код небольшой, при масштабировании могут начать вылезать проблемы
- Меньше объем кода

3. Number, Bigint, Boolean, String, null, undefined, Object, Symbol

4. Number, Bigint, Boolean, String, null, undefined,Symbol

5. Бывают ссылочные типы данных и примитивные типы данных. Ссылочные типы данных доступны по идентификаторы(ссылке), по которой их можно вызвать. Их "контейнеры памяти" неопределенного размера.

6. Программа - это просто файлик с набором инструкций внутри. Процесс же - это временной отрезок, когда эта программа выполняется.

7. Стек - это хранение статических данных с заранее известным размеров(примитивные типы данных и ссылки). Стек используется для хранения данных, которые нужны во время выполнения инструкции. Он быстр и эффективен, но, к сожалению, имеет ограниченную емкость. Т.е стек используется для быстрого доступа к переменным. Куча же, наоборот, она менее эффективна и быстра как стек, но зато имеет намного больший объем памяти. В ней содержаться более сложные структуры данных(массивы, объекты и др.).