const express = require('express');
const app = express();
const fs = require('fs');
let counter = extractCounter();


function extractCounter() {
     fs.readFile('counter.json', 'utf-8', (err, data) => {
        if (err)throw err;
        if(!data) {
            counter = 0;
        } else {
            let parsed = JSON.parse(data);
            counter = parseInt(parsed);
            console.log(counter);
        }
  });
}

app.get("/", function(req, res) {
    if(req) {
        counter++;
        console.log(counter);
    }
    let jsonified = JSON.stringify(counter);
    console.log(jsonified);
    fs.writeFile('counter.json', jsonified, 'utf-8', (err) => {if(err) throw err});
    res.sendFile('visitors.html', {root: __dirname});
})


app.listen(3000, function() {
    console.log("running");
})