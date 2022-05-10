const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const cTable = require('console.table');

//Creates connection to sql database
const connection = mysql2.createConnection ({
    host: 'localHost',
    port: 3001,
    user: 'root',
    password: '',
    database: 'employee_db'
});

//connects to sql server and sql database 
connection.connect(function(err) {
    if(err) throw err;
    options();
});

//promppts a list of options to choose from 
function options() {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'Welcome to the Employee Database, what would you like to do?',
        choices: [
            'View all employees',
            'View all departments',
            'View all roles',
            'Add an employee',
            'Add a department',
            'Add a role',
            'Update employee role',
            'Delete an employee',
            'EXIT'
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Update employee role':
                    updateRole();
                    break;
                case 'Delete an employee':
                    deleteEmployee();
                    break;
                case 'EXIT': 
                    exitApp();
                    break;
                default:
                    break;
            }
    })
};