import './App.css';
import HomePage from "./components/home";
import Navbar from "./components/navbar";


function App() {
  
  return (
    <div className="App">
      <div className="outline" >
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
