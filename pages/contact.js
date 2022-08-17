import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

//images
import githubLogo from "../public/github_logo_black.svg";
import instagramLogo from "../public/instagram_logo_black.svg";
import phoneLogo from "../public/phone_icon.svg";

//styles
import styles from "../styles/pages/contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const _cleardata = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  // ADD FORM VALIDATION + connection to email
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    console.log(formData);
    _cleardata();
  };

  return (
    <div>
      <Head>
        <title>Contact Me!</title>
        <meta
          name="description"
          content="Want me to rate your website? Get in touch with me!"
        />
      </Head>

      <div className="container">
        <div className={styles.title}>
          <h1>Get in touch</h1>
          <p>
            Want to have a talk about what your website could be missing? Give
            me an email!
          </p>
        </div>
        <div className={styles.group}>
          <div className={styles.media_icons}>
            <Link href={"https://github.com/sord-dev"}>
              <div>
                {" "}
                <Image
                  src={githubLogo}
                  width={"80px"}
                  height={"80px"}
                  alt={"github icon"}
                  color={"black"}
                />{" "}
              </div>
            </Link>
            <Link
              href={"https://www.instagram.com/explore/tags/website/?hl=en"}
            >
              <div>
                {" "}
                <Image
                  src={instagramLogo}
                  width={"80px"}
                  height={"80px"}
                  alt={"instagram icon"}
                  color={"black"}
                />{" "}
              </div>
            </Link>
            <Link href={"tel:07932893431"}>
              <div>
                {" "}
                <Image
                  src={phoneLogo}
                  width={"80px"}
                  height={"80px"}
                  alt={"github icon"}
                  color={"black"}
                />{" "}
              </div>
            </Link>
          </div>

          <div className={styles.contact_form}>
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button onClick={(e) => handleFormSubmit(e)}>Contact</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// es lint workaround
const contact = Contact;

export default contact;
