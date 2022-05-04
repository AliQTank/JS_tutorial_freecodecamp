let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
    count++;
    countEl.textContent = count
    console.log("The button was clicked");    
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr // changed for innerText to deploy the space 
    countEl.textContent = 0
    count = 0
    console.log(count);
}
