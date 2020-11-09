const dotenv = require("dotenv").config();
const express = require('express');
const app = express();

// 5.2.7
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// 5.2.11a  Mount the body-parser middleware  here


// 5.2.1
console.log("Hello World");

// 5.2.2 -> 5.2.3
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html")
});

// 5.2.4
app.use(express.static(__dirname + "/public"));

// 5.2.5 -> 5.2.6
app.get("/json", function(req, res) {
  (process.env.MESSAGE_STYLE !== "uppercase") ?
    res.json({"message": "Hello json"}) :
    res.json({"message": "HELLO JSON"})  
});
 
// 5.2.8
app.get("/now",
    (req, res, next) => {
        req.time = new Date().toString();
        next();
    },
    (req, res) => {
        res.json({"time": req.time});
        // fcc propone esta -> res.send({time: req.time});

    }
);

// 5.2.9)  Get input from client - Route parameters */


// 5.2.10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
// 5.2.11b Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


// 5.2.12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;