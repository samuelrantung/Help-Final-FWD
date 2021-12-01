import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
  <>
  <Link exact to="/">Home</Link>
      <Link exact to="/About">About</Link>
  <h1>About</h1>
  </>
  )
}

export default About;
