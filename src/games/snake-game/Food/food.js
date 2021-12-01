function getFood (gridCondition, maxWidth, maxHeight) {
  
  let foodX = 0;
  let foodY = 0;

  do {
    foodX = Math.floor(Math.random() * (maxWidth) );
    foodY = Math.floor(Math.random() * (maxHeight));
  } while(gridCondition[foodY][foodX] !== "Empty");

  return ([
    foodX, foodY
  ])
}

export default getFood;
