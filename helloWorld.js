var express=require('express');
var app=express();
var port = 5000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});
app.route('/Node').get(function(req,res){
    res.send("Testing my Node Skills");
});

app.route('/Angular').get(function(req, res){
        res.send("Check Out My Angular Skills");
});

app.get('/', function (req, res){
    res.send('I taught myself this. :-)');
});