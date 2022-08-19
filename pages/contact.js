import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

//images
import githubLogo from "../public/github_logo_black.svg";
import emailLogo from "../public/email_icon_black.svg";
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

  const validate = (formData) => {
    if (formData.name == "" || formData.name == null)
      return { error: { message: "name is missing" } };
    if (formData.email == "" || formData.email == null)
      return { error: { message: "email is missing" } };
    if (!formData.email.includes('@') || !formData.email.includes('.'))
      return { error: { message: "email is incorrect" } };
    if (formData.message == "" || formData.message == null)
      return { error: { message: "message is missing" } };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    if (!validate(formData)) {
      console.log(formData);
      _cleardata();
    }
    else{
      console.log(validate(formData));
    }
    
  };

  return (
    <div>
      <Head>
        <title>sord-dev | Contact</title>
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
            <Link href={"https://github.com/sord-dev"} target={"_blank"}>
              <div>
                {" "}
                <Image
                  src={githubLogo}
                  width={"80px"}
                  height={"80px"}
                  alt={"github icon"}
                />{" "}
              </div>
            </Link>
            <Link href={"mailto:stefansyrett17@gmail.com"} target={"_blank"}>
              <div>
                {" "}
                <Image
                  src={emailLogo}
                  width={"80px"}
                  height={"80px"}
                  alt={"instagram icon"}
                />{" "}
              </div>
            </Link>
            <Link href={"tel:07932893431"} target={"_blank"}>
              <div>
                {" "}
                <Image
                  src={phoneLogo}
                  width={"80px"}
                  height={"80px"}
                  alt={"github icon"}
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
