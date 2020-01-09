$(function() {
    console.log("Character that has occured most number of times: " + maxChar("helloo"));
});

function maxChar(str){
  let max = 0;
  let maxChar = '';
  const charMap = {};

  for(let char of str){
    if(charMap[char]){
      charMap[char] ++;
    } else {
      charMap[char] = 1;
    }
  }

  for(let char in charMap){
    if(charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
