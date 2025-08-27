import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Home/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
