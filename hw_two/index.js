//
console.log(' ___ Task 1 ___');

const videos = [
    {
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

const myVideos = (function(videos){
    return videos.forEach(item => {
        console.log(`${item.id} : ${item.title}`);
    });
})

console.log(myVideos(videos));

//
console.log(' ___ Task 2 ___');

const boxarts = [
    {
        with: 200,
        height: 200,
        url: 'http:URL-1'
    },
    {
        with: 150,
        height: 200,
        url: 'http:URL-2'
    },
    {
        with: 300,
        height: 200,
        url: 'http:URL-3'
    },
    {
        with: 425,
        height: 150,
        url: 'http:URL-4'
    },
];

const someFunction = (boxart) => {
    return boxarts.map(boxart => [boxartsItem.with] * [boxartsItem.height])
}


const number = '188';

const someFunc = (stringValue) => {
    const splitNum = stringValue.split("");
    console.log(splitNum);
    const sum = splitNum.reduce((result, elem) => {
        return result + Number(elem);
    }, 0);
    console.log(sum);

    if (sum > 9){
        return someFunc(sum.toString());
    } 
    return sum;

    console.log(sum);
}


console.log(someFunc(number));
