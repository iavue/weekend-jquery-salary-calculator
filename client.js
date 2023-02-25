$(document).ready(readyNow);

const monthlyBudget = 20000;
let form = []; // might change this variable later

function readyNow() {
    console.log("DOM is loaded!");

    // Listener for submit button
    $('#submitBtn').on('click', addSalary)

    // Listener for delete button
    $('#tableOfInputs').on('click', '#deleteBtn', deleteEmployee)
}


function addSalary() {
    console.log('Inside of addSalary');

    // Get input values and store in variables
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
    /* If input variables (from above) are truthy/valid, put them in 'newInputToAdd' object,
    and push the object to the global form[]. Else, pop up alert. */
    if (firstNameValue && lastNameValue &&
        idNumValue && jobTitleValue && annualSalValue) {
            
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

        // Render the DOM after new input is submitted
         // Re-render when a new input is submitted
        render();

         // Reset input fields after cicking submit
        resetInputFields();

        // Calculate Monthly Costs after clicking submit
        calcMonthlyCosts();
    } else {
        // Pop up alert that inputs are invalid if not all inputs are in
        alert("Inputs are invalid.")
    }
}

// Clear the input fields after clicking submit
function resetInputFields() {
    console.log('Inside of resetInputFields()');
    // Use .val to get the inputs and set inputs to empty
    $('#firstNameInput').val("");
    $('#lastNameInput').val("");
    $('#idNumInput').val("");
    $('#jobTitleInput').val("");
    $('#annualSalInput').val("");
}

// Update the DOM with the input values
function render() {
    // Reset the table where the inputs are/will be
    $('#tableOfInputs').empty()
    // Then add the table header back
    $('#tableOfInputs').append(`
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID Number</th>
                <th>Job Title</th>
                <th>Annual Salary</th>
            </tr>
            `);
    // And also add the new input(s) with a delete button using a loop
    for(let input of form){
        console.log('New input of the employee salary info:', input);
        $('#tableOfInputs').append(`
            <tr>
                <td>${input.firstName}</td>
                <td>${input.lastName}</td>
                <td>${input.idNum}</td>
                <td>${input.jobTitle}</td>
                <td>${input.annualSal}</td>
                <td><button id="deleteBtn">
                        Delete
                    </button></td>
            </tr>
        `);
    }
    
}

/* Using the stored information, calculate monthly costs and append this to 
the DOM. If the total monthly cost exceeds $20,000, add a red background 
color to the total monthly cost. 
To Do:
- Loop through form[] to add annual salary properties 
- Add them together then divide by 12
- Then append to #totalMonthly table
- If the totalMonthly > monthlyBudget, make #tableForTotalyMonthly table in to a red background color */

function calcMonthlyCosts() {
    console.log('Inside calcMonthlyCosts()');
    
    // Create variable set to 0 so we can calculate salaries in the loop
    let annualSalTotal = 0;
    
    // Loop through the form[] to add annualSal properties to annualSalTotal
    for (let i = 0; i < form.length; i++) {
        annualSalTotal += Number(form[i].annualSal);  // Convert string 'annualSal' to number so we can calculate.
    }
    
    console.log('The salaries added together:', annualSalTotal);

    // Calculate the monthly total by dividing the annualSalTotal by 12
    let monthlyTotal = annualSalTotal / 12;

    $('#totalMonthly').empty();
    $('#totalMonthly').append( monthlyTotal );

    // If monthlyTotal > monthlyBudget, make #tableForTotalyMonthly a red background
    if (monthlyTotal > monthlyBudget) {
        $('#tableForTotalMonthly').addClass("monthlyTable");
    }
}

function deleteEmployee() {
    console.log('Inside deleteEmployee()');
    // Create an empty array that will replace form[]
    let newForm = [];

    const employeeToDelete = $(this).parent().siblings().first().text();
    console.log('The employee input being deleted:', employeeToDelete);

    // Loop through form[] and add any items that do not match employeeToDelete
    for (const employee of form) {
        console.log('Checking if this employee should be deleted:', employee);
        if (employee.firstName !== employeeToDelete) {
            console.log('Employee input not going to be deleted and aded to newForm[]', employee);
            newForm.push(employee);
        }
    }
    // Replace form[] to newForm[] except for the employee that was deleted (using the firstName)
    form = newForm;

    // Call render
    render()
}