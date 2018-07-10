function range(start, end, step){
  var listed = [];
  for(var i = start; i <= end; i += step){
    listed.push(i);
  }
  return listed;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

