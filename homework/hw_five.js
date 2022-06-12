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
            if (!result[todo.userId]) {
                result[todo.userId] = [todo];
            } else {
                result[todo.userId].push(todo)
            }
            return result;
        }, {})
        console.log(arraysAgregateTwo);


        return user.map((item) => {
            return {
                ...item,
                todos: arraysAgregateTwo[userId]
            }
        })


    } catch (error) {

    }
}
arrays()