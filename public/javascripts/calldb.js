function calldb() {

    var SqliteDB = require('./sqlite.js').SqliteDB;

    var file = "../../db/Gis1.db";

    var sqliteDB = new SqliteDB(file);


    //INSERT into  blood_pressure_t VALUES('adada', 120,82,65,'2021-2-9','cwz');


    var data = [
        ['abc', 120, 82, 65, '2021-2-9', 'cwz'],
        ['abcc', 120, 82, 65, '2021-2-9', 'cwz'],
        ['abccc', 120, 82, 65, '2021-2-9', 'cwz'],
        ['abcccccc', 120, 82, 65, '2021-2-9', 'cwz']
    ];
    var insertSql = "insert into blood_pressure_t values(?, ?, ?, ?, ?, ?)";

    sqliteDB.insertData(insertSql, data);

    sqliteDB.close();

}