// Write your helper functions here!
require('isomorphic-fetch');


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
    const EMPTY = "Empty";
    const NOT_NUMBER = "Not a Number";
    const NUMBER = "Is a Number";

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
    const MIN_FUEL_LEVEL = 10000;
    const MAX_CARGO_LEVEL = 10000;
    console.log("Form submission");

    let readyForLaunch = true;

    let faultyItems = document.getElementById("faultyItems");
    
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
    if (fuelLevel < MIN_FUEL_LEVEL) {
        readyForLaunch = false;    
        fuelStatus.innerHTML = `Fuel level too low for launch`;
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
    }
    
    if (cargoLevel > MAX_CARGO_LEVEL) {
        readyForLaunch = false;    
        cargoStatus.innerHTML = `Cargo mass too high for launch`;
    } else {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }
    
    if (!readyForLaunch) {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle ready for launch";
        launchStatus.style.color = "green";
    }
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
