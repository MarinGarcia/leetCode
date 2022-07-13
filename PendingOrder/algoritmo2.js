/**
  An integer is a palindrome when it reads the same backward as forward.
  For example, 121 is a palindrome while 123 is not.
  Example 1:

  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.
  Example 2:

  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
  Example 3:

  Input: x = 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

let isPalindrome = (x) => {
  let xString = x.toString();
  let arrChars = [...xString];
  arrChars = arrChars.reverse();
  arrChars = arrChars.join("");
  if (xString === arrChars) return true
  return false;
};

let number = 10;
console.log("El resultado es: ", isPalindrome(number))