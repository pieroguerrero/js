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

        let nFizzBuzz = "";

        // if (n % 3 === 0) {
        //     nFizzBuzz = "Fizz";
        // }

        // if (n % 5 === 0) {
        //     nFizzBuzz += "Buzz";
        // }

        // return (nFizzBuzz.length > 0) ? nFizzBuzz : n.toString();

        if (n % 3 === 0 && n % 5 === 0) {
            return nFizzBuzz = "FizzBuzz";
        } else if (n % 3 === 0) {
            return nFizzBuzz = "Fizz";
        } else if (n % 5 === 0) {
            return nFizzBuzz = "Buzz";
        } else {
            return n.toString()
        }

    } else return;
}

//Get a string reversed:
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

//Remove element from an array and returns a new array with the new values:

function removeFromArray(arr, value) {

    arr = arr.filter((element) => {
        return element !== value
    });

    return arr;
}

//Determine if a given year is leap or not:
function leapYears(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        return true;
    } else return false;
};


//Grouping objects by a given property:
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
    }, {});
}

//Counting instances of values in an object:
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++
    }
    else {
        allNames[name] = 1
    }
    return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }