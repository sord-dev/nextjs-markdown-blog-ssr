import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// styles
import styles from "../styles/layout.module.css";

// images
import logo from "../public/logo.svg";
import githubIcon from "../public/github_logo.svg";
import emailLogo from "../public/email_icon.svg";

// components
import hamburger from "../public/hamburger.svg";
import MobileMenu from "./MobileMenu";
import ScrollToTop from "./ScrollToTop";

function Layout({ children }) {
  const [click, setClick] = useState(false);

  const handleHamburgerClick = () => setClick((prev) => !prev);

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
              <h1>sord-dev</h1>
            </div>
          </Link>

          <div className={styles.mobileMenu}>
            <Image
              src={hamburger}
              layout={"fixed"}
              height={"35px"}
              width={"35px"}
              alt="logo image"
              onClick={handleHamburgerClick}
            />
          </div>

          {click && <MobileMenu onClick={handleHamburgerClick} />}

          <div>
            <Link href={"/services"}>Services</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/contact"}>Contact</Link>
            <button>Free Growth Guide</button>
          </div>
        </div>
      </div>

      {children}
      <ScrollToTop />

      <div className={styles.footer}>
        <p> &copy; 2022 by Stefan Syrett </p>
        <div className={styles.links}>
          <Link href={"https://github.com/sord-dev"} target={"_blank"}>
            <div>
              <Image
                src={githubIcon}
                layout={"fixed"}
                height={"30px"}
                width={"30px"}
                alt="logo image"
              />
            </div>
          </Link>

          <Link
            href={"mailto:stefansyrett17@gmail.com"}
            target={"_blank"}
          >
            <div>
              <Image
                src={emailLogo}
                layout={"fixed"}
                height={"30px"}
                width={"30px"}
                alt="logo image"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Layout;
