var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('Hello world');

    // 输出 JSON 格式
    var response = {
        "first_name": "req.query.first_name",
        "last_name": "req.query.last_name"
    };
    console.log(response);
    res.end(JSON.stringify(response));

    //res.render('test', { title: 'ECharts' });
});

module.exports = router;