import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
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
    </header>
  );
}
