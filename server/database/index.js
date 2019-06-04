const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  database: 'inputs',
});

const db = {};

db.postInput = (data, callback) => {
  connection.query(`Insert into inputs (input) values ('${data}')`, error => {
    if (error) callback(error);
    else callback(null);
  });
};

db.getInputs = callback => {
  connection.query('Select * from inputs', (error, results) => {
    if (error) callback(error);
    else callback(null, results);
  });
};

module.exports = db;
