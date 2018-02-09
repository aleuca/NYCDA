const express = require('express');
const app = express();
const port = 8080;
const parser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static('clients'));
app.use(parser.text());

let messages = [{text:'hi'}, {text:'bye'}];


// a) server to go to client and see if there are messages
// b) server needs to fetch the messages from client and serve them
// c) client needs to make a get request from server and pull the
//  messages and then display them
// d) client needs to make post request


app.get('/', function(req, res) {
    res.render('chat', {messages: messages});
})

app.get('/messages', function(req, res) {
    res.send(messages);
})

app.post('/', function(req, res) {
    messages.push({text:req.body});
    console.log(messages)
    res.status(200).end();
})

app.listen(port, function() {
    console.log(`listening on ${port}`);
})