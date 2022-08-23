import Head from "next/head";
import React from "react";
import ContactCard from "../../components/card/ContactCard";
import styles from "../../styles/pages/services/servicepage.module.css";

function webDevelopment() {
  return (
    <div>
      <Head>
        <title>Website Auditing Services</title>
        <meta
          name="description"
          content="Get pointers and suggestions on how to improve your website to get more clients!"
        />
        <meta
          name="keywords"
          content="website audits, rate my site, SEO optimising, website problems, website check up"
        />
      </Head>
      <div className={styles.hero}>
        <div>
          <h1>Website Audits</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est
            libero temporibus alias enim beatae fugit eveniet vel, obcaecati
            eaque deserunt, numquam consequuntur placeat quisquam autem.
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

export default webDevelopment;
