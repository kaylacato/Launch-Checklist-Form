// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("#launchForm")
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotInput = document.getElementById("pilotName");
      let copilotInput = document.getElementById("copilotName");
      let fuelInput = document.getElementById("fuelLevel");
      let cargoInput = document.getElementById("cargoMass");
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
      } if (typeof pilotInput.value === "number" || typeof copilotInput.value === "number" || typeof fuelInput.value !== "number" || typeof cargoInput.value !== "number") {
            alert("Invalid input!");
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