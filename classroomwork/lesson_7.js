const number = '188';

const someFunc = (stringValue) => {
    const splitNum = stringValue.split("");
    console.log(splitNum);
    const sum = splitNum.reduce((result, elem) => {
        return result + Number(elem);
    }, 0);
    console.log(sum);

    if (sum > 9) { // 9 - последнее однозначное число
        return someFunc(sum.toString());
    }
    return sum;

    console.log(sum);

    const ratingTop = () => {
        const result = [];

        newReleases.forEach(({
            id,
            rating
        }) => { // выбираем по заданию только id and rating и деструктурируем
            if (rating[0] === 5) { // [0] потому что нужен первый элемент массива, т.к. в поле rating  всегда один элемент
                return result.push(id)
            }
        })
        return result;
    }
}

console.log(someFunc(number));