import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/pages/404.module.css";

function Error() {
  return (
    <div className={styles.error}>
      <Head>
        <title>Page Not Found!</title>
      </Head>

      <div>
        <h1>404 page not found</h1>{" "}
        <p>
         The page you&apos;re looking for couldn&apos;t be found, please return to the main site using <Link href={'/'} >this link.</Link>
        </p>
      </div>
    </div>
  );
}

export default Error;
