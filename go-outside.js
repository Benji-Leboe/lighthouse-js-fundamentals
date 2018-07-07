var raining = true;
var temperature = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
}else if(temperature < 15){
  console.log("Wear a sweater!")
}else{
  console.log("Wear a t-shirt!")
}


function goingOutside(rain,temp){
    if(rain === true){
        console.log("Bring an umbrella.");
    }else{
        console.log("Don't bother with the brolly!");
    };

    if(temp < 0){
        console.log("Wear a jacket, and don't forget a scarf!");
    }else if(temp < 15){
        console.log("Might want to wear a sweater.");
    }else{
        console.log("Wear a t-shirt!")
    };
}

goingOutside(true,20);