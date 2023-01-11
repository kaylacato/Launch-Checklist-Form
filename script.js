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
         if (fuelInput.value < 10000 && cargoInput.value <= 10000){
            fuelStatus.innerHTML = "Not enough fuel for the journey.";
            cargoStatus.innerHTML = "Cargo mass check passed.";
            launchStatus.innerHTML = "Shuttle is NOT ready for launch!";
            launchStatus.style.color = "red";
         }else if(fuelInput.value >= 10000 && cargoInput.value > 10000){
            fuelStatus.innerHTML = "Fuel level check passed."
            cargoStatus.innerHTML = "Too much mass for the shuttle to take off.";
            launchStatus.innerHTML = "Shuttle is NOT ready for launch!";
            launchStatus.style.color = "red";
         }else{
            fuelStatus.innerHTML = "Fuel level check passed.";
            cargoInput.innerHTML = "Cargo mass check passed.";
            launchStatus.innerHTML = "Shuttle is ready for launch!";
            launchStatus.style.color = "green";
         }
      }
   })
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const target = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*7);
            target.innerHTML +=
            `
                <h2> Mission Destination</h2>
                   <ul>
                     <li>Name: ${json[index].name}</li>
                     <li>Diameter: ${json[index].diameter}</li>
                     <li>Star: ${json[index].star}</li>
                     <li>Distance from Earth: ${json[index].distance}</li>
                     <li>Number of Moons: ${json[index].moons}</li>
                  </ul>
                  <img src = "${json[index].image}">
            `
      })
   })
})