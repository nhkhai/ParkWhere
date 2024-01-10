// import { Link, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h2>About</h2>
      <h3>Parking lot availability at a glance! </h3>
      <p>
        This web app allows you to search for parking availability based on the
        carpark location.{" "}
      </p>
      <nav>{/* <Link to="/about-us/contact-us">Contact Us</Link> | */}</nav>
      <Outlet />
    </>
  );
}

export default About;
