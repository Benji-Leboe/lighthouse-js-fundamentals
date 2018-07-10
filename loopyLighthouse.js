function loopyLighthouse(){
  var list = "";
  for(i = 100; i <= 200; i++){
    if(i % 4 === 0 && i % 3 === 0){
      list += "LoopyLighthouse\n";
    }else if(i % 3 === 0){
      list += "Loopy\n";
    }else if(i % 4 === 0){
      list += "Lighthouse\n";
    }else{
      list += i + "\n";
    }
  }
  return list;
}

for(var i = 100; i <= 200; i++){
  if(i % 4 === 0 && i % 3 === 0){
    console.log("LoopyLighthouse");
  }else if(i % 3 === 0){
    console.log("Loopy");
  }else if(i % 4 === 0){
    console.log("Lighthouse");
  }else{
    console.log(i);
  } 
}