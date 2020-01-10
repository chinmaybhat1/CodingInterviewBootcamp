$(function() {
    console.log("Solution1: " + capitalize("i am ironman"));
    console.log("Solution2: " + capitalizeBuiltIn("i am ironman"));
});

function capitalize(str){
  let sentenceCase = str[0].toUpperCase();;

  for(let i=1; i < str.length; i++){
    if(" " === str[i - 1]){
      sentenceCase += str[i].toUpperCase();
    } else {
      sentenceCase += str[i];
    }
  }

  return sentenceCase;
}

function capitalizeBuiltIn(str){
  let words = [];

  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}
