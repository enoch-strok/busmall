'use strict';
console.log("proof of life again");
//Global Variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');
var picArray = [];
var picVote = document.getElementById('picVote');
var voteRounds = 25;

//Make a Constructor
function image (src, name) {
    this.src = `./img/${src}.jpg`;
    this.title = name;
    this.alt = name;
    this.viewed = 0;
    this.vote = 0;

    picArray.push(this);
}

//Hide Function
function hide (elem) {
    elem.style.display = 'none';
}


//Create Random Helper Function
function clickVote() {
    var select = event.target.title;
    for(var i = 0; i < picArray.length; i++) {
        if(select === picArray[i].title) {
            picArray[i].vote ++;
        }
    }
    generateImages();
    console.table(picArray);
    if( voteRounds === 0) {
        hide(picVote);
    }
    voteRounds --;
    console.log(voteRounds)
}
console.log("proof of life again444444");

// Random Number Function From MDN
function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {
    var indexOne = randomIndex(picArray.length);

    picOne.src = picArray[indexOne].src;
    picOne.title = picArray[indexOne].title;
    picOne.alt = picArray[indexOne].alt;
    picArray[indexOne].viewed ++;

    var indexTwo = randomIndex(picArray.length);
    while(indexTwo === indexOne){ 
        indexTwo = randomIndex(picArray.length);
    }

    picTwo.src = picArray[indexTwo].src;
    picTwo.title = picArray[indexTwo].title;
    picTwo.alt = picArray[indexTwo].alt;
    picArray[indexTwo].viewed ++;

    // picIndex.push(indexTwo);

    var indexThree = randomIndex(picArray.length);
    while(indexThree === indexTwo || indexThree === indexOne){ 
        indexThree = randomIndex(picArray.length);
    }

    picThree.src = picArray[indexThree].src;
    picThree.title = picArray[indexThree].title;
    picThree.alt = picArray[indexThree].alt;
    picArray[indexThree].viewed ++;
    console.log(indexOne, indexTwo, indexThree);
}

    // picIndex.push(indexOne, indexTrwo, indexThree);

    //Create Image On Page Function
    function createOnPage() {
        new image ('bag', 'Bag');
        new image ('banana', 'Banana');
        new image ('boots', 'Boots');
        new image ('bathroom', 'Bathroom');
        new image ('boots', 'Boots');
        new image ('breakfast', 'Breakfast');
        new image ('bubblegum', 'BubbleGum');
        new image ('chair', 'Chair');
        new image ('cthulhu', 'Cthulhu');
        new image ('dog-duck', 'Dog Duck');
        new image ('dragon', 'Dragon');
        new image ('pen', 'Pen');
        new image ('pet-sweep', 'Pet Sweep');
        new image ('scissors', 'Scissors');
        new image ('shark', 'Shark');
        new image ('sweep', 'Sweep');
        new image ('tauntaun', 'TaunTaun');
        new image ('unicorn', 'Unicorn');
        new image ('usb', 'USB');
        new image ('water-can', 'Water Can');
        new image ('wine-glass', 'Wine Glass');
        }

        createOnPage();
        generateImages();
        picVote.addEventListener('click', clickVote)

        // console.log(picIndex);
        console.table(picArray);
        // console.log(Math.random());

