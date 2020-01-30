var mysql = require('mysql');
var inquirer = require('inquirer');
 require('console.table');

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password: "imagine3",
    database:"bamazon_db"
})

connection.connect(function(err){
    console.log("Connected as id: " + connection.threadId);
    table();
    
})
//show table function 

function table(){
    connection.query("SELECT * FROM products", function (err, results){
        if (err) throw err;
        console.table(results);
        customerView();
        
    });
}
function customerView() {
    inquirer.prompt({
        name: "item",
        type: "input",
        message: "What is the ID of the item you want to purchase?",
        validate: function(value){
            if(isNaN(value)==false){
                return true;
            } else {
                return false;
            }
        }
    }).then(function(answer) {
        connection.query("SELECT * FROM products", function (err, results){
            if (err) throw err;
            console.table(results);            
            quantity();
        });
        

    });
}
 function quantity() {
    inquirer.prompt({
        name: "quantity",
        type: "input",
        message: "How many units would you like to purchase?",
        validate: function(value){
            if(isNaN(value)==false){
                return true;
            } else {
                return false;
            }
        }
    }).then(function(response) {
        
        connection.end();
    });
}
