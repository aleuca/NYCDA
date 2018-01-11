let readline = require("readline");
let fs = require("fs");
let util = require("util");
let rl = readline.createInterface(process.stdin, process.stdout);
const readFileAsync = util.promisify(fs.readFile);
const question = util.promisify(rl.question);


// function fileName() {
//     rl.question("file name", (answer) => {
//         readFile(answer);
//     })
// }


// function readFile(name) {
//     fs.readFile(`./${name}`, "utf-8", function(err, res) {
//         if(err) {
//             throw err;
//         } else {
//             console.log(res);
//         }
//     })
// };

// fileName();




question("file name").then((answer) => {

})

readFileAsync(`./${answer}`, "utf-8")
    .then((res) => {
        console.log(res);
    })
    .catch((error) =>{
        console.log(error)
})

