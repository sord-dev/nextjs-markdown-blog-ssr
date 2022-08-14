import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/layout.module.css";
import logo from "../public/logo.svg";

function Layout({ children }) {
  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar}>
          <Link href={"/"}>
            <div>
              <Image
                src={logo}
                layout={"fixed"}
                height={"50px"}
                width={"50px"}
                alt="logo image"
              />
              <h1>SAVESITE</h1>
            </div>
          </Link>

          <div>
            <Link href={"/services"}>Services</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/contact"}>Contact</Link>
            <button>Free Growth Guide</button>
          </div>
        </div>
      </div>
      {children}

      <div className={styles.footer}>
        <p> &copy; 2022 by Stefan Syrett </p>
        <div>
          <span>mediaIcon</span>
          <span>mediaIcon</span>
        </div>
      </div>
    </>
  );
}

export default Layout;
