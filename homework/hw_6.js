console.log('___ Task 1 ___ - подсчет количества пар перчаток');

const glovesColor = ['red', 'green', 'blue', 'red', 'black', 'blue', 'red', 'black'];
const glovesColorRed = ['red', 'red', 'red', 'red', 'red', 'red'];

const sumGloves = (items) => {
    const pairGloves = items.reduce((result, element) => {
        if (result[element]) {
            result[element] += 1;
        } else {
            result[element] = 1;
        };
        return result;
    }, {})

    console.log(pairGloves);

    const values = Object.values(pairGloves);

    return values.reduce((acc, currentValue) => {
        acc += Math.floor(currentValue / 2);
        return acc;
    }, 0)

}

console.log(sumGloves(glovesColor));
console.log(sumGloves(glovesColorRed));