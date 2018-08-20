function range(start, end, step){
  var listed = [];
  if(start < end && step > 0 && (start || start === 0) && end && step){
    for(var i = start; i <= end; i += step){
      listed.push(i);
    }
  }
  return listed;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range());
console.log(range(20, 10, 1));

