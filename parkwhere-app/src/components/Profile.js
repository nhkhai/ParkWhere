import React from "react";
import styles from "./Profile.module.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

export default function Profile({ src, alt, header, githubLink }) {
  return (
    <div>
      <img src={src} alt={alt} className={styles.profile} />
      <h3>{header}</h3>
      <h3>
        <a href={githubLink}>
          <img src={github} className={styles.logo} alt="github-logo" />
        </a>
        <a href={githubLink}>
          <img src={linkedin} className={styles.logo} alt="linkedin-logo" />
        </a>
        <a href={githubLink}>
          <img src={instagram} className={styles.logo} alt="instagram-logo" />
        </a>
      </h3>
    </div>
  );
}
