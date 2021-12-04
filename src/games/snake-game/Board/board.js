import React, {useEffect, useRef} from "react";
import Block from "./block";
import styles from "./styles/board.module.css";
import getFood from "../Food/food"

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

function gameLoop(gridCondition_, snake, size) {
    const [maxWidth, maxHeight] = getGridSize(size);
    const snakeDetails = snake.getDetails;
    const len = snakeDetails.length;

    let gridCondition = [...gridCondition_];
    let hasEaten = false;

    for(let c = 0; c < len; ++c){
      const i = snakeDetails[c].at(0);
      const j = snakeDetails[c].at(1);
      const direction = snakeDetails[c].at(2);
      let nextI = i;
      let nextJ = j;
      if(direction === "left") {
        nextJ = decrement(j, maxWidth);
      };
      if(direction === "right") {
        nextJ = increment(j, maxWidth);
      }      
      if(direction === "down") {
        nextI = increment(i, maxHeight);
      }
      if(direction === "up") {
        nextI = decrement(i, maxHeight);
      }

      if(gridCondition[nextI][nextJ] === "Empty") {
        gridCondition[nextI][nextJ] = "Snake";
        gridCondition[i][j] = "Empty";
        snake.move(i, j, nextI, nextJ);
      }
      else if(gridCondition[nextI][nextJ] === "Food") {
        gridCondition[nextI][nextJ] = "Snake";
        gridCondition[i][j] = "Empty";
        snake.move(i, j, nextI, nextJ);
        hasEaten = true;
      }
      else if(gridCondition[nextI][nextJ] === "Wall" || gridCondition[nextI][nextJ] === "Snake") {
        return false;
      }

      if(c === len - 1 && hasEaten) {
        gridCondition[i][j] = "Snake";
        snake.hasEaten(i, j, direction);
        const food = getFood(gridCondition, maxWidth, maxHeight);
        gridCondition[food[1]][food[0]] = "Food"
      }

    }

    return gridCondition;
}

function mapKeyToDirection(key) {
  if(key === "ArrowUp") return "up";
  if(key === "ArrowDown") return "down";
  if(key === "ArrowLeft") return "left";
  if(key === "ArrowRight") return "right";
}

function getOppositeDirection(direction) {
  if(direction === "up") return "down";
  if(direction === "down") return "up";
  if(direction === "left") return "right";
  if(direction === "right") return "left";
}

function Board(props) {
  const maxHeight = props.gridCondition.length;
  const maxWidth = props.gridCondition[0].length;
  const size = props.size;
  const tick = props.tick;
  const timer = props.timer;
  const gameInput = useRef(0);

  let gridCondition = [...props.gridCondition];
  let snake = props.snake;
  let queue = props.queue;

  const handleKeyDown = (event) => {
    queue.push(mapKeyToDirection(event.key));
  }

  const effectFunction = () => {
    const direction = queue.pop();
    if(direction) {
      const snakeDirection = snake.snakeHead.direction;
      if(snakeDirection !== getOppositeDirection(direction)) snake.setDirection(direction); 
    };
    let newGridCondition = gameLoop(gridCondition, snake, size);
    if(newGridCondition) props.updateGrid([...newGridCondition]);
    else props.updateGrid(newGridCondition);

    props.updateTick(timer);
  }
  
  useEffect(() => {
    gameInput.current.focus();
    if(timer !== tick) effectFunction()
  });

  const test = [];

  for(let i=0; i<maxHeight; ++i) {
    for(let j=0; j<maxWidth; ++j) 
      test.push(<Block key={i*maxWidth + j}
	      	      size={size} 
                      blockType={props.gridCondition[i][j]} 
                      timer={props.timer}
                      updateGrid={props.updateGrid}
                />);
  }

  return <div className={styles.board} tabIndex="0" onKeyDown={handleKeyDown} ref={gameInput}>{test}</div>
} 

export default Board;
   
