import { useState } from "react";
import "./App.css";
import CityInputs from "./components/CityInputs";
import WeatherCard from "./components/WeatherCard";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
