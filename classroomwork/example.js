// const array = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// const expant = (function (array) {
//     var a = 1;
//     return array.reduce(function (accumulator, item) {
//         return accumulator.concat(item)
//     }, []);
// });
// console.log(expant(array));



var wizards = [{
    name: 'Harry Potter',
    house: 'Gryfindor'
},
{
    name: 'Cedric Diggory',
    house: 'Hufflepuff'
},
{
    name: 'Tonks',
    house: 'Hufflepuff'
},
{
    name: 'Ronald Weasley',
    house: 'Gryfindor'
},
{
    name: 'Hermione Granger',
    house: 'Gryfindor'
}
];

var points = {
HarryPotter: 500,
CedricDiggory: 750,
RonaldWeasley: 100,
HermioneGranger: 1270
};

var wizardsAsAnObject = wizards.reduce(function (obj, wizard) {

// Get the key for the points object by removing spaces from the wizard's name
var key = wizard.name.replace(' ', '');

// If the wizard has points, add them
// Otherwise, set them to 0
if (points[key]) {
    wizard.points = points[key];
} else {
    wizard.points = 0;
}

// Remove the name property
delete wizard.name;

// Add wizard data to the new object
obj[key] = wizard;

// Return the array
return obj;

}, {});

console.log(wizardsAsAnObject);








function Rabbit(name) {
    this.name = name;
}

let rabbit = new Rabbit("White Rabbit");

console.log(rabbit.constructor === Rabbit)

let rabbit2 = new rabbit.constructor("Black Rabbit");


