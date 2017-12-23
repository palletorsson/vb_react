var express = require('express');
var fs      = require('fs');

var app     = express();
var path    = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/theme/index.html'));
});
 

app.get('/gridjson', function(req, res) {
    var newJson = [];  
	fs.readFile('./theme/static/json/test2.json', 'utf8', function (err, data) {
		
		var json = JSON.parse(data, err);
		var rows = json.rows; 
		//console.log(rows); 
		for (var i = rows.length - 1; i >= 0; i--) {
			newJson.push(rows[i].data); 
			for (var j = rows[i].data.length - 1; j >= 0; j--) {
				var rand = Math.floor((Math.random() * 1000) + 1);
				json.rows[i].data[j] = rand; 
			}
		}
	    
	    res.json(json);
	});
	
});

app.listen('8081')

app.use(express.static('theme'))

console.log('Magic happens on port 8081');
exports = module.exports = app;


