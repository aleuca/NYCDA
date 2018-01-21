/**
 * Notes
 *
 * 1) ALWAYS return after using res.send(), res.json(), etc when in the middle of a function!
 *         Try removing it to see what error happens. It is the worst.
 *
 *
 */


/**
 * Module dependencies
 */

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')
const uuid = require('uuid');


/**
 * Module
 */

const port = 3000;
const dbPath = './db.json';
let db = {
    bubbles: {}
};

// ensure that express can read from req.body
//      use this app as a reference; you will FOREVER fuck
//      up bodyparser (i had to google this three times just now)
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

// replace our empty object with the contents of the file, if they exist
fs.readFile(dbPath, (err, contents) => {
    if (contents) {
        db = JSON.parse(contents);
    }
})

// homepage
app.get("/", (req, res) => {
    res.send("HOMEPAGE")
});


// show all bubbles
app.get('/bubbles', (req, res) => {
    res.json(db.bubbles || {})
})

// add a bubble to the database
app.post('/bubbles', (req, res) => {
    const newBubble = req.body;

    // create a random id for the new bubble
    const id = uuid()

    db.bubbles[id] = newBubble

    updateDb(db.bubbles[id], res)
})

// get a bubble by id
app.get('/bubbles/:id', (req, res) => {

    if (!db.bubbles[req.params.id]) {
        res.send()
        return;
    }

    res.send(db.bubbles[req.params.id])
})

// update a bubble
app.post('/bubbles/:id', (req, res) => {
    const newBubble = req.body;

    if (!db.bubbles[req.params.id]) {
        res.redirect('/')
        return;
    }

    db.bubbles[req.params.id] = req.body

    updateDb(db.bubbles[req.params.id], res)
})

// delete a bubble
app.delete('/bubbles/:id', (req, res) => {
    if (!db.bubbles[req.params.id]) {
        res.redirect('/')
        return;
    }

    delete db.bubbles[req.params.id];

    updateDb(`Deleted bubble ${req.params.id}!`, res)
})

/**
 *
 * @param {Object} payload - stuff to send when we're done updating
 * @param {Response} res - express response objet
 */
function updateDb(payload, res) {
    const writeable = JSON.stringify(db)
    fs.writeFile('db.json', writeable, 'utf-8', (err) => {
        if(err) {
            res.send(err)
            return;
        }

        // send formatted text to client
        res.send(payload)
    });
}

app.listen(port, function() {
    console.log(`running on port ${port}`);
});