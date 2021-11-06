import React from "react";
import "./about.css";

export default function About() {
  return (
    <div>
      <h1>About Author</h1>
      <p>I am a second-year CS major who has seen other people make food.</p>
      <h4 className="author-heading">Qualifications</h4>
      <ul>
        <li>Made eggs everyday for a year</li>
        <li>Participated in a friendly cookoff (lost)</li>
        <li>Seen Chef</li>
      </ul>
    </div>
  );
}
