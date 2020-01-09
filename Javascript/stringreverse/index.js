$(function() {
    console.log("Solution 1: " + reverseBuiltIn('hello'));
    console.log("Solution 2: " + reverseAdvancedLoop('hello'));
    console.log("Solution 3: " + reverseUsingReduce('hello'));
});

function reverseBuiltIn(str){
  return str.split('').reverse().join('');
}

function reverseAdvancedLoop(str){

  let reversed = '';

  for(let character of str){
    reversed =  character +  reversed;
  }

  return reversed;
}
/*
* reduce() used to condense value of an array, takes two arguments,
Argument 1: Arrow function
Argument 2: Inital value
*/
function reverseUsingReduce(str){
  return str.split('').reduce((reversed,character) => character + reversed, '');
}
