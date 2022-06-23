// Write your helper functions here!
require('isomorphic-fetch');

const EMPTY = "Empty";
const NOT_NUMBER = "Not a Number";
const NUMBER = "Is a Number";

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    let innerHTML = "";

    innerHTML += "<h2>Mission Destination</h2>";
    innerHTML += "<ol>";
    innerHTML += `<li>Name: ${name}</li>`;
    innerHTML += `<li>Diameter: ${diameter}</li>`;
    innerHTML += `<li>Star: ${star}</li>`;
    innerHTML += `<li>Distance from Earth: ${distance}</li>`;
    innerHTML += `<li>Number of Moons: ${moons}</li>`;
    innerHTML += "</ol>";
    innerHTML += `<img src="${imageUrl}">`;

    missionTarget.innerHTML = innerHTML;
}

function validateInput(testInput) {
    if (testInput === undefined || testInput === null || testInput === "") {
        return EMPTY;
    }

    if (isNaN(testInput)) {
        return NOT_NUMBER;
    } else {
        return NUMBER;
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("Form submission");
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
