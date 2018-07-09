function calculateRectangleArea(l,w){
  if(l > 0 && w > 0){
    return l * w;
  }
}

function calculateTriangleArea(b,h){
  if(b > 0 && h > 0){
    return b * (h / 2);
  }
}

function calculateCircleArea(r){
  if(r > 0){
    return Math.PI * (r * r);
  }
}
