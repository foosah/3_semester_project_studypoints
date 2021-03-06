var express = require('express');
var dbhandler = require('../model/dbhandler');
var router = express.Router();

router.get('/students', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+"Make sure you have started the database");
        return;
    }
    dbhandler.getStudents(function(students){
        console.log("Students stringy: " + JSON.stringify(students));
        res.header("Content-type","application/json");
        res.end(JSON.stringify(students));
    })
});

router.get('/students/:username', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+"Make sure you have started the database");
        return;
    }
    var username = req.params.username;
    dbhandler.getStudentDetails(username, function(student){
        console.log("Student-Detail stringy: " + JSON.stringify(student));
        res.header("Content-type","application/json");
        res.end(JSON.stringify(student));
    })
});

router.get('/periods', function(req, res) {
        if(typeof global.mongo_error !== "undefined"){
            res.status(500);
            res.end("Error: "+global.mongo_error+"Make sure you have started the database");
            return;
        }
    dbhandler.getPeriods(function(periods){
        console.log("periods stringy: " + JSON.stringify(periods));
        res.header("Content-type","application/json");
        res.end(JSON.stringify(periods));
    })
});

router.get('/classes', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+"Make sure you have started the database");
        return;
    }
    dbhandler.getClasses(function(classes){
        console.log("classes stringy: " + JSON.stringify(classes));
        res.header("Content-type","application/json");
        res.end(JSON.stringify(classes));
    })
});

module.exports = router;
