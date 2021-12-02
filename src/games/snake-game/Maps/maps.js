
function borderMap(maxWidth, maxHeight) {
  
  let arr = new Array(maxHeight);
  for(let i=0; i<maxHeight; ++i) arr[i] = new Array(maxWidth);

  for(let i=0; i<maxHeight; ++i) {
    for(let j=0; j<maxWidth; ++j) {
      if(i === 0 || j === 0 || i === maxHeight - 1 || j === maxWidth- 1) arr[i][j] = "Wall";
      else arr[i][j] = "Empty";
    }
  }

  return arr;
}

function emptyMap(maxWidth, maxHeight) {
  let arr = new Array(maxHeight);
  for(let i=0; i<maxHeight; ++i) arr[i] = new Array(maxWidth);

  for(let i=0; i<maxHeight; ++i) {
    for(let j=0; j<maxWidth; ++j) {
      arr[i][j] = "Empty";
    }
  }

  return arr;
}

function getMaps(type, maxWidth, maxHeight) {
  if(type === "BorderMap") return borderMap(maxWidth, maxHeight);
  if(type === "EmptyMap") return emptyMap(maxWidth, maxHeight);
}

export default getMaps;
