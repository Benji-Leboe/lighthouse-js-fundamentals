function lastIndexOf(array, num){
  var index = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] === num){
      index = i;
    }
  }
  if(array.length === 1){
    return i - 1;
  }else if(index > 0){
    return index;
  }else{
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);