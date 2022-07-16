const arrays = async (array1, array2) => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

    try {
        const responseUsers = await fetch(usersUrl);
        const responseTodos = await fetch(todosUrl);
        const dataUsers = await responseUsers.json();
        const dataTodos = await responseTodos.json();

        console.log(dataUsers, dataTodos);

        console.log('first exampl');
        const arraysAgregate = (argId1, argId2) => {
            return argId1.map((elemId1) => {

                const cancatArrays = argId2.filter(elemId2 => elemId2.userId === elemId1.id)
                // console.log(cancatArrays);
                return {
                    ...elemId1,
                    todos: cancatArrays
                }
            })
        }
        console.log(arraysAgregate(dataUsers, dataTodos));

    } catch (error) {

    }
}
arrays()

/* 
задание - переписать задачу которую делали 
в классе и что бы избавиться от цикла в цикле
*/

const arraysT = async (array1, array2) => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

    try {
        const responseUsers = fetch(usersUrl).then(response => response.json());
        const responseTodos = fetch(todosUrl).then(response => response.json());

        const [user, todos] = await Promise.all([responseUsers, responseTodos]);

        const arraysAgregateTwo = todos.reduce((result, todo) => {
            if (!result[todo.userId]) { //если аккумулятор не содержит в себе user.id (1,2,3,...)
                result[todo.userId] = [todo]; // то тогда я создаю в аккумуляторе единичку поля и присваиваю ей массив
            } else { // если аккумулятор содержит в себе user.id (1,2,3,...)
                result[todo.userId].push(todo) // тогда добавляем объкут который состояит из user.id
            }
            return result;
        }, {})
        // console.log(arraysAgregateTwo);


        return user.map((item) => {
            return {
                ...item,
                todos: arraysAgregateTwo[item.id] // если есть в item id 1 то вернет к объекту userId по 1
            }
        })

    } catch (error) {

    }
}
arraysT().then(console.log)