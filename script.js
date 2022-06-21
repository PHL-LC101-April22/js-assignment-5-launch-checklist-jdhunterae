// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    console.log(form);

    form.addEventListener("submit", function (event) {
        let pilotNameInput = document.querySelector("input[name=pilotName");
        let copilotNameInput = document.querySelector("input[name=copilotName");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel");
        let cargoMassInput = document.querySelector("input[name=cargoMass");

        if (pilotNameInput.value === "" || copilotNameInput.value === "" || cargoMassInput.value === "" || fuelLevelInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
            // alert("pilotName: " + pilotNameInput.value + "\n" + "copilotName: " + copilotNameInput.value + "\n" + "fuelLevel: " + fuelLevelInput.value + "\n" + "cargoMass: " + cargoMassInput.value);
            return false;
        }
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});