import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Style.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Dash from "./pages/Dash";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dash />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
