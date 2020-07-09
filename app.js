var exp = require('express');
var app = exp();
app.get('/',function(req,res)
{res.send("Hello Nodejs webserver");

})
app.get('/home',function(req,res)
{res.send("This is my home page");

})
var port = process.env.port||process.env.npm_package_config_port;
app.listen(port,function(){
    console.log("Http Server is up on port number "+port);
});
