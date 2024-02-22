// WEB COLORS START
//Global variable
let colors = await loadTextFile("web-colors.txt");

//HTML variables
let outputEl = document.getElementById("container");
// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

//Event listener on update button
document.getElementById("update-btn").addEventListener("click", btnClicked);
function btnClicked(){
  let colorsStr = document.getElementById("color-in").value;
  console.log(colorsStr);

  colors = colorsStr.split(" ");
}
// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starts-with") {
    displayStartLetter();
  } else if (selection === "includes") {
    displayIncludes();
  }
}

// MENU FUNCTIONS
// Display All Colors
function displayAll() {
  outputEl.innerHTML = "<h2>DISPLAY ALL COLORS</h2>"
  console.log("Display All Colors");
  for(let color of colors){
    outputEl.innerHTML += `<h4 style="color:${color}">${color}</h4>`;
  }

}

// Display all Colors with prompted Starting Letter
function displayStartLetter() {
  console.log("Colors that Start With...");
}

// Display all colors that include provided substring
function displayIncludes() {
  console.log("Colors that Include...");
}
