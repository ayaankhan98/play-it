import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import MathBattle from './games/math-battle/MathBattle'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/math-battle" element={<MathBattle />}></Route>
      </Routes>
    </BrowserRouter>

  )
}