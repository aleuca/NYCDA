const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.get("/", function(request, response) {
    response.type('html');
    fs.readFile('htmlFile.html', 'utf-8', function(err, fileContents) {
        if (err) {
            throw err;
        }

        format(fileContents, response);
    });
});


/**
 *
 * @param {String} input - contents of file
 * @param {Response} res - Express response object
 */
function format(input, res) {
    // check for formatted file
    if (input.includes("<p>")) {
        res.send(input)
        return;
    }

    // if not formatted... format
    const middle = input
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');

    const output = `<p>${middle}</p>`

    // write new formatted text to file
    return fs.writeFile('htmlFile.html', output, 'utf-8', (err) => {
        if(err) {
            throw err
        }

        // send formatted text to client
        res.send(output)
    });
}
//

app.listen(port, function() {
    console.log(`running on port ${port}`);
});