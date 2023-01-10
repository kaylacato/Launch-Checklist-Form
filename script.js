// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("#launchForm")
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotInput = document.getElementById("pilotName");
      let copilotInput = document.getElementById("copilotName");
      let fuelInput = document.getElementById("fuelLevel");
      let cargoInput = document.getElementById("cargoMass");
      let items = document.getElementById("itemStatus");
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         window.alert("All fields are required!");
      } else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value === false)){ 
         window.alert("Please enter a name.");
      } else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)) {
         window.alert ("Please enter a number.")
      } else {
         items.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilotInput.value} is ready for launch.`;
         if (fuelInput.value < 10000 || cargoInput.value > 10000){
            fuelStatus.innerHTML = "Not enough fuel for the journey.";
            cargoStatus.innerHTML = "Too much mass for the shuttle to take off.";
            launchStatus.innerHTML = "Shuttle is NOT ready for launch!";
            launchStatus.style.color = "red";
         }else{
            fuelStatus.innerHTML = "Fuel level check passed.";
            cargoStatus.innerHTML = "Cargo mass check passed.";
            launchStatus.innerHTML = "Shuttle is ready for launch!";
            launchStatus.style.color = "green";
         }
      }
      
   })
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/
// TODO 1: set up a window load handler
   // TODO 2: set up a submit handler for the form
      // TODO 3: cancel submission using events.preventsDefault()
// TODO 4: validate that all inputs have data in them
// TODO 5: check fuelLevel and cargoMass and report launch status
// TODO 6: make the list visible

// TODO 7: fetch planet data
   // TODO 8: randomly choose one of the planets
   // TODO 9: display info of chosen planet