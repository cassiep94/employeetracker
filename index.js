var mysql = require ('mysql');
var inquire = require = require ('inquire');
var util = require ('util');

var options  = {
    user 'root',
    password
}


var connection = mysql.createConnection(options);
//var data = connection.query("select * from sometable", function(data){
 //console.log(data)

connection.query = util.promisify(connection.query);

connection.query("somequery").then(data=>{
    console.log(data)
}).catch(err =>{
    console.log(err)
})
const questions = [
    {
        name 
    }
]