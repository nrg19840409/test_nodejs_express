var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    //res.send('Hello world');

    var SqliteDB = require('../public/javascripts/sqlite.js').SqliteDB;

    // 需要绝对路径
    var rootPath = process.cwd();
    console.log("rootPath: " + rootPath);
    var file = rootPath + "/db/Gis1.db";

    var sqliteDB = new SqliteDB(file);


    //INSERT into  blood_pressure_t VALUES('adada', 120,82,65,'2021-2-9','cwz');

    var UUID = require("uuid");
    var id = UUID.v1();


    var date = req.body.date;
    var systolic = req.body.systolic;
    var diastolic = req.body.diastolic;
    var hr = req.body.hr;
    console.log("date: " + date);
    console.log("systolic: " + systolic);
    console.log("diastolic: " + diastolic);
    console.log("hr: " + hr);

    var data = [
        //['abc123', 120, 82, 65, '2021-2-9', 'cwz'],
        // ['abcc123', 120, 82, 65, '2021-2-9', 'cwz'],
        // ['abccc123', 120, 82, 65, '2021-2-9', 'cwz'],
        [id, systolic, diastolic, hr, date, 'cwz']
    ];
    var insertSql = "insert into blood_pressure_t values(?, ?, ?, ?, ?, ?)";

    sqliteDB.insertData(insertSql, data);

    sqliteDB.close();

    console.log("Inserted!!");
    res.send("Inserted!!!");


});

module.exports = router;