import {useState, useRef, useEffect} from 'react';
import './MathBattle.module.css';

export default function MathBattle() {
  const [level, setLevel] = useState(1);
  const [num1, setNum1] = useState(Math.ceil(Math.random() * level * 5 + 1));
  const [num2, setNum2] = useState(Math.ceil(Math.random() * level * 5 + 1));
  const [operator, setOperator] = useState("+");
  const [score, setScore] = useState(0);
  const [bgColor, setbgColor] = useState("#b1edaf");
  const [questionColor, setQuestionColor] = useState("rgba(12, 120, 124, 1.0)");
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(10);
  const inputRef = useRef(null);
  const colors = [
   "#fdbebe",
   "#ffc1b5",
   "#ffc5ac",
   "#fbcaa5",
   "#f4cfa0",
   "#ebd59e",
   "#dfdc9f",
   "#d2e2a4",
   "#c2e8ad",
   "#b1edb9",
   "#b1edbf",
  ]

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timer > 0) {
        setbgColor(colors[timer])
        setQuestionColor("rgba(12, 120, 124, 1.0)"); 
        setTimer(timer - 1);
      } else {
        setGameOver(true);
      }
    }, 1000)
    return () => {
      clearInterval(timerId);
    }
  });

  const getRandomOperator = () => {
    const val = Math.ceil(Math.random() * 4);
    switch(val) {
      case 1: setOperator("+");
      break;
      case 2: setOperator("-");
      break;
      case 3: setOperator("/");
      break;
      case 4: setOperator("*");
      break;
      default: setOperator("+");
    }
  }

  const setQuestion = () => {
    setNum1(Math.ceil(Math.random() * level * 5 + 10));
    setNum2(Math.ceil(Math.random() * level * 5 + 1));
  }

  const resetGame = () => {
    setTimer(10);
    setScore(0);
    setQuestionColor("rgba(12, 120, 124, 1.0)");      
    setGameOver(false);
    setbgColor("#b1edaf");
    setLevel(1);
    inputRef.current.val = "";
    setQuestion();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userAnswer = parseInt(inputRef.current.value);
    let isCorrect = false;
    switch(operator) {
     case "+":
       if (num1 + num2 === userAnswer) {
         isCorrect = true;
       }
       break;

    case "-":
      if (num1 - num2 === userAnswer) {
        isCorrect = true;
      }
      break;
    
      case "/":
        if (parseInt(num1 / num2) === userAnswer) {
          isCorrect = true;
        }
      break;

      case "*":
        if (num1 * num2 === userAnswer) {
          isCorrect = true;
        }
        break;
      default:
        return;
    }
    inputRef.current.focus();

    if (isCorrect) {
      setScore(score + 1);
      setQuestion();
      getRandomOperator();
      setbgColor("rgba(0, 160, 00, 0.3)")
      setTimer(10);
      if (score >= 5 && score % 3 === 0) {
        setLevel(level + 1);
      }
    } else {
      if (score > 0) {
        setScore(score - 1);
      }
      if (parseInt(score) <= 1) {
        setGameOver(true);
        setTimer(0);
      }
      setLevel(level + 2);
      setbgColor("rgba(160, 0, 0, 0.3)")
      setQuestionColor("rgba(255, 0,0, 0.7)")
    }

    inputRef.current.value = " "
  }

  return (
    <div className="App" style={{
      display: 'block',
      backgroundColor: bgColor,
      height: "100vh",
    }}>
      <div style={{
        marginBottom: "3rem",
        marginLeft: "3rem",
        marginRight: "3rem",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "5rem",
      }}>
        <span className="score" style={
          {
            float: 'left',
            color: "rgb(72, 146, 54)",
            fontSize: "50px",
            fontVariant: "small-caps",
          }
        }>Score: {score}</span>
        <span className="level" style={
          {
            float: 'right',
            color: "rgb(230, 113, 113)",
            fontSize: "50px",
          }
        }>Level: {level}</span>
        <span className="timer" style={
          {
            float: 'right',
            color: "#000",
            fontSize: "50px",
          }
        }>Time Left: {timer}</span>
      </div>
      <h1 className="expression"
        style={
          {
            marginTop: "8rem",
            color: questionColor,
            fontSize: "100px",
            textAlign: "center",
            justifyContent: "center",
          }
      }>{num1} {operator} {num2}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} disabled={gameOver} placeholder="Type Answer..."></input>
      </form>
      {gameOver && <h1
        style={
          {
            color: "yellow",
            fontSize: "40px",
            textAlign: "center",
            fontFamily: "'Satisfy', cursive",
          }
        }
      >X Game Over X</h1> }
      {gameOver && 
      <h2 
      style={
        {
          color: "yellow",
          fontSize: "40px",
          textAlign: "center",
          fontFamily: "'Satisfy', cursive",
        }
      }
      >
          Your Score: {score}
      </h2>}
      {gameOver && <button
        style={
          {
            width: "300px",
            height: "80px",
            backgroundColor: "rgba(0,200, 200,0.5)",
            border: "none",
            justifyContent: "center",
            flexDirection: "column",
            display: "block",
            margin: "auto",
            textAlign: "center",
            fontSize: "60px",
            padding: "4rem",
            color: "white",
            fontWeight: "bold",
            fontFamily: "'Satisfy', cursive",
          }
        }
        onClick={resetGame}
      >Restart</button>}
    </div>
  );
}
