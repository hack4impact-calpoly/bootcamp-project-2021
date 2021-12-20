import React from "react";
import styles from "../styles/RecipePreview.module.css";
import { Link } from "react-router-dom";

export default function RecipePreview(props) {
  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.name} />
      <div>
        <Link to={`/recipePage/${props.name.split(" ").join("-")}`}>
          {props.name}
        </Link>
        <p className={styles.description}>{props.desc}</p>
      </div>
    </div>
  );
}
