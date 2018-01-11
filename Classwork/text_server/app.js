const express = require('express');
const app = express();
const fs = require('fs');


// app.get("/", function (req, res) {

//     fs.readFile("hello.txt", "utf-8", function (err, response) {

//         if (err) {
//             res.send("unable to find file, sorry");
//         } else {
//             console.log('ok');
//             console.log(response);
//         }
//         res.send(response);
//     })
// })

app.use(express.static('assets'));

app.get("/gallery", function (req, res) {
    res.sendFile('./gallery.html', { root: __dirname });
    // res.type('jpeg').sendFile('./image.jpg', { root: __dirname });
})


app.get("/", function (req, res) {

    fs.readFile("hello.txt", "utf-8", function (err, response) {

        if (err) {
            res.send("unable to find file, sorry");
        } else {
            console.log("ok");
            console.log(response);
        }
        res.send("hello this is the gallery " + response);
    })
})



app.listen(3000, function() {
    console.log('running');
})


// app.get([ "/", "/gallery" ], (req, res) => {
//     if (req.url === "/") res.sendFile("mainpage.html", { root: __dirname });
// });

// app.get("/", function(req, res) {

//         fs.readFile("hello.json", function(err, response) {
//             // res.type('json') if I wanted to just display the json file to the user as is
//             let parsed = JSON.parse(response);
//             if(err) {
//                 res.send("unable to find file, sorry");
//             } else {
//                 console.log("ok");
//                 console.log(response);
//             }
//             res.send(`<h1>${parsed.glossary.title}</h1>`);
//         })
//     })
