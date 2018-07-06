function howManyHundreds(n){
  if(n < 100){
    return 0;
  }else{
    var rounded = Math.floor(n / 100);
    return rounded;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);