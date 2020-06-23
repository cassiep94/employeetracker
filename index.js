var mysql = require ('mysql');
var inquire = require = require ('inquire');
var util = require ('util');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "movie_planner_db"

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

//{
    choice: "Get all employess"
//}
function startApp() {
    inquire.promt(questions).then(answers => {
    switch (answers.choice) {
    case 'Get all roles':
        inquirer.prompt(internQues).then(function(answers){
            console.log 
            startApp();
        });

}


break;
 "Get all departments":

 inquire.promt(egineerQues).then(function)(answers){
     console.log("you asked engneer questions")
     var tableRows = await connection.query('select * from sometable');
     startApp();
 });

 break;
 case "add department":


 default:
     console.log("your done entering employees!");
    }
}).catch(err=>){
    console.log(err);
})

}
startApp();