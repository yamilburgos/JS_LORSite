// ==============================
//       Characters and places
// ==============================

const hobbits = [
    'Frodo Baggins',
    'Samwise "Sam" Gamgee',
    'Meriadoc "Merry" Brandybuck',
    'Peregrin "Pippin" Took'
];

const buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
];

const baddies = [
    'Sauron',
    'Saruman',
    'The Uruk-hai',
    'Orcs'
];

const lands = [
    'the-shire',
    'rivendell',
    'mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
    console.log('Trying to make middle earth.');

    let middleEarth = document.createElement('section');
    middleEarth.setAttribute('id', 'middle-earth');
    document.body.appendChild(middleEarth);

    for (let i = 0; i < lands.length; i++) {
        let place = document.createElement('article');
        place.setAttribute('id', lands[i]);
        middleEarth.appendChild(place);

        let nameOfLand = document.createElement('h1');
        nameOfLand.innerHTML = lands[i];
        place.appendChild(nameOfLand);
    }
}

function makeHobbits() {
    console.log('Make hobbits');

    let allTheHobbits = document.createElement('section');
    allTheHobbits.setAttribute('id', 'the-shire');   

    let shireRef = document.getElementById('the-shire');
    shireRef.appendChild(allTheHobbits);

    hobbits.sort();

    for (let i = 0; i < hobbits.length; i++) {
        let hobbit = document.createElement('article');
        hobbit.setAttribute('class', 'hobbit');  
        hobbit.setAttribute('id', hobbits[i]);
        allTheHobbits.appendChild(hobbit);

        let thisHobbit = document.createElement('h1');
        thisHobbit.innerHTML = hobbits[i];
        hobbit.appendChild(thisHobbit);
    }
}

function keepItSecretKeepItSafe() {
    console.log('Secret & Safe');

    let emptyDiv = document.createElement('div');
    emptyDiv.setAttribute('id', 'the-ring');
    emptyDiv.innerHTML = "The ring";

    let frodoRing = document.getElementsByClassName('hobbit')[0];
    frodoRing.appendChild(emptyDiv);
}

function makeBaddies() {
    console.log('Make baddies');

    let allTheBaddies = document.createElement('section');
    allTheBaddies.setAttribute('id', 'mordor');

    let mordorRef = document.getElementById('mordor');
    mordorRef.appendChild(allTheBaddies);

    for (let i = 0; i < baddies.length; i++) {
        let badGuy = document.createElement('article');
        badGuy.setAttribute('class', 'baddy'); 
        badGuy.setAttribute('id', baddies[i]);
        allTheBaddies.appendChild(badGuy);

        let thisBaddy = document.createElement('h1');
        thisBaddy.innerHTML = baddies[i];
        badGuy.appendChild(thisBaddy);
    }
}

function makeBuddies() {
    console.log('Make buddies');

    let allTheBuddies = document.createElement('aside');
    allTheBuddies.setAttribute('id', 'mordor');

    let mordorRef = document.getElementById('mordor');
    mordorRef.appendChild(allTheBuddies);

    for (let i = 0; i < buddies.length; i++) {
        let goodGuy = document.createElement('article');
        goodGuy.setAttribute('class', 'buddy');
        goodGuy.setAttribute('id', buddies[i]);
        allTheBuddies.appendChild(goodGuy);

        let thisBuddy = document.createElement('h1');
        thisBuddy.innerHTML = buddies[i];
        goodGuy.appendChild(thisBuddy);
    }
}

function leaveTheShire() {
    console.log('Leave shire');

    let leaveShire = document.querySelector('#the-shire section');   
    document.getElementById('rivendell').appendChild(leaveShire);
}

function beautifulStranger() {
    console.log('Beautiful stranger');

    for (let i = 0; i < buddies.length; i++) {
        if(buddies[i] === 'Strider') {        
            buddies[i] = buddies[i].replace('Strider', "Aragorn");
            let thisBuddy = document.getElementById('Strider');
            thisBuddy.childNodes[0].innerHTML = buddies[i];
        }
    }
}

