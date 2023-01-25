import People from "./components/People";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import "./style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <People />
    </div>
  );
}

export default App;
