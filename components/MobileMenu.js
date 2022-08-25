import Link from "next/link";
import React from "react";
import styles from "../styles/mobilemenu.module.css";
import logo from "../public/logo.svg";
import Image from "next/image";

function MobileMenu({ onClick }) {
  return (
    <div className={styles.mobileMenu}>
      <h2 onClick={onClick}>X</h2>

      <div>
        <Link href={"/services"}>
        <a onClick={onClick}>Services</a>
        </Link>
        <Link  href={"/blog"}>
        <a onClick={onClick}>Blog</a>
        </Link>
        <Link href={"/contact"}>
          <a onClick={onClick}>Contact</a>
        </Link>
        <button onClick={onClick}>Free Growth Guide</button>
      </div>

      <Link href={"/"}>
        <span onClick={onClick} className={styles.image}>
          <Image
            src={logo}
            layout={"fixed"}
            height={"50px"}
            width={"50px"}
            alt="logo image"
          />
        </span>
      </Link>
    </div>
  );
}

export default MobileMenu;
