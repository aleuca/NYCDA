function fizzbuzz(num) {
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            console.log("buzz");
        }
        if (i % 3 === 0 && i % 5) {
            console.log("fizzbuzz");
        }
    }
}

module.exports = fizzbuzz;