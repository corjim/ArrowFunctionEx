

//  ES5 Map Callback

function double(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
};

// Refactor the above code to use two arrow functions. Turn it into a one-liner.

const double = (arr) => arr.map((val) => val * 2);


//  Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers) {
    var squares = numbers.map(function (num) {
        return num ** 2;
    });
    var evens = squares.filter(function (square) {
        return square % 2 === 0;
    });
    return evens;
};

//    Refactored arrow function.

const squareAndFindEvens = (numbers) => {
    var squares = numbers.map((num) => num ** 2);
    var evens = squares.filter((squares) => squares % 2 === 0);
    return evens;
}