import Head from "next/head";
import React from "react";
import styles from "../styles/pages/404.module.css";

function Error() {
  return (
    <div className={`${styles.error}`}>
      <Head>
        <title>Page Not Found!</title>
      </Head>

      <div>
        <h1>404 page not found</h1>{" "}
        <p>
          This website is still a work in progress, so pages are missing.
          I&apos;m sorry!{" "}
        </p>
      </div>
    </div>
  );
}

export default Error;
