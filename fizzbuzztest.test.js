const fizzbuzz = require("./fizzbuzz");

test("outputs the correct FizzBuzz string", () => {
    expect(fizzbuzz(100) === 2632);
})