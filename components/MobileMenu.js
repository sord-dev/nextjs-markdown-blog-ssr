import Link from "next/link";
import React from "react";
import styles from "../styles/mobilemenu.module.css";

function MobileMenu({onClick}) {
  return (
    <div className={styles.mobileMenu}>
      <h2 onClick={onClick}>X</h2>

      
        <Link href={"/services"}>Services</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
        <button>Free Growth Guide</button>
      
    </div>
  );
}

export default MobileMenu;
