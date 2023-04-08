var express = require('express');
var router = express.Router();
var fs = require('fs');
var { parse } = require("csv-parse");
var path = require('path');


/* get file. */
var filePath1 = path.join(__dirname, "./file/問卷調查1.csv");
var filePath2 = path.join(__dirname, "./file/問卷調查2.csv");
var filePath3 = path.join(__dirname, "./file/系統2和3資料集.csv");

var f1 = fs.readFileSync(filePath1, {encoding: 'utf-8'}, 
    function(err){console.log(err);});
var f2 = fs.readFileSync(filePath2, {encoding: 'utf-8'}, 
    function(err){console.log(err);});
var f3 = fs.readFileSync(filePath3, {encoding: 'utf-8'}, 
    function(err){console.log(err);});
// Split on row
f1 = f1.split("\n");
f2 = f2.split("\n");
f3 = f3.split("\n");

// Get first row for column headers
headers1 = f1.shift().split(",");
headers2 = f2.shift().split(",");
headers3 = f3.shift().split(",");
// motivation
var json = [];    
f1.forEach(function(d){
    // Loop through each row
    tmp = {}
    row = d.split(",")
    for(var i = 0; i < headers1.length; i++){
        tmp[headers1[i]] = row[i];
    }
    // Add object to list
    json.push(tmp);
});
const motivation = JSON.stringify(json);
// strategy
var json = [];    
f2.forEach(function(d){
    // Loop through each row
    tmp = {}
    row = d.split(",")
    for(var i = 0; i < headers2.length; i++){
        tmp[headers2[i]] = row[i];
    }
    // Add object to list
    json.push(tmp);
});
const strategy = JSON.stringify(json);
// bookroll
var json = [];    
f3.forEach(function(d){
    // Loop through each row
    tmp = {}
    row = d.split(",")
    for(var i = 0; i < headers3.length; i++){
        tmp[headers3[i]] = row[i];
    }
    // Add object to list
    json.push(tmp);
});
const bookroll = JSON.stringify(json);


//motivation = motivation.find(element => element["username"] == "std1");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', motivation_obj: motivation, strategy_obj: strategy,
  bookroll_obj: bookroll});
});

module.exports = router;
