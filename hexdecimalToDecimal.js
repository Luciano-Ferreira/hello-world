/*
  CASE: Hexadecimal

  Write a program that will convert a hexadecimal number, represented as a string (e.g. "10af8c"), to its decimal equivalent.

  The program should return -1 for invalid hexadecimal strings.
*/

function hexToDec(hexadecimal) {
  const strValidHex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"]
  console.log(hexadecimal)

  const filter =  String(hexadecimal)
  .split("") // split change the string to array example: "name" 👉 ["n", "a", "m", "e"]
  .filter(
    (char) => strValidHex.includes(char) // runs through the array validating each character
  )

  if(filter.length != String(hexadecimal).length) return -1
  return parseInt(hexadecimal, 16)
}


console.log(hexToDec("0f0f0f0")) // 15790320
console.log(hexToDec("lucianosilva")) // -1

