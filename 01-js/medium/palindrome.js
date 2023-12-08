/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let len=str.length;
  let k=len-1;
  let i=0;
  str=str.toLowerCase();
  while(i<k){
    while(i<k && (str[i]< 'a'|| str[i]> 'z'))i++;
    while(i<k && (str[k]< 'a' || str[k]> 'z'))k--;
    if(str[i]!=str[k]){
      return false;
    }
    else{
      i++;
      k--;
    }
  }
  return true;
}

module.exports = isPalindrome;
