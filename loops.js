console.log('loops');

const colors = ['green', 'blue', 'black', 'white', 'red'];

const colorLoop = () => {
    let domString = '';
    for (let i = 0; i < colors.length; i++) {
        domString += `<h1>${colors[i]}</h1>`;
    }
    console.log(domString); // <h1>green</h1><h1>blue</h1><h1>black</h1><h1>white</h1><h1>red</h1>
};

colorLoop();


const instructors = [
    {first: 'luke', last: 'lancaster'},
    {first: 'mary', last: 'west'},
    {first: 'zoe', last: 'ames'},
];

const nameLoop = () => {
    let domString = '';
    for (let i = 0; i < instructors.length; i++) {
        domString += `<h2>${instructors[i].first} ${instructors[i].last}</h2>`;
    }
    console.log(domString); // <h2>john fleming</h2><h2>mary west</h2><h2>zoe ames</h2>
};


nameLoop();

