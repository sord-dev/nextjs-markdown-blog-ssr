import Head from "next/head";
import React from "react";
import ServiceCard2 from "../../components/card/ServiceCard2";
import styles from "../../styles/pages/services.module.css";

const DATA = [
  {
      title: "Web Development",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem.",
      buttonText: "Read More",
      _buttonLink: "services/web-development",
   
  },

  {
    
      title: "Web Design",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem.",
      buttonText: "Read More",
      _buttonLink: "services/web-design",
  },

  {
      title: "SEO Services",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem.",
      buttonText: "Read More",
      _buttonLink: "services/SEO",
   
   
  },

  {
    title: "Website Audits",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem.",
    buttonText: "Read More",
    _buttonLink: "services/website-audits",
  },
];

function services() {
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
          {DATA.map((service) => (
            <ServiceCard2 key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}



export default services;
