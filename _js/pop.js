/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


// globale declaraties:
var popElement = document.querySelector('#pop');
var aanknopElement = document.querySelector('#aan');
var uitknopElement = document.querySelector('#uit');
var jazzknopElement = document.querySelector('#jazz');
var bodyElement = document.querySelector('body');
var audioElement = document.querySelector(".playmusic");
//var audioJazzElement = document.querySelector(".playmusic2");

// eventHandlers:
function styleGenre( event ) {
    popElement.src = '_img/pop.png'; //altijd op pop.png
    audioElement.pause(); //altijd op pauze
    bodyElement.classList.forEach(function (value) { //vind alle stijlen
    console.log(value)
    bodyElement.classList.remove(value);//verwijder stijl
    });

    if (event.target.id == 'aan') {
        popElement.src = '_img/pop3.gif';
        bodyElement.classList.add('achtergrondMetal');
        audioElement.src = '_media/Paranoid.mp3';
        audioElement.play();
    } else if (event.target.id == 'jazz') {
        popElement.src = '_img/pop4.gif';
        bodyElement.classList.add('achtergrondJazz');
        audioElement.src = '_media/Take Five.mp3';
        audioElement.play();
    }
}
// Dit is mijn vorige code. Die deed het ook al maar is niet complex genoeg
/*function popDanst( event ) {
	console.log('aan');
    popElement.src = '_img/pop4.gif';
    bodyElement.classList.toggle('achtergrondMetal') ;
    audioElement.play();
}

function popStaat( event ) {
	console.log('uit');
    popElement.src = '_img/pop.png';
    audioElement.pause();
    audioJazzElement.pause();
    bodyElement.classList.remove('achtergrond');
}

function popDanstjazz( event ) {
	console.log('jazz');
    popElement.src = '_img/pop3.gif';
    bodyElement.classList.toggle('achtergrondJazz');
    audioJazzElement.play();
}*/

// eventListeners:
aanknopElement.addEventListener('click', styleGenre); //popDanst);
uitknopElement.addEventListener('click', styleGenre); //popStaat);
jazzknopElement.addEventListener('click', styleGenre); //popDanstjazz);

