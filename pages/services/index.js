import Head from "next/head";
import React from "react";
import ServiceCard2 from "../../components/card/ServiceCard2";
import styles from "../../styles/pages/services/services.module.css";

function services() {
  return (
    <div className={styles.services}>
      <Head>
        <title>sord-dev | Services </title>
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
          {/* for each card's link to work, make a react component file at:
                            -- ./pages/services --
          the file's name must be LOWERCASE AND HYPHANATED.
          Eg. Web Development = web-development.js // Web Design = web-design.js */}
          <ServiceCard2
            title={"Web Development"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem."
            }
            imagePath={'/service-icons/development-icon.svg'}
          />
          <ServiceCard2
            title={"Web Design"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem."
            }
            imagePath={'/service-icons/design-icon.svg'}
            offset
          />
          <ServiceCard2
            title={"SEO Services"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem."
            }
            imagePath={'/service-icons/seo-icon.svg'}
          />
          <ServiceCard2
            title={"Website Audits"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem."
            }
            imagePath={'/service-icons/audit-icon.svg'}
          />
        </div>
      </div>
    </div>
  );
}

export default services;
