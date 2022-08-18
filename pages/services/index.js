import Head from "next/head";
import React from "react";
import ServiceCard2 from "../../components/card/ServiceCard2";
import styles from "../../styles/pages/services.module.css";

function services() {
  //TODO 
  // ADD RESPONSIVITY!!!

  return (
    <div className={styles.services}>
      <Head>
        <title>My Services</title>
        <meta
          name="description"
          content="The services I provide as a Freelancer."
        />
        <meta
          name="keywords"
          content="freelancer, freelancer london, responsive web design, local web design, web designers near me, freelance web developer, local web developer, web developer, seo services, local seo services, web design services, web development services, website help"
        />
      </Head>

      <div className="container">
        <div className={styles.title}>
          <h1>Services</h1>
          <h2>
            Add a decent subtitle here, it does matter if it&apos;s longer it
            adds professionalism
          </h2>
        </div>

        <div className={styles.content}>
          {/* for each card's link to work, make a file at ./pages/services that is LOWERCASE AND HYPHANATED. Eg. Web Development = web-development.js // Web Design = web-design.js */}
          <ServiceCard2
            title={"Web Development"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem."
            }
          />
          <ServiceCard2
            title={"Web Design"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem."
            }
          />
          <ServiceCard2
            title={"SEO Services"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem."
            }
          />
          <ServiceCard2
            title={"Website Audits"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default services;
