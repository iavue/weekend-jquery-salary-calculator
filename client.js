$(document).ready(readyNow);

let form = []; // might change the name later

function readyNow() {
    console.log("DOM is loaded!");

    // Listener for submit button
    $('#submitBtn').on('click', addSalary)
}

function addSalary() {
    console.log('Inside of addSalary');
    
}