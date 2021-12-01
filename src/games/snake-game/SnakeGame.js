import './styles/App.css';
import GameManager, {GameManagerInit} from './GameManager/gameManager'
import Snake from "./Snake/snake";

const gridSize = "L";
const startingPoint = {x : 5, y : 5}
const mapType = "BorderMap"
const snakeInitialDirection = "right"
const frequency = 100;

function SnakeGame() {
  let snake = new Snake(startingPoint.x, startingPoint.y, snakeInitialDirection, gridSize);
  let gridCondition = GameManagerInit(startingPoint, gridSize, mapType);
  return (
    <div className="App-header">
    <GameManager size={gridSize} gridCondition={[...gridCondition]} snake={snake} frequency={frequency}/>
    </div>
  );
}

export default SnakeGame;
