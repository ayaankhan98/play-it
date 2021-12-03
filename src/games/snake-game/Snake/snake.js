function getGridSize(size) {
  if(size === "XL")return ([40, 16])
  if(size === "L") return ([30, 12])
  if(size === "M") return ([20, 8])
  if(size === "S") return ([10, 4])
}
function increment(value, param) {
	return (value + 1) % param;
}
function decrement(value, param) {
	if(value === 0) value = param;
	return value - 1;
}
export default class Snake {
  /// private
  
  #headX = 0;
  #headY = 0;
  #headDirection = "right";

  #snakeDetails = []
  #directionChanger = []

  #score = 0;

  /// public

  constructor(initialHeadY, initialHeadX, direction, size) {
    const [maxWidth, maxHeight] = getGridSize(size);
    this.#headX = initialHeadX;
    this.#headY = initialHeadY;
    this.#snakeDetails.push([initialHeadY, initialHeadX, direction]);
    this.#headDirection = direction;
    this.#directionChanger = new Array(maxHeight);
    for(let i = 0; i < maxWidth; ++i) this.#directionChanger[i] = new Array(maxWidth);
  }

  get snakeHead() {
    return ({
      x: this.#headX,
      y: this.#headY,
      direction: this.#headDirection
    })
  }

  get playerScore() {
    return this.#score;
  }

  get getDetails() {
    return [...this.#snakeDetails]
  }

  getBodyPart(i, j) {
    let len = this.#snakeDetails.length;
    for(let c = 0; c < len; ++c) {
      if(this.#snakeDetails[c][0] === i && this.#snakeDetails[c][1] === j) {
        return c;
      }
    }
  }

  getDirection(i, j) {
    return this.#directionChanger[i][j];
  }



  setDirection(direction) {
    let x = this.#headX;
    let y = this.#headY;

    this.#headDirection = direction;
    this.#directionChanger[y][x] = direction;
    this.#snakeDetails[0][0] = y;
    this.#snakeDetails[0][1] = x;
    this.#snakeDetails[0][2] = direction;
    this.updateHead();
    this.updateTail();
  }

  updateHead() {
    this.#headX = this.#snakeDetails[0][1];
    this.#headY = this.#snakeDetails[0][0];
    this.#headDirection = this.#snakeDetails[0][2];
  }

  updateTail(pos, i, j) {
	let len = this.#snakeDetails.length;
	  if(len - 1 === pos) {
		this.#directionChanger[i][j] = false;
	  }
  }

  move(prevI, prevJ, newI, newJ) {
    let pos = this.getBodyPart(prevI, prevJ);
    this.#snakeDetails[pos][0] = newI;
    this.#snakeDetails[pos][1] = newJ;
    if(this.getDirection(newI, newJ)) this.#snakeDetails[pos][2] = this.getDirection(newI, newJ);
    this.updateHead();
    this.updateTail(pos, prevI, prevJ);
  }

  moveLeft(i, j, maxWidth) {
    let pos = this.getBodyPart(i, j)
    this.#snakeDetails[pos][1] = decrement(j, maxWidth);
    if(this.getDirection(i, decrement(j, maxWidth))) this.#snakeDetails[pos][2] = this.getDirection(i, decrement(j, maxWidth));
    this.updateHead();
  	this.updateTail(pos, i, j)
  }
  moveRight(i, j, maxWidth) {
    let pos = this.getBodyPart(i, j)
    this.#snakeDetails[pos][1] = increment(j, maxWidth);
    if(this.getDirection(i, increment(j, maxWidth))) this.#snakeDetails[pos][2] = this.getDirection(i, increment(j, maxWidth));
    this.updateHead();
  	this.updateTail(pos, i, j)
  }
  moveDown(i, j, maxHeight) {
    let pos = this.getBodyPart(i, j)
    this.#snakeDetails[pos][0] = increment(i, maxHeight);
    if(this.getDirection(increment(i, maxHeight), j)) this.#snakeDetails[pos][2] = this.getDirection(increment(i, maxHeight), j);
    this.updateHead();
  	this.updateTail(pos, i, j)
  }
  moveUp(i, j, maxHeight) {
    let pos = this.getBodyPart(i, j)
    this.#snakeDetails[pos][0] = decrement(i, maxHeight);
    if(this.getDirection(decrement(i, maxHeight), j)) this.#snakeDetails[pos][2] = this.getDirection(decrement(i, maxHeight), j);
    this.updateHead();
  	this.updateTail(pos, i, j)
  }

  hasEaten(i, j, direction) {
    this.#score++;
    this.#snakeDetails.push([i, j, direction]);
  }
}
