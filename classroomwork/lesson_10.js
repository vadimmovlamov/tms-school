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
            return argId1.map((elemId1) =>{
                
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

