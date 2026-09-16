// import logo from "./logo.svg";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import Title from "./components/UI/Title";


function App() {
  useEffect(() => {
    console.log("component loaded");
  }, []);


  return (
    <div>
      <Title title="Welcome to my portfolio " />
    
    </div>
  );
}

export default App;
