const array = [1, 3, 10, 2, 4];

const someFun = (numbers) => numbers.reduce((acc, element) => {
    if (element % 2 === 0) {
        acc.even += element
    } else {
        acc.odd += element
    }

    return acc;;

}, {
    even: 0,
    odd: 0
})

console.log(someFun([12, 3, 4, 5, 4]));


function Rabbit(name) {
    this.name = name;
}

let rabbit = new Rabbit("White Rabbit");

console.log(rabbit.constructor === Rabbit)

let rabbit2 = new rabbit.constructor("Black Rabbit");