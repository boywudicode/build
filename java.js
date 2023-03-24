// function toggleBtn() {
    // let divEl = document.getElementById("box");
// if (divEl.style.display = "block") {
//     divEl.style.display = "none";
// } else if () {
//     divEl.style.display = "block"
// }

// }


function toggleClass() {
    let divEl = document.getElementById("box")
    divEl.classList.toggle("home")
}
// rthe switch mode function that toggles the style classes 
function switchMode(){
    let bodyEl = document.body;
    bodyEl.classList.toggle("light")
}
// Grab the switch button element from the html
let btnElem = document.getElementById("switchBtn");
btnElem.addEventListener("click", switchMode);

let overlayEl = document.getElementById("modal-overlay");


function showModal() {
    overlayEl.style.display = "block";
}

function closeModal() {
    overlayEl.style.display = "none";
}