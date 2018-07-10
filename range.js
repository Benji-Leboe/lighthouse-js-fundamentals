function range(start, end, step){
  var current = start;
  var listed = [];
  while(current <= end){
    listed.push(current);
    current += step;
  }
  if(listed.length > 0){
    return listed; 
  }else{
    return undefined;
  }  
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range());
