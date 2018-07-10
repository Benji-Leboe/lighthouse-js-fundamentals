var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

function whileList(list){
  var x = 0;
  var listed = "";

  while(x < list.length){
    listed += list[x] + "\n";
    x++;
  }
  return listed;
}

function forList(list){
    var listed = ""
  for(i = 0; i < list.length; i++){
    listed += list[i] + "\n";
  }
  return listed;
}

function reverseForList(list){
    var listed = ""
    for(n = (list.length - 1); n >= 0; n--){
        listed += list[n] + "\n";
    }
    return listed;
}

console.log(whileList(ingredients));

console.log(forList(ingredients));

console.log(reverseForList(ingredients));