let express = require('express');
let app = express();
const pug = require('pug');
let port = 3000;



app.set('view engine', 'pug');

app.get("/", function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})


app.listen(port, function() {
    console.log('running');
})