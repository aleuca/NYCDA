function makeStars(num) {
    let stars = "";
    for (let i = 0; i <= num; i++) {
        stars += "*";
    }
    console.log(stars);
}

let numLines = 10;

setInterval(
    function () {
        makeStars(numLines);
        numLines--;
    }, 1000
)


