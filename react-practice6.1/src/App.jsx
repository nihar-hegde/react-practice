import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const onClickHandler = () => {
    setNumber(Math.random());
  };
  return (
    <>
      <button onClick={onClickHandler}>Click me to change title</button>
      <Header title={`Hello the number is ${number}`} />
      <Header title="Hello bro 2.0" />
    </>
  );
}

export default App;
