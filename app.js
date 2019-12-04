'use strict';

console.log("proof of life");

//Global Variables
var picOne = document.getElementById('picture1');
var picOne = document.getElementById('picture2');
var picOne = document.getElementById('picture3');
var picArray = [];
var picVote = document.getElementById('picVote');
var voteRounds = 25;

//Make a Constructor
function image (src, name) {
    this.src = '../img/${src}.jpg';
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

// Random Number Function From MDN
function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {
    var indexOne = randomIndex(picArray.legnth);

    picOne.src = picArray[indexOne].src;
    picOne.title = picArray[indexOne].title;
    picOne.alt = picArray[indexOne].alt;
    picArray[indexOne].viewed ++;

    var indexTwo = randomIndex(picArray.length);
    while(indexTwo === indexOne){ 
        indexTwo = randomIndex(picArray.length);
    }

    picTwo.src = picArray[IndexTwo].src;
    picTwo.title = picArray[IndexTwo].title;
    picTwo.alt = picArray[IndexTwo].alt;
    picArray[IndexTwo].viewed ++;

    // picIndex.push(indexTwo);

    var indexThree = randomIndex(picArray.length);
    while(indexThree === indexTwo || indexThree === indexOne){ 
        indexThree = randomIndex(picArray.length);
    }

    picThree.src = picArray[IndexThree].src;
    picThree.title = picArray[IndexThree].title;
    picThree.alt = picArray[IndexThree].alt;
    picArray[IndexThree].viewed ++;
    console.log(indexOne, indexTwo, indexThree);

    // picIndex.push(indexOne, indexTrwo, indexThree);

    //Create Image On Page Function
    function createOnPage() {
        new image ('bag', 'Bag');
        new image ('bag','bag');
        new image ('boots','boots');
        new image ('bathroom','bathroom');
        new image ('boots','boots');
        new image ('breakfast','breakfast');
        new image ('bubblegum','bubblegum');
        new image ('chair','chair');
        new image ('cthulhu','cthulhu');
        new image ('dog-duck','dog duck');
        new image ('dragon','dragon');
        new image ('pen','pen');
        new image ('pet-sweep','pet sweetp');
        new image ('scissors','scissors');
        new image ('shark','shark');
        new image ('sweep','sweep');
        new image ('tauntaun','tauntaun');
        new image ('unicorn','unicorn');
        new image ('usb','usb');
        new image ('water-can','water can');
        new image ('wine-glass','water can');
        new image ('wine-glass','wine glass');
        }

        createOnaPage();
        generateImages();
        picVote.addEventListener('click', clickvote)

        // console.log(picIndex);
        console.table(picArray);
        // console.log(Math.random());





}
