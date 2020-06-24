var mysql = require ('mysql');
var inquire = require = require ('inquire');
var util = require ('util');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rk0978tb$",
    database: "test_db"

});

var connection = mysql.createConnection(options);

connection.query = util.promisify(connection.query);
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id' + connection.threadId);
    startApp();

});





const questions = [
    {
        name: 'choice',
        message:' what would you like to do:',
        type: 'list',
        choices: ["Get all employeess", "Get all roles", "Add all departments", "Add an department"],
    },
];

const departmentQues = [
    {
        name: 'deptName',
        message: 'enter a department name:',
    },
];

//{
    //choice: "Get all employess"
//}
function startApp() {
    inquire.prompt(questions).then(answers => {
    switch (answers.choice) {
    case "Get all roles":
        console.log("added an employee")
        //inquirer.prompt(internQues).then(function(answers){
            //console.log("ask intern")
            //startApp();
      //  });




break;
case "Get all departments":
     connection.query('SELECT * from departments').then(deptRows=>{
console.table(deptRows);
startApp();
     }).catch(err=>{
         console.log(err)
     });
        

 

 break;
 case "add department":
     inquire.prompt(departmentQues).then(function(answers){
console.log("you entered a dept")

startApp();
     });
     
     break;


 default:
     console.log("your done with your database");
    }

}).catch(err=>{
    console.log(err);
})

}
startApp();