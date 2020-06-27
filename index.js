var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Rk0978tb$$",
  database: "employeetracker_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  askQuestions();
});

// function which prompts the user for what action they should take
function askQuestions() {
  inquirer
    .prompt({
      name: "UserChoice",
      type: "list",
      message: "What would you like to do?",
      choices: ["Add New Employees", "View Employees", "View Department", 
      "View Roles", "Add Department","Add Roles","Update Roles", 
    "EXIT"]
    })


    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.userChoice === "Add New Employees") {
        addEmployee();
      }
      else if(answer.userChoice === "View Roles") {
        displayRoles();
      
    }else if(answer.userChoice === "View Department") {
        showDepartments(); 
    }
    else if(answer.userChoice === "View Employees") {
        showEmployees();
    }
    else if(answer.userChoice === "Add Roles") {
        addRoles();
    }
    else if(answer.userChoice === "Add Department") {
        addDepartment();
    }
    else if(answer.userChoice === "Update Roles") {
        updateRoles();
    
    
    
    } else{
        connection.end();
      }
    });
}

// function to handle new employees 
function addEmployee() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Enter Employees First Name?"
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter Employee Last Name?"
      },
      {
        name: "role_id",
        type: "number",
        
        message: "What's The Employee Role ID?"
      },
        { 
            name: "manager_id",
            type: "number",
        
            message:"What's The Manager's ID?"

        }
    
        
        
       // validate: function(value) {
          //if (isNaN(value) === false) {
          //  return true;
         // }
        //  return false;
       // }
     // }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) SET ?",
        {
          item_name: answer.item,
          category: answer.category,
          starting_bid: answer.startingBid || 0,
          highest_bid: answer.startingBid || 0
        },
        function(err) {
          if (err) throw err;
          console.log("Your auction was created successfully!");
          // re-prompt the user for if they want to bid or post
          start();
        }
      );
    });
}

function bidAuction() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM auctions", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
            }
            return choiceArray;
          },
          message: "What auction would you like to place a bid in?"
        },
        {
          name: "bid",
          type: "input",
          message: "How much would you like to bid?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if bid was high enough
        if (chosenItem.highest_bid < parseInt(answer.bid)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                highest_bid: answer.bid
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Bid placed successfully!");
              start();
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Your bid was too low. Try again...");
          start();
        }
      });
  });
}

