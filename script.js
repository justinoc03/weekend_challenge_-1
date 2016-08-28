console.log('tis working');

var employeeList = [];

var addEmployee = function() {
  console.log('in addEmployee');

  //create employee object
  var newEmpEntry = {
    firstName: document.getElementById('firstNameIn').value,
    lastName: document.getElementById('lastNameIn').value,
    idNumber: document.getElementById('idNumberIn').value,
    jobTitle: document.getElementById('jobTitleIn').value,
    annualSalary: document.getElementById('annualSalaryIn').value,
  }; // end newEmpEntry

  //alert user of blanks (use this if using <button> in html)
  if(newEmpEntry.firstName === '' || newEmpEntry.lastName === '' || newEmpEntry.idNumber === '' || newEmpEntry.jobTitle === '' || newEmpEntry.annualSalary === '') {
    alert('Please fill in all required fields');
  }
  else {
    //call clearInputs
    clearInputs();
    //push newEmpEntry into the employeeList array
    employeeList.push(newEmpEntry);
    //call displayEmployees
    displayEmployees();
  }// end of error alert
}; // end of newEmpEntry

//   //push newEmpEntry to employeeList array (use this if using <form> in html)
//   employeeList.push(newEmpEntry);
// }; // end of newEmpEntry

var clearInputs = function() {
  console.log('in clearInputs');
  firstName: document.getElementById('firstNameIn').value = '';
  lastName: document.getElementById('lastNameIn').value = '';
  idNumber: document.getElementById('idNumberIn').value = '';
  jobTitle: document.getElementById('jobTitleIn').value = '';
  annualSalary: document.getElementById('annualSalaryIn').value = '';
};

var displayEmployees = function() {
  console.log('in displayEmployees');
  console.log(employeeList);
  // empty our list so we don't repeatedly add already added employees
  document.getElementById('allEmployees').innerHTML='';
  // for each employee, add a list item with all pieces
  for (var i = 0; i < employeeList.length; i++) {
    // employee information
    var employeeInfo = '<h3>Name: ' + employeeList[i].firstName + ' ' + employeeList[i].lastName + '<br>Employee ID #: ' + employeeList[i].idNumber + '<br>Job Title: ' + employeeList[i].jobTitle + '<br>Yearly Salary: $' + employeeList[i].annualSalary + '</h3>';
    document.getElementById('allEmployees').innerHTML += employeeInfo;
  }
}; //end displayEmployees
