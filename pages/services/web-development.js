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
              <h3>You should probably read this.</h3>
              <p>
              I don&pos;t think having all these pages is all that user friendly or easy for someone to make a buying decision. 
              </p>

              <p>I&pos;m taking it upon myself to explain what I&pos;m good at rather than what i can do for the customer. To change this the best thing to do is to split the services up into an actual <a href="https://docs.google.com/document/d/14Md3zH4aqqMORDfbnoTi3lKQlTwT-3QWLHfv7dGzoMY/edit#">service menu</a> with different ctas and landing pages perhaps.</p>
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
          <h3>This too...</h3>
          <p>
           What I mean by this is that you need to make clear services people can buy and would actually want when it comes to a small business. Design and make a website, or just design it. Manage SEO for an existing website or make it a coninual service. 
          </p>

          <p>
          While it&pos;s nice to go over hypotheticals all the time it&pos;s also nice to stay within the realm of possiblility. What at the moment are you capable of and what do you need to imporve to make money? You&pos;re going to have to go back from react and learn html and css properly to get your styling working I believe. 
          </p>
        </div>

        <ContactCard />
      </div>
    </div>
  );
}

export default webDevelopment;
