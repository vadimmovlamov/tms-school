// Что такое react? 
/* 
Реакт это библиотека, но в процессе разработки у нас появляется система которая схожа с фреймворками
Библиотека - набор готового функционала , который мы можем сразу использовать
Framework - набор каких-то систем  , которые тебе говорят что вот так нужно писать код а не иначе, т.к. не будет работать
*/

// Дерево проекта
/* 
node_modules / 
    - мы не трогаем и не заливаем на гит.
public /
    - содержит index.html в который мы ничего не пишем, он нужен для запуска только сайта
scripts / 

src / 
    App.css - 
    App.js - 
    App.test.js - 
    Index.css  - 
    Index.js - сердце нашего приложения. Файл который подтягивает файл App.js в котором мы пишем наш сайт

gitignore / 
    - содержит файлы которые мы не заливаем на гит
package.json / 
    dependencies - (пакеты, от которых ваш пакет зависит непосредственно: как правило — библиотеки) - мы видим какие сторонние зависимости и библиотеки мы испозьзуем в нашем проекте
    scripts - инструкция как нам пользоваться приложением (набор команд)
    devdependencies - (пакеты, которые нужны для разработки. Всякие галпы-гранты и плагины к ним обычно подпадают в эту категорию) - зависимости которые нужны тоолько на этапе разработки и не нужны для залития на гит
package-lock.json /  
    - здесь мы видим полную историю библиотек, зависимостей и их зависимостей. Это нужно для определения ошибок в использовании уже используемых библиотек
    - он комитится в гитрепозиторий
*/



// export - import
/* 
1 вариант) 
export const sum = (a, b) => {
    return a + b
}
console.log(sum())

если применяем этот вариант , то в том месте где мы хотим импортировать мы должны прописать следующее: import { sum } from './some.js (указываем путь)' 

этот вариант позволяет сделать много экспортов из файла, то есть мы в скобки добавляем { sum, power, ..., ... } 
или сделать таким образом: import * as functions from './some.js', где functions - имя
читается как импортируй все функции которые помечены export const ... из './some.js' в объект functions
__________________

2 вариант) 
const sum = (a, b) => {
    return a + b
}
console.log(sum())

export default sum;

если применяем этот вариант , то в том месте где мы хотим импортировать мы должны прописать следующее: import sum from './some.js (указываем путь)' 
этот вариант при импорте мы можем назвать как угодно, т.к. он импортирует только одну сузность (функцию и др), например import lol from - он все равно импортирует sum
*/


//props - то объект который принимает значения из атрибутов которые мы передаем

// <div className=''></div>  - className - привязываем стили , внутри '' мы указываем селектор в котором мы прописываем стили. Ссылка на файл где все стили хранятся мы импортируем. (например: import './user.css')