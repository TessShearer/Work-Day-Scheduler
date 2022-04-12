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
  const timeBlock = document.createElement("div");
  container.appendChild(timeBlock);
  timeBlock.classList.add("time-block");
  const timeBlockBeg = document.createElement("div");
  timeBlock.appendChild(timeBlockBeg);
  timeBlockBeg.classList.add("hour");
  // const  = document.createElement("div");
  // timeBlock.appendChild();
  // .classList.add();
  const saveBtn = document.createElement("div");
  timeBlock.appendChild(saveBtn);
  saveBtn.classList.add("saveBtn");

  // captures current time and puts it at the beginning of the row
  const iFromForLoop = "9";
  timeRowBeg.innerText=(iFromForLoop + ":00");
  // maybe try 

  timeRowEnd.addEventListener("click", function (){
    
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