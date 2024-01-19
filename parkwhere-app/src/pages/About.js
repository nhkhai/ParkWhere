// import { Link, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";

import styles from "./About.module.css";
import Profile from "../components/Profile";

function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <h2>Parking lot availability at a glance! </h2>
      <p>
        This web app allows you to search for parking availability based on the
        carpark location.{" "}
      </p>
      <br />
      <p>For further enquiries, contact us at:</p>
      <div className={styles.profileCards}>
        <Profile
          src={cat1}
          alt="profile pic"
          header="Caelen"
          githubLink="https://github.com/jclcaelen"
        />
        <Profile
          src={cat2}
          alt="profile pic"
          header="Yong Long"
          githubLink="https://github.com/ylongtay"
        />
        <Profile
          src={cat3}
          alt="profile pic"
          header="Heng Khai"
          githubLink="https://github.com/nhkhai"
        />
        <Profile
          src={cat4}
          alt="profile pic"
          header="Izzat"
          githubLink="https://github.com/kiblykat"
        />
      </div>
      <nav>{/* <Link to="/about-us/contact-us">Contact Us</Link> | */}</nav>
      <Outlet />
    </div>
  );
}

export default About;
