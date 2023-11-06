var express=require('express');
var app=express();
var port = 5000;



app.route('/Node').get(function(req,res){
    res.send("Testing my Node Skills");
}); 

app.route('/Angular').get(function(req, res){
        res.send("Check Out My Angular Skills");
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/about', function (req, res){
    res.send('This is the about page');
});

app.get('/contact', function (req, res){
    res.send('Contact me at emailme@email.com');
});

app.get('*', function (req, res){
    res.send('I taught mysself this, btw... :-)');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});