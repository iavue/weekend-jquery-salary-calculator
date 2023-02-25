$(document).ready(readyNow);

const monthlyBudget = 20000;
let form = []; // might change this variable later

// let monthlyTotal = annualSalTotal / 12;
// If monthlyTotal > monthlyBudget, make #totalyMonthly red background

function readyNow() {
    console.log("DOM is loaded!");

    // Listener for submit button
    $('#submitBtn').on('click', addSalary)
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
        alert("Inputs are invalid.")
    }
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
    $('#tableOfInputs').empty()

    $('#tableOfInputs').append(`
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID Number</th>
                <th>Job Title</th>
                <th>Annual Salary</th>
            </tr>
            `);

    for(let input of form){
        console.log('New input of the employee salary info:', input);
        $('#tableOfInputs').append(`
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

/* Using the stored information, calculate monthly costs and append this to 
the DOM. If the total monthly cost exceeds $20,000, add a red background 
color to the total monthly cost. 

- Target all of the annual salary properties from the form[], 
- add them together then divide by 12
- then append to #totalMonthly table
- If the total > 20000
- make #totalMonthly table in to a red background color

*/

function calcMonthlyCosts() {
    console.log('Inside calcMonthlyCosts()');
    
    // Create empty array to store the salaries
    let annualSalTotal = 0;
    // console.log('The salaries object before adding input:', salaries);
    // form.salary = $('#annualSalInput').val();
    // Get the input of salaries
    // const annualSalValue = form.annualSal
    for (let i = 0; i < form.length; i++) {
        annualSalTotal += form[i].annualSal;
        
        // salaries = $('#annualSalInput').val();
        console.log('The salaries added together:', annualSalTotal);
        }

    // Put the input salary in to the salaries array
    // salaries = annualSalValue
    // console.log('The salaries array after adding input:', salaries);

    // for (let {annualSal} of form) {
    //     console.log('annualSal property:', annualSal);
    //     let allSalaries = [];

    // }

    $('#totalMonthly').empty()

    $('#totalMonthly').append(`
            <tr>
                <td>Total Monthly:</t>
            </tr>
            `);
}
