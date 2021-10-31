/**
 * Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:
 */

var summation = function (num) {
    arr = [];
    result = 0;
    for (var i = 0;i<num+1; i++) {
        arr.push(i)
    }

    if (num == 0) {
        result = 0
    }

    for (var y = 0; y < arr.length; y++) {
        result += arr[y];
    }


    return result;
}

console.log(summation(8))