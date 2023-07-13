import "./App.css";
import { Counter } from "./components/Counter";
import { SingleLight } from "./components/SingleLight";

function App() {
  return (
    <div>
      <nav className="nav">
        <text>0 bulbs</text>
        <Counter text={"rows"} count={0} />
        <Counter text={"columns"} count={0} />
      </nav>
      <SingleLight />
    </div>
  );
}

export default App;
