console.log('tis working');

// global variables
var employees = [];
var totalSalary = 0;
var monthlyCost = 0;

var addEmployee = function() {
  console.log('in addEmployee');

//connect with HTML
  var firstName = document.getElementById('firstNameIn').value;
  var lastName = document.getElementById('lastNameIn').value;
  var idNumber = document.getElementById('idNumberIn').value;
  var jobTitle = document.getElementById('jobTitleIn').value;
  var annualSalary = document.getElementById('annualSalaryIn').value;

  //create employee object
  var newEmpEntry = {
    firstName: firstName,
    lastName: lastName,
    idNumber: idNumber,
    jobTitle: jobTitle,
    annualSalary: annualSalary,
  }; // end newEmpEntry

  //alert user of blanks (use this if using <button> in html)
  if(newEmpEntry.firstName === '' || newEmpEntry.lastName === '' || newEmpEntry.idNumber === '' || newEmpEntry.jobTitle === '' || newEmpEntry.annualSalary === '') {
    alert('Please fill in all required fields');
  }
  else {
    //call clearInputs
    clearInputs();
    //push newEmpEntry into the  array
    employees.push(newEmpEntry);
    //call displayEmployees
    displayEmployees();
  }// end of error alert
};

//   //push newEmpEntry to employees array (use this if using <form> in html)
//   employees.push(newEmpEntry);
// }; // end of newEmpEntry

var clearInputs = function() {
  console.log('in clearInputs');
  document.getElementById('firstNameIn').value = '';
  document.getElementById('lastNameIn').value = '';
  document.getElementById('idNumberIn').value = '';
  document.getElementById('jobTitleIn').value = '';
  document.getElementById('annualSalaryIn').value = '';
};

var displayEmployees = function() {
  totalSalary = 0;
  monthlyCost = 0;
  console.log('in displayEmployees');
  console.log(employees);
  // empty our list so we don't repeatedly add already added employees
  document.getElementById('allEmployees').innerHTML='';
  // for each employee, add a list item with all pieces
  for (var i = 0; i < employees.length; i++) {
    // employee information
    var employeeInfo = '<h3>Name: ' + employees[i].firstName + ' ' + employees[i].lastName + '<br>' +
      'Employee ID #: ' + employees[i].idNumber + '<br>' +
      'Job Title: ' + employees[i].jobTitle + '<br>' +
      'Yearly Salary: $' + employees[i].annualSalary + '</h3>' +
      '<button onclick="removeEmployee(' + i + ')">Remove Employee</button>';

    document.getElementById('allEmployees').innerHTML += employeeInfo;

    document.getElementById('totalSalary').innerHTML += '';

    // calculate total yearly cost
    totalSalary += Number(employees[i].annualSalary);
    console.log('The total yearly salary is: $' + totalSalary);

    // calculate monthly cost
    monthlyCost = Math.round(totalSalary / 12);
    console.log('The total monthly cost is: $' + monthlyCost);

    // display total monthly Salary
    document.getElementById('monthlyCostTickerIn').innerHTML = ('Total Monthly Cost: $' + monthlyCost);


  }

}; //end displayEmployees

var removeEmployee = function(choice) {
  console.log('in removeEmployee');

  if(choice > -1) {
    employees.splice(choice, 1);

  displayEmployees();
  console.log('The total monthly cost is: $' + monthlyCost);
  }
};

// var totalMonthlyCost = function() {
//   console.log('in totalMonthlyCost');
//   totalSalary = 0; //set as gobal variable in beginning
//   for (var i = 0; i < employees.length; i++) {
//     totalSalary += Number(employees[i].annualSalary);
//
//     console.log(totalSalary);
//     return totalSalary;
//   }
// };
