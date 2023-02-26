# Project Name

'Monthly Salary Calcky'


[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Monthly Salary Calcky allows employers to provide employee information such as first and last name, employee ID number, job title, and annual salary to 
track if employee annual salaries exceed the $20,000 monthly budget. If the total monthly salaries exceeds the monthly budget, the total monthly will turn red 
to alert the employer. Also, employee information can be removed from the DOM however the total monthly cost will not update when this occurs because this project was built on base requirements.

To build Monthly Salary Calcky:

1. In a text editor like VSCode, create files such as index.html, client.js, jquery.js and stylesheet.css.
2. In the html head, create the boilerplate and source in the jquery file before the javascript file then source the css file.
3. In the body, create labels for the input fields inside <div>. Labels should be first name, last name, ID number, job title, and annual salary.
4. Include a submit button after the labels.
5. Create a table with headers of the input. This is where the input will display on the DOM.
6. Create another table to display the total monthly on the DOM.
7. In the javascript file, once the user clicks the submit button, the addSalary() will run and get the input values from the fields to store in variables,
then pushed in to the global form[]. If there are missing input values, then an alert will pop up. Then we call render(), resetInputFields(), and calculateMonthlyCosts().
8. render() will reset the table to empty and append a new table to the dom with the inputs. Each input will also have a 'delete' button that comes next to it.
9. resetInputFields() will clear the input fields after the user clicks submit.
10. calculateMonthlyCosts() will loop through form[] and find the sum of the annual salaries (annualSal) then divide it by 12 to get the monthly total.
The monthly total is appended to the dom and if the monthly total is greater than 20,000 then the table that displays the monthly total will turn red.
11. When a user clicks the delete button next to an employee, the deleteEmployee() will run. The employee being deleted is determined by creating a variable (employeeToDelete) and set the value to $(this).parent().siblings().first().text();. Then we'll loop through form[] and add any items (employees) that do not match employeeToDelete, replace the form[] with these employees and then call render to display the employees on the dom that should not be deleted. 


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
