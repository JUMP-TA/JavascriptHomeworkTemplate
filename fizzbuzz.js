function fizzbuzz(iterations) {
    let output = 0;

    for (let i = 1; i <= iterations; i++) {
        if (i % 15 === 0) {
            console.log("Fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i);
            output += i;
        }
    }

    return output;
}

module.exports = fizzbuzz;