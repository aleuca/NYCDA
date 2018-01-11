let express = require('express');
let app = express();
const pug = require('pug');



app.set('view engine', 'pug');

app.get("/", function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})


app.listen(3000, function() {
    console.log('running');
})