$(document).ready(readyNow);

let form = []; // might change the name later

function readyNow() {
    console.log("DOM is loaded!");

    // Listener for submit button
    $('#submitBtn').on('click', addSalary)
}

function addSalary() {
    console.log('Inside of addSalary');
    console.log('Form[] before input is added:', form);

    // Get input values
    const firstNameValue = $('#firstNameInput').val();
    const lastNameValue = $('#lastNameInput').val();
    const idNumValue = $('#idNumInput').val();
    const jobTitleValue = $('#jobTitleInput').val();
    const annualSalValue = $('#annualSalInput').val();
    console.log(`
        First Name: ${firstNameInput}
        Last Name: ${lastNameInput}
        ID Number: ${idNumInput}
        Job Title: ${jobTitleInput}
        Annual Salary: ${annualSalInput}
        `);
    
    const newInputToAdd = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        idNum: idNumValue,
        jobTitle: jobTitleValue,
        annualSal: annualSalValue
    }
    
    // add object (newInputToAdd) to form[]
    form.push(newInputToAdd);
    console.log('Form[] after new input added:', form);

    // Render the DOM after new input is added
        // Re-render when new car is added
    render();

    // Reset input fields
    resetInputFields();
}

function resetInputFields() {
    console.log('Inside of resetInputFields()');
    $('#firstNameInput').val("");
    $('#lastNameInput').val("");
    $('#idNumInput').val("");
    $('#jobTitleInput').val("");
    $('#annualSalInput').val("");
}

function render() {
    // Update the DOM with the input values
    // Reset the table where the inputs are/will be
    $('#employeeInfo').empty()

    for(let input of form){
        console.log('New input of the employee salary info:', input);
        $('#salaryTable').append(`
            <tr>
                <td>${input.firstName}</td>
                <td>${input.lastName}</td>
                <td>${input.idNum}</td>
                <td>${input.jobTitle}</td>
                <td>${input.annualSal}</td>
                <td><button class="deleteBtn">
                        Delete
                    </button></td>
            </tr>
        `);
    }
}