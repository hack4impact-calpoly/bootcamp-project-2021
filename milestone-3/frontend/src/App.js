import styles from "./App.css";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>bora's bakery 🍞</h1>
        <nav>
          <Link className={styles.link} to='/'>
            home
          </Link>
          <Link className={styles.link} to='about'>
            about me
          </Link>
        </nav>
        <Outlet />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='recipePage/:name' element={<RecipePage />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
