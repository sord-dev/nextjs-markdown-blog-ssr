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
              <h3>Have a design already?</h3>          

              <p>I can create landing pages and websites from predefined designs if you already have an image in mind for what you&apos;d like your website to look like, making sure the implimentation is fully mobile responsive and runs as smoothly as possible.</p>
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

                <Link
                   href={"https://strapi.io"}
                  about={"link to strapi website"}
                  target={"_blank"}
                >
                  <img
                    src="/service-images/strapi-logo.svg"
                    alt="strapi logo"
                  />
                </Link>

                <Link
                   href={"https://nodejs.org/"}
                  about={"link to nodejs website"}
                  target={"_blank"}
                >
                  <img
                    src="/service-images/nodejs-logo.svg"
                    alt="nodejs logo"
                  />
                </Link>

                <Link
                   href={"https://www.php.net"}
                  about={"link to php website"}
                  target={"_blank"}
                >
                  <img
                    src="/service-images/php_icon.svg"
                    alt="php logo"
                  />
                </Link>
                
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h3>Dynamically updatable webpages</h3>
          <p>
          I use technologies like <a href="https://strapi.io" target="_blank" rel="noopener noreferrer">strapi</a>, beacause of this I&apos;ll be able to give you easy access to change the content of your website when the job is done.  
          </p>

          <br />

          <h3>Custom Wordpress Themes</h3>
          <p>
          If you have a site already running on Wordpress you can use a custom theme and keep all of your content basically the same. The same is true if you just have a design in mind and you&apos;d like to have it converted into a Wordpress theme. 
          </p>

      
        </div>

        <ContactCard />
      </div>
    </div>
  );
}

export default webDevelopment;
