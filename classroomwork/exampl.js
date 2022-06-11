const addFieldO = (field) => {
    const totalSum = (items) => {
        return items.reduce((acc, values) => {
            return acc + values.value
        }, 0)
    }
    console.log(totalSum(dataData));

    const total = [...field].map((element) => {
        element['total'] = totalSum(items);
        return element;
    });
    return total;
};
console.log(addFieldO(dataData));


const addField = (field) => {
    const total = [...field].map((element) => {
        element['total'] = totalSum((items) => {
            return items.reduce((acc, values) => {
                return acc + values.value
            }, 0)
        });
        return element;
    });
    return total;
};
console.log(addField(dataData));


const arr1 = [
    { id: 1, name: "Alex", age: 10 },
    { id: 2, name: "Petr", age: 25 },
    { id: 3, name: "Alexandra", age: 29 },
    { id: 4, name: "Vahtang", age: 22 },
];
  
const arr2 = [
    {
      id: 1,
      pocket: 200,
    },
    {
      id: 2,
      pocket: 100,
    },
    {
      id: 3,
      pocket: 500,
    },
    {
      id: 4,
      pocket: 1000,
    },
];

const result = [
    { id: 1, name: "Alex", age: 10, pocket: 200 },
    { id: 2, name: "Petr", age: 25, pocket: 100 },
    { id: 3, name: "Alexandra", age: 29, pocket: 500 },
    { id: 4, name: "Vahtang", age: 22, pocket: 1000 },
];


const array = (users, pockets) =>{
    return users.map((element) =>{
        const foundPai = arr2.find(item => item.id === element.id)
        console.log(foundPai);
        return {
            ...element,
            pocket: foundPai.pocket
        }
    })
}

console.log(array(arr1, arr2));
