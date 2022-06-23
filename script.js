// Write your JavaScript code here!

const { myFetch,
    addDestinationInfo,
    pickPlanet,
    formSubmission,
    validateInput } = require("./scriptHelper");

window.addEventListener("load", function () {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        let planet = pickPlanet(listedPlanets);

        addDestinationInfo(document,
            planet.name, planet.diameter,
            planet.star, planet.distance,
            planet.moons, planet.image);
    });


    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        console.log("Onsubmit");
        event.preventDefault();

        let pilotNameInput = document.querySelector("input[name=pilotName");
        let copilotNameInput = document.querySelector("input[name=copilotName");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel");
        let cargoMassInput = document.querySelector("input[name=cargoMass");

        let pilotName = pilotNameInput.value;
        let copilotName = copilotNameInput.value;
        let fuelLevel = fuelLevelInput.value;
        let cargoMass = cargoMassInput.value;

        if (pilotName === "" || copilotName === "" ||
            fuelLevel === "" || cargoMass === "") {
            alert("All fields are required!");
            return false;
        }

        if (validateInput(pilotName) !== "Not a Number" ||
            validateInput(copilotName) !== "Not a Number" ||
            validateInput(fuelLevel) !== "Is a Number" ||
            validateInput(cargoMass) !== "Is a Number") {

            alert("Make sure to enter valid information for each field!");
            return false;
        }

        formSubmission(document, listedPlanets,
            pilotName, copilotName,
            fuelLevel, cargoMass);
        return false;
    });
});