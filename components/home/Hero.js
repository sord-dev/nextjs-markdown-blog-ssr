import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <div className={styles.content}>
          <h1>Testing this headline</h1>
          <p>
            I&apos;m also testing this subtitle too, it&apos;s going to be a
            little longer.
          </p>

          <button> Main CTA </button>
        </div>

        <div className={styles.image}>
          <Image src={logo} alt={"hero banner logo"} width={'170px'}></Image>
        </div>

      </div>
    </div>
  );
}

export default Hero;
