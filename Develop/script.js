// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

// const employeeData = [
//   {
//       firstName:'What is yopur first name?',
//       lastName:'What is your last name?',
//       salary:'How much do you make?'
//   },
// ]

firstName=''
lastName=''
salary=''


//stored empty array to laster hold promp inputs
const employeesArray = []

const collectEmployees = function() {
  let continueAdd = true
  const firstName= prompt('What is your first name?')
  const lastName=prompt('What is your last name?')
  const salary= prompt('What is your salary?')
  employeesArray.push( { firstName: firstName, lastName: lastName, salary: salary } )
  continueAdd = confirm("Add another employee?")
  if (continueAdd) {
    collectEmployees()
  } else{
    return employeesArray
  }
  
  // console.log(firstName+lastName)
}




// create an empty array to hold all the employee data
// ask the user first name, last name, and salary. will be prompt staements, make an object of those results

//create an object w/ info in it, add obj to array
//ask if they're done

//return final array
 


//crate a loop throught the area to grab the salary
//start with a varaibale that =0
//make sure it's converted wfrom a sting value to a number

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  for(let i=0; i<collectEmployees.length, i++;);

}


function genRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const idx = genRandomNumber(0, employeesArray.length - 1);



  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
