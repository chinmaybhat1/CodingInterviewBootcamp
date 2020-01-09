$(function() {
    const inputArray = [1,2,3,4,5];
    const chunkSize = 5;
    console.log(chunk(inputArray, chunkSize));
});

function chunk(inputArray, chunkSize){

  if(inputArray === null || chunkSize == 0 || inputArray.length === 0 || chunkSize > inputArray.length){
    return -1;
  }

  const chunkedArray = [];
  let index = 0;

  while(index < inputArray.length){
    chunkedArray.push(inputArray.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return chunkedArray;
}
