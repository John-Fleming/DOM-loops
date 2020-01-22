console.log('DOM loops');

const dinosaurs = [
    {type: 'T-rex', name: 'Wrex'},
    {type: 'Stegasaurus', name: 'Steve'},
    {type: 'Triceratops', name: 'Sara'}
];

//our function to print to the DOM
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const buildDinosaurCards = () => {
    let domString = '';
    for (i = 0; i < dinosaurs.length; i++) {
        domString += `<div class=dinosaur>`;
        domString +=    `<h3>${dinosaurs[i].type}</h3>`;
        domString +=    `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
    }
    // console.log('domString', domString);
    // const selectedDiv = document.getElementById('dino-barn'); // this part is unecessary in here because you'll use it repeatedly - can have it's own function
    // selectedDiv.innerHTML = domString;
    printToDom('dino-barn', domString);
};

// FYI for personal reference - the shorthand for looping through an array could also be written like this

// for (dino in dinosaurs) {
//     console.log(dinosaurs[dino].name);
// }

buildDinosaurCards();