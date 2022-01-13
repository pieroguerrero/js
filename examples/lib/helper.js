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
