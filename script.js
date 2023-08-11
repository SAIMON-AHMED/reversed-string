/*Reverse the provided string and return the reversed string*/

function reverseString(str) {
  let newStr = "";  // creating and initializing an empty string
  for (let i = 0; i < str.length; i++) {
    newStr += str[str.length - 1 - i];  // reversing the string
  }
  return newStr;
}

console.log(reverseString("hello"));
