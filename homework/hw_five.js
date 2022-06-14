/* 
задание - переписать задачу которую делали 
в классе и что бы избавиться от цикла в цикле
*/

const arrays = async (array1, array2) => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

    try {
        const responseUsers = fetch(usersUrl).then(response => response.json());
        const responseTodos = fetch(todosUrl).then(response => response.json());

        const [user, todos] = await Promise.all([responseUsers, responseTodos]);

        const arraysAgregateTwo = todos.reduce((result, todo) => {
            if (!result[todo.userId]) {         //если аккумулятор не содержит в себе user.id (1,2,3,...)
                result[todo.userId] = [todo]; // то тогда я создаю в аккумуляторе единичку поля и присваиваю ей массив
            } else {                            // если аккумулятор содержит в себе user.id (1,2,3,...)
                result[todo.userId].push(todo)  // тогда добавляем объкут который состояит из user.id
            }
            return result;
        }, {})
        console.log(arraysAgregateTwo);


        return user.map((item) => {
            return {
                ...item,
                todos: arraysAgregateTwo[item.id]
            }
        })

    } catch (error) {

    }
}
arrays()