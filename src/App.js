import logo from "./logo.svg";
import "./App.css";
import GradConverter from "./components/GradConverter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <img src={logo} alt="logo" className="App-logo" />
      <div className="App">
        <GradConverter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
