const db = require('../db/connection');
const cTable = require('console.table');
const inquirer = require('inquirer');
const { response } = require('express');


  const viewAllDepartments = () => {

    const sql = `SELECT * from department;`;
    return new Promise((resolve, reject) => {
      db.query(sql, (err, rows) => {
        if (err) {
          console.log('There was an issue getting departments.')
          reject(err)
        }
        resolve(rows)
        });
    })

    }

    const addDepartment = async () => {

      console.log(`
      -----------------
      Add an Department
      -----------------
      `)

      await inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: 'Please enter the department\'s name:',
        validate: nameInput_1 => {
          if (nameInput_1) {
              return true;
          } else {
              console.log('Please enter a department name!');
              return false;
          }
        }
        },
    ]).then(({name}) => {
      
      const sql = `INSERT INTO department (name) VALUES (?)`;

      return new Promise((resolve, reject) => {
      db.query(sql, name, (err, result) => {
        if (err) {
          reject(err)
        }
          resolve(result)
          })
        })
      })
    }
  
    module.exports = { viewAllDepartments, addDepartment }