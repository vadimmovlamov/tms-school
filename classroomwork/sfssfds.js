const addField = (field) => {
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
console.log(addField(dataData));


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