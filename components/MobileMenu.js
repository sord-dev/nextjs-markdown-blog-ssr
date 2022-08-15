import Link from "next/link";
import React from "react";
import styles from "../styles/mobilemenu.module.css";
import logo from "../public/logo.svg";
import Image from "next/image";

function MobileMenu({ onClick }) {
  const ImageContainer = () => <div></div>;

  return (
    <div className={styles.mobileMenu}>
      <h2 onClick={onClick}>X</h2>

      <Link href={"/services"}>Services</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/contact"}>Contact</Link>
      <button>Free Growth Guide</button>

      <Link href={"/"}>
        <span className={styles.image}>
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
