//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'userdata'
});

const app = express();
app.get('/tbl_wu', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM tbl_wu', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3001, () => {
 console.log('Go to http://localhost:3001/tbl_wu so you can see the data.');
});
