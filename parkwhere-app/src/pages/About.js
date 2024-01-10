// import { Link, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <h2>Parking lot availability at a glance! </h2>
      <p>
        This web app allows you to search for parking availability based on the
        carpark location.{" "}
      </p>
      <nav>{/* <Link to="/about-us/contact-us">Contact Us</Link> | */}</nav>
      <Outlet />
    </div>
  );
}

export default About;
