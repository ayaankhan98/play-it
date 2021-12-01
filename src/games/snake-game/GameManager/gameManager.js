import React, {useState, useEffect} from "react";
import getMap from "../Maps/maps";
import Board from "../Board/board";
import getFood from "../Food/food";
import styles from "./styles/gameManager.module.css";

function getGridSize(size) {
  if(size === "XL")return ([40, 16])
  if(size === "L") return ([30, 12])
  if(size === "M") return ([20, 8])
  if(size === "S") return ([10, 4])
}

export const GameManagerInit = (startingPoint, size, mapType) => {
    const [maxWidth, maxHeight] = getGridSize(size);
    let startX = startingPoint.x;
    let startY = startingPoint.y;
    let gridCondition = getMap(mapType, maxWidth, maxHeight);
    const food = getFood(gridCondition, maxWidth, maxHeight);
    gridCondition[startY][startX] = "Snake"
    gridCondition[food[1]][food[0]] = "Food";
    return gridCondition;
}

function GameManager(props) {
  const size = props.size;
  const [timer, setTimer] = useState(0);
  const [gridCondition, setGridCondition] = useState(props.gridCondition)

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer => timer + 1)
    }, props.frequency);
  }, [timer])

  const updateGrid = (newGrid) => {
    if(newGrid) setGridCondition([...newGrid]);
    else setGridCondition(false);
  }

  if(gridCondition) return (<div className={styles.gameBoard}>
    <Board updateGrid={updateGrid} snake={props.snake} size={size} gridCondition={[...gridCondition]} timer={timer}/></div>)
  else return (<div>
    <h1>Better Luck Next Time !</h1>
    <h2>Your Score :- {props.snake.playerScore}</h2>
    </div>)
}


export default GameManager;
