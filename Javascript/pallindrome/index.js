function pallindromeStrBuiltIn(input){
  const reversed = input.split('').reverse().join('');
  return input === reversed;
}

function pallidromeStrOptimized(input){
    const inputLength = input.length;

    for(let i=0 ; i< inputLength/2; i++){
      if(input[i] != input[inputLength - i - 1]){
        return false;
      }
    }

    return true;
}
/*
* Java equivalent for Math.sign() is Math.signnum()
*/
function pallindromeIntBuiltIn(input){
  const reversed = input.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(input) === input;
}

$(function() {
    console.log("Solution 1: " + pallindromeStrBuiltIn("helleh"));
    console.log("Solution 2: " + pallidromeStrOptimized("helleh"));
    console.log("Solution 3: " + pallindromeIntBuiltIn(121));
});
