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

//
console.log(' ___ Task 1 ___');

const videos = [{
        id: 6532445,
        title: 'The Chambre'
    },
    {
        id: 675465,
        title: 'Fracture'
    },
    {
        id: 70111470,
        title: 'Die Hard'
    },
    {
        id: 654356453,
        title: 'Bad Boys'
    }
];


const myVideos = (function (videos) {
    return videos.forEach(item => {
        console.log(`${item.id} : ${item.title}`);
    });
})
/* const myVidos = (function(videos){
    return videos.reduce(function(accumulator, item){
        return accumulator.concat(item)
    },[]);
});*/
console.log(myVideos(videos));











async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("хреново!"), 1000)
    });
    let result = await promise;
    console.log(result);
}
f();

//
console.log(' ___ Task 3 ___');

const numbers = [1, 1, 2, 3];

const arrFun = numbers.reduce(function (acc, value) {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
}, {});
console.log(arrFun)