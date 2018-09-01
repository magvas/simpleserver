var http = require('http');
var dbaccess = require('./lib/dbaccess');

var server = http.createServer(function(req,res){
   res.writeHead(200,{'content-type':'text/json'});
   
   if (req.method == 'POST') {
        
        req.on('data', function (data) {
            var body = '';
            body += data;
            dbaccess.getAllWinesOfVintner(body,res,addResultToOutput);
        });
   }
   else{
        dbaccess.getAllWinesOfVintner('Schneider',res,addResultToOutput);
        console.log('Response build!');   
   }
});

var addResultToOutput = function (result,response){
    response.write(JSON.stringify(result));
    response.end();
}

server.listen(10001);