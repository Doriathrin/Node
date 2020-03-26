// 引入express
var express = require('express');
// 获取router
var router = express.Router();
var fs = require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  var data = fs.readFileSync("./ajax/index.json", "utf8");
  res.render("index", {
    data: JSON.parse(data),
  });
});

module.exports = router;