function forgeTheFellowShip() {
    console.log('The fellowShip');

    let leaveMordor = document.querySelector('#mordor aside');
    leaveMordor.id = "moving";
    document.getElementById('rivendell').appendChild(leaveMordor);

    let fellowText = document.createElement('h1');
    fellowText.innerHTML = "The Fellowship";

    let theFellowShip = document.createElement('div');
    theFellowShip.setAttribute('id', 'the-fellowship');
    theFellowShip.appendChild(fellowText);

    document.getElementById('middle-earth').appendChild(theFellowShip);

    let hobbitGroup = document.querySelector('#rivendell section').getElementsByTagName('article');
    let buddiesGroup = document.querySelector('#rivendell aside').getElementsByTagName('article');

    for (let i = hobbitGroup.length - 1; i >= 0; i--) {
        alert(hobbitGroup[i].childNodes[0].innerHTML + " joined your Party!");
        document.getElementById('the-fellowship').appendChild(hobbitGroup[i]);
    }

    for (let i = buddiesGroup.length - 1; i >= 0; i--) {
        alert(buddiesGroup[i].childNodes[0].innerHTML + " joined your Party!");
        document.getElementById('the-fellowship').appendChild(buddiesGroup[i]);
    }    
}

function theBalrog() {
    console.log('The balrog');

    let theTeam = document.querySelector('#the-fellowship').getElementsByTagName('article');

    for (let i = 0; i < theTeam.length; i++) {
        if (theTeam[i].id === 'Gandalf the Grey') {
            theTeam[i].id = "Gandalf the White";
            theTeam[i].childNodes[0].innerHTML = "Gandalf the White";
            theTeam[i].className = "the-white";

            theTeam[i].style.background = 'white';
            theTeam[i].style.border = "thin solid grey";
        }
    }
}

function hornOfGondor() {
    console.log("Horn of gondor");

    alert("The horn of gondor has been blown!");
    alert("Oh no! Boromir has been killed by Uruk-hai!");

    let passedAway = document.getElementById('Boromir');
    passedAway = passedAway.style.textDecoration = "line-through";

    let allEnemies = document.querySelector('#mordor section');
    let thisEnemy = document.getElementById('The Uruk-hai');
    allEnemies.removeChild(thisEnemy);
}

function itsDangerousToGoAlone(){
    console.log("It's dangerous to go alone, take this!");

    let frodo = document.getElementById('Frodo Baggins');
    document.getElementById('mordor').appendChild(frodo);

    let sam = document.getElementById('Samwise "Sam" Gamgee');
    document.getElementById('mordor').appendChild(sam);

    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'mount-doom');
    newDiv.innerHTML = "Mount Doom";
    document.getElementById('mordor').appendChild(newDiv);
}

function weWantsIt() {
    console.log("Want it!");

    let gollum = document.createElement('div');
    gollum.innerHTML = "Gollum";
    gollum.setAttribute('id', 'gollum');
    document.getElementById('mordor').appendChild(gollum);

    let theRing = document.getElementById('the-ring');
    document.getElementById('gollum').appendChild(theRing);
    theRing.style.color = (theRing.parentNode === gollum) ? 'red' : 'black';
    document.getElementById('mount-doom').appendChild(gollum);
}

function thereAndBackAgain() {
    console.log("There and back");

    let mountDoom = document.querySelector('#mordor div');
    let lostRing = document.getElementById('gollum');
    mountDoom.removeChild(lostRing);

    let allEnemies = document.querySelector('#mordor section');

    while(allEnemies.firstChild) {
        allEnemies.removeChild(allEnemies.firstChild);
    }

    let allHobbits = document.querySelectorAll('.hobbit');

    for (let i = 0; i < allHobbits.length; i++) {
        document.getElementById('the-shire').appendChild(allHobbits[i]);
    }
}

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
    document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
    document.querySelector('#b2').addEventListener('click', makeHobbits);
    document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
    document.querySelector('#b4').addEventListener('click', makeBaddies);
    document.querySelector('#b5').addEventListener('click', makeBuddies);
    document.querySelector('#b6').addEventListener('click', leaveTheShire);
    document.querySelector('#b7').addEventListener('click', beautifulStranger);
    document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
    document.querySelector('#b9').addEventListener('click', theBalrog);
    document.querySelector('#b10').addEventListener('click', hornOfGondor);
    document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
    document.querySelector('#b12').addEventListener('click', weWantsIt);
    document.querySelector('#b13').addEventListener('click', thereAndBackAgain);
};