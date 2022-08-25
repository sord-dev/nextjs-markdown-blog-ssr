import Head from "next/head";
import React from "react";
import styles from "../../styles/servicepage.module.css";
import ContactCard from "../../components/card/ContactCard";

function SEO() {
  return (
    <div>
      <Head>
        <title>SEO Services</title>
        <meta
          name="description"
          content="Freelance SEO Services to get more leads."
        />
        <meta
          name="keywords"
          content="freelancer, freelancer london, seo, local seo services, how to get leads, get more clients, rank on google, google ranking, search engine optimisation"
        />
      </Head>

      <div className={styles.hero}>
        <div>
          <h1>SEO Services</h1>
          <h2>
            Search engine optimization is the process of improving the quality
            and quantity of website traffic to a website or a web page from
            search engines. SEO targets unpaid traffic rather than direct
            traffic or paid traffic.
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

export default SEO;
