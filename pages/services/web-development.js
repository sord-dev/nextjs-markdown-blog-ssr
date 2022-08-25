import React from "react";
import styles from "../../styles/servicepage.module.css";
import ContactCard from "../../components/card/ContactCard";
import Head from "next/head";
import Link from "next/link";

function webDevelopment() {
  return (
    <div>
      <Head>
        <title>Web Development Services</title>
        <meta
          name="description"
          content="Providing clean, modern and well structured webpages."
        />
        <meta
          name="keywords"
          content="web developer, freelance web dev london, web development, local web development services, web dev, local website development, website structure, website design"
        />
      </Head>

      <div className={styles.hero}>
        <div>
          <h1>Web Development</h1>
          <h2>
            My development process prioritises fast and user-accessible
            websites. Catoring to all devices and screen sizes to allow for the
            best user experience.
          </h2>
        </div>
      </div>

      <div className="containertext">
        <div className={styles.content}>
          <div className={styles.contentSideBar}>
            <div>
              <h3>What is This?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit minima alias architecto asperiores! Amet ea, obcaecati
                voluptatibus, facere, dolore at deserunt dignissimos corrupti
                dolorem dolor quidem tempora aspernatur hic dicta?
              </p>
            </div>

            <div>
              <h3>Tools Used</h3>
              <div className={styles.iconGrid}>
                <Link
                  href={"https://code.visualstudio.com"}
                  about={"link to vs code website"}
                  target={"_blank"}
                >
                  <img src="/service-images/vs-icon.svg" alt="vs code logo" />
                </Link>

                <Link
                   href={"https://reactjs.org"}
                  about={"link to reactjs website"}
                  target={"_blank"}
                >
                  <img
                    src="/service-images/react-icon.svg"
                    alt="react logo"
                  />
                </Link>
                
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h3>My Process</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            minima alias architecto asperiores! Amet ea, obcaecati voluptatibus,
            facere, dolore at deserunt dignissimos corrupti dolorem dolor quidem
            tempora aspernatur hic dicta?
          </p>
        </div>

        <ContactCard />
      </div>
    </div>
  );
}

export default webDevelopment;
