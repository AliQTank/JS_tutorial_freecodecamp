
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
    count++;
    countEl.innerText = count
    console.log("The button was clicked");    
}


function save() {
    let countStr = count + " - "
    saveEl.innerText = countStr
    console.log(count);
}


