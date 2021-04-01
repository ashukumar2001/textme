import "./App.css";
import Login from "./components/Login";
import SetProfile from "./components/SetProfile";
function App() {
  return <div className="app">{true ? <SetProfile /> : <Login />}</div>;
}

export default App;
