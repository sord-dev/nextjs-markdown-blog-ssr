import React from "react";
import styles from "../../styles/pages/services/servicepage.module.css";
import ContactCard from "../../components/card/ContactCard";
import Head from "next/head";

function webDesign() {
  return (
    <div>
      <Head>
        <title>Web Design Services</title>
        <meta name="description" content="Providing clean, modern and well structured webpages." />
        <meta
          name="keywords"
          content="web design, freelance web design london, seo, local web design services, web designer, local website designing, website structure, website design"
        />
      </Head>

      <div className={styles.hero}>
        <div>
          <h1>Web Design</h1>
          <h2>
            All my websites are designed with an inherent understanding of brand
            communication, information architecture, accessibility and usability
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
                <span>icon</span>
                <span>icon</span>
                <span>icon</span>
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

export default webDesign;
