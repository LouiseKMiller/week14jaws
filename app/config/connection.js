// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "",
        database: "starwars"
    },
    jawsDB: {
        port: 3306,
        host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'b22h4tt271ra88xa',
        password: "aqsmivlojccy5glw",
        database: "zveqdo7957k6ri9b"

        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection('mysql://b22h4tt271ra88xa:aqsmivlojccy5glw@z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zveqdo7957k6ri9b');



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;