import { Link } from "react-router-dom";

export default function Home() {
  return (
<div style={
  {
     backgroundImage: "url(/assets/bg-asset.jpg)",
     backgroundRepeat: "round",
     backgroundSize: "100%",
     height: "100vh",
     opacity: "0.7",
     display: "grid"
  }
}>

  <button 
    style={
      {
        height: "70px",
        width: "500px",
        margin: "auto",
        fontSize: "50px",
        borderColor: "rgba(0, 167 , 255, 0.8)",
        borderRadius: "2rem",
        textAlign: "center",
        backgroundColor: "rgba(138, 230, 150, 0.8)"
      }
  }
  >
   <Link to="/math-battle" style={
     {textDecoration: "none", color: "tomato",}}
     >Play</Link>
  </button>
</div>
  )
}
