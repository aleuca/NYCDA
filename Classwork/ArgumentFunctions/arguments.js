// function argument() {
//     console.log(process.argv.length - 2);
// }

// argument();

let num = parseInt(process.argv[2]);


for (let i = 0; i < num; i++) {
    console.log("hello");
}
if (num === 0) {
    console.log("no arguments passed")
}





// handle no arguments and when the argument is -h or --help