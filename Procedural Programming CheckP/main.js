function dot_product(vector1, vector2) {
  let psResult = 0;
  for (let i = 0; i < 2; i++) {
    psResult += vector1[i] * vector2[1];
  }
  return psResult;
}

function checkOrthogonal(vector1, vector2) {
  result = dot_product(vector1, vector2);
  if (result == 0) {
    console.log("The vectors are orthogonal");
  } else {
    console.log("the dot product is" + result);
  }
}
