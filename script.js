let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("saveEl");

let count = 0; //initializing count

function incrementCount() {  
  count += 1;                  //incrementing value of count by 1 on each click.
  countEl.textContent = count; //reflecting the value of count on screen.
}

let countMemory = 'Previous reps: ';
let trimmedHistory = '';       // to store hiphen removed text

function save() {
  countMemory = countMemory+count+" - ";
  trimmedHistory = countMemory.substring(0, countMemory.length-2);  //to remove the excess hiphen
  saveEl.textContent = trimmedHistory;
  count = 0;                   //count reset
  countEl.textContent = count; //reflecting  value of count on screen
}