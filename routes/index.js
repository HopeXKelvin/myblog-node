var express = require('express');
var router = express.Router();
var fs=require("fs");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/',function(req,res){
	fs.readFile('./blogs/test.md','utf-8',function(err,data){
		if(err){
			res.send(err);
		}
		res.send(data);
	});
});

module.exports = router;
