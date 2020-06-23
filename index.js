var mysql = require ('mysql');
var inquire = require = require ('inquire');
var util = require ('util');

var options  = {
    user 'root',
    password
}


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
        name: 'choice'
        message:' what would you like to do:',
        type: 'list'
        choices: "Get all employeess", "Get all roles", "Add all departments": "Add an department"],
    },
];
