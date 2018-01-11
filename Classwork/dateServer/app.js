const express = require('express');
const app = express();
const time = require('./time.js')

app.get("/", function(req, res) {
    // res.send(`<h1> ${new Date()}</h1>`);
    res.send(time);
})


app.listen(3000, function() {
    console.log("running");
})