var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
	data = 
   [	
        {"name" : "TestName1", "Links" : ["https://bing.com", "link12"]},
		{"name" : "TestName2", "Links" : ["link21", "link22"] }
   ]

	
   // res.end(JSON.stringify({ a: 1 }));
   res.end(JSON.stringify(data));
});
app.listen(6000);

/**/