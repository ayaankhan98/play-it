import './styles/App.css';
import GameManager, {GameManagerInit} from './GameManager/gameManager'
import Snake from "./Snake/snake";
import Queue from "./Utils/queue" 
import gameConstants from "./SnakeGameConfig";

const {
  gridSize,
  startingPoint,
  mapType, 
  snakeInitialDirection, 
  frequency
} = gameConstants;

function SnakeGame() {
  let snake = new Snake(startingPoint.x, startingPoint.y, snakeInitialDirection, gridSize);
  let queue = new Queue();
  let gridCondition = GameManagerInit(startingPoint, gridSize, mapType);
  return (
    <div className="App-header">
    <GameManager size={gridSize} gridCondition={[...gridCondition]} snake={snake} frequency={frequency} queue={queue}/>
    </div>
  );
}

export default SnakeGame;
