//FACTORIAL
function calcFactorial(num) {
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
}

//PICKING A RANDOM ITEM FROM AN ARRAY
function getRandomFromArray(arr) {

    return arr[Math.floor(Math.random() * arr.length)];

}

//RANDOM NUMBER BETWEEN a AND b
function getRandomBetween(start, end) {

    if (start >= end) {
        return NaN;
    } else {
        return Math.floor(Math.random() * (end - start + 1) + start);
    }
}

//CHECK IF A NUMBER IS PRIME OR NOT
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

//FOR A SINGLE WORD OR PHRASE GET THE FIRST LETTER IN UPPER CASE AND THE REST IN LOWER 
function getCapitalizedWord(text = "") {
    return (typeof text === 'string') ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";
}

function getFizzBuzz(n) {
    if (Number.isInteger(n)) {

        // let nFizzBuzz = "";

        // if (n % 3 === 0) {
        //     nFizzBuzz = "Fizz";
        // }

        // if (n % 5 === 0) {
        //     nFizzBuzz += "Buzz";
        // }

        // return (nFizzBuzz.length > 0) ? nFizzBuzz : n.toString();

        if (n % 3 === 0 && n % 5 === 0) {
            return nFizzBuzz="FizzBuzz";
        } else if (n % 3 === 0) {
            return nFizzBuzz="Fizz";
        } else if (n % 5 === 0) {
            return nFizzBuzz="Buzz";
        } else {
            return n.toString()
        }

    } else return;
}
