// Puts date and time at the top of the page
var todaysDate = new Date();
var currentDay = document.querySelector("#currentDay");
currentDay.innerText=(todaysDate);

// arrays and definitions/variables
var container=document.querySelector(".container");
// let workingHoursArr=["9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm"]
let workingHoursArr = [9,10,11,12,13,14,15,16,17]

// for loop that calls createRow function 9 times to fill the page with a row for every hour
for(i=0;i<workingHoursArr.length;i++){
  createRow();
}

// function that creates one of the rows for an hour of the workday
function createRow() {
  const row = document.createElement("div");
  container.appendChild(row);
  row.classList.add("row");

  const rowHour = document.createElement("div");
  row.appendChild(rowHour);
  rowHour.classList.add("hour"); 
  const iFromForLoop = "9";
  rowHour.innerText=(iFromForLoop + ":00");

  const textArea = document.createElement("div");
  row.appendChild(textArea);
  textArea.classList.add("textarea");
  textArea.innerText=("hey!");

  const saveBtn = document.createElement("div");
  row.appendChild(saveBtn);
  saveBtn.classList.add("saveBtn");
 saveBtn.innerText=("hey!");


  saveBtn.addEventListener("click", function (){
    
  }
  )};

console.log(todaysDate.getHours());

// This is random stuff I tried but does not work currently lol
var time = workingHoursArr[(todaysDate.getHours) - 8];
console.log(JSON.stringify(time));


// Interval that refreshes time elements every few minutes
setInterval(function () {
  var todaysDate = new Date();
  currentDay.innerText=(todaysDate);
  console.log("hey!");
  }, 60000);