import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import MathBattle from './games/math-battle/MathBattle'
import SnakeGame from './games/snake-game/SnakeGame'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/math-battle" element={<MathBattle />}></Route>
        <Route path="/snake-game" element={<SnakeGame />}></Route>
      </Routes>
    </BrowserRouter>

  )
}
