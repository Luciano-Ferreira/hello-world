/**
 * Given an array of numbers, find the smallest pair sum in the array.

For example

[10,14,2,23,19] should return 12 (i.e. sum of 10,2)

[99,2,2,23,19] should return 4 (i.e. sum of 2,2)

Input array contains minimum two elements and every element is a number. Note :

    not all elements are distinct, and duplicates are not ignored

Ex :

[1,1,2] => 1+1 = 2

 */

function smallestPairSum(numbers)
{
  let smallest = Number.POSITIVE_INFINITY;
  let nextSmallest = Number.POSITIVE_INFINITY;
  
  for (const num of numbers) {
    if (num < smallest) {
      [nextSmallest, smallest] = [smallest, num];
    }
    else if (num < nextSmallest) {
      nextSmallest = num;
    }
  }
    
  
  return console.log(smallest + nextSmallest);
}

smallestPairSum([10,14,-2,23,19]) // 12