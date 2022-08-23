import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import styles from "./hero.module.css";
import Link from "next/link";

function Hero({title, subtitle}) {
  return (
    <div className={styles.hero}>
      <div>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>
            {subtitle}
          </p>

          <Link href={'/contact'}><button> Contact Me </button></Link>
        </div>

        <div className={styles.image}>
          <Image src={logo} alt={"hero banner logo"} width={'170px'}></Image>
        </div>

      </div>
    </div>
  );
}

export default Hero;
