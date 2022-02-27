const inquirer = require('inquirer');
const { viewAllRoles, addRole } = require('./lib/roles')
const { viewAllDepartments, addDepartment } = require('./lib/departments')
const { viewAllEmployees, addEmployee, updateEmployee } = require('./lib/employees');

//Main menu selection - each will go to a separate function.
  const selectAction = async () => {
    console.log(`
    ==========================
    Employee Management System
    ==========================
  `)

    await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Select the action you would like to take:',
      choices: ['View All Departments', 'View all Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee', 'Quit' ]
    },
  ]) .then (({type}) => {
      switch (type) {
        case 'View All Departments': viewAllDepartments().then(response => {
          console.table(response)
          selectAction()
        })
        break;
        case 'View all Roles': viewAllRoles().then(response => {
          console.table(response)
          selectAction()
        })
        break;
        case 'View All Employees': viewAllEmployees().then(response => {
          console.table(response)
          selectAction()
        })
        break;
        case 'Add a Department': addDepartment().then(response => {
          console.log(`Success - New department added!`)
          selectAction()
        })
        break;
        case 'Add a Role': addRole().then(response => {
          console.log(`Success - New role added!`)
          selectAction()
        })
        break;
        case 'Add an Employee': addEmployee().then(response => {
          selectAction()
        })
        break;
        case 'Update an Employee': updateEmployee().then(response => {
          selectAction()
        })
        break;
        case 'Quit': quit()
        break;
        default: console.log('Select a Valid Option.')
      }
    })
  }

  const quit = () => {
  console.log('Goodbye!') 
  process.exit()
  }

selectAction()