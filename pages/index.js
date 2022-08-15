import Head from "next/head";
import Card from "../components/Card";
import Hero from "../components/home/Hero";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stefan Syrett - Freelance Web Design and Development</title>
        <meta
          name="description"
          content="Freelance Web Designer/Developer based in London UK. Providing SEO, Web Design and Development services."
        />
        <meta
          name="keywords"
          content="freelancer, freelancer london, responsive web design, local web design, web designers near me, freelance web developer, local web developer, web developer, seo services, local seo services"
        />
      </Head>

      <Hero />

      <div className="container">
        

        <div className={styles.services}>
          <h3>SERVICES</h3>
          <h2>A website should be a solution, not a problem</h2>

          <div>
            <Card type={'service'} />
            <Card type={'service'} />
            <Card type={'service'} />
          </div>
        </div>
      </div>
    </div>
  );
}
