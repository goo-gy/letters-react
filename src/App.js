import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home";
import Dropdown from "./shared/Dropdown"

function App() {
  return (
    <div>
      <Home />
      <div className="border-4 border-dashed text-center">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
