
var mysql =  require('mysql2');

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Overnight#1'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('connected!');
    con.query('CREATE DATABASE mydb', function(err, result){
        if (err) throw err;
        console.log('RESULT: '+'Database created');
    });
});
// I'll first need to define sql before i can use any commands
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table altered");
//     });
//   });

//limit in sql 
//fro example i want only the five first records on a table i use 
//var sql = 'select * FROM mytable LIMIT 5'
// con.query(sql, function(err, result){
//     if (err) throw err;
//     console.log(result);
// });
// if i want to start from a particular position, i use offset
// example: var sql = 'select * FROM mytable LIMIT 5 OFFSET 2'
//meaning i'm starting from the third line not the second