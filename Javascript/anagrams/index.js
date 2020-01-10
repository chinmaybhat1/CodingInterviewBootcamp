$(function() {
    console.log("Anagram " + anagrams("hello", "lloeh"));
    console.log("Anagram by Sort " + anagramsBySort("hello", "lloeh"));
});

function anagrams(input1, input2){

  const input1CharMap = charMapBuilder(input1);
  const input2CharMap = charMapBuilder(input2);

  if(Object.keys(input1CharMap).length !== Object.keys(input2CharMap).length){
    return false;
  }

  for(let char in input1CharMap){
    if(input1CharMap[char] !== input2CharMap[char]){
      return false;
    }
  }

  return true;
}

function charMapBuilder(str){

  const charMap = {};

  for(let char of str.replace(/[^\w]/g, "").toLowerCase()){
      charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}


function anagramsBySort(input1, input2){
  if(input1.length !== input2.length){
    return false;
  }
  return cleanString(input1) === cleanString(input2);
}

function cleanString(str){
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join("");
}
