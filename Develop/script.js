// Puts date and time at the top of the page
var todaysDate = moment().format('YYYY-MM-DD');
var currentHour = moment().format("H")
var currentDay = document.querySelector("#currentDay");
currentDay.innerText = (todaysDate);

// arrays and definitions/variables
var container = document.querySelector(".container");
let workingHoursArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]


// for loop that calls createRow function 9 times to fill the page with a row for every hour
for (i = 0; i < workingHoursArr.length; i++) {
  createRow(workingHoursArr[i]);


  // function that creates one of the rows for an hour of the workday
  function createRow(time) {

    let storageTime = localStorage.getItem(time) || ""

    const row = document.createElement("div");
    container.appendChild(row);
    row.classList.add("row")
    row.classList.add("time-block");

    const rowHour = document.createElement("div");
    row.appendChild(rowHour);
    rowHour.classList.add("hour");
    const iFromForLoop = time;
    if (iFromForLoop < 10) {
      rowHour.innerText = ("0" + iFromForLoop + ":00")
    }
    else
    rowHour.innerText = (iFromForLoop + ":00");

    const textArea = document.createElement("textarea");
    row.appendChild(textArea);
    textArea.classList.add("textarea");
    textArea.innerText = storageTime;

    const saveBtn = document.createElement("div");
    row.appendChild(saveBtn);
    saveBtn.classList.add("saveBtn");
    saveBtn.innerText = ("SAVE  ");

    if (currentHour > workingHoursArr[i]) {
      textArea.classList.add("past")
    }
    else if (currentHour == workingHoursArr[i]) {
      textArea.classList.add("present")
    }
    else {
      textArea.classList.add("future")
    };

        saveBtn.addEventListener("click", function (event) {
          localStorage.setItem(time,event.target.previousElementSibling.value)
        }
        )
  };
};

console.log(moment().toDate())

// Interval that refreshes time elements every few minutes
setInterval(function () {
  document.location.reload();
}, 300000);