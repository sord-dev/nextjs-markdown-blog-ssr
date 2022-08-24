import Head from "next/head";
import React from "react";

// components
import ServiceCard2 from "../../components/card/ServiceCard2";
import MobileServiceCard from "../../components/card/MobileServiceCard";

// styles
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
              "My development process prioritises fast and user-accessible websites. Catoring to all devices and screen sizes to allow for the best user experience."
            }
            imagePath={"/service-icons/development-icon.svg"}
          />
          <ServiceCard2
            title={"Web Design"}
            subtitle={
              "All my websites are designed with an inherent understanding of brand communication, information architecture, accessibility and usability."
            }
            imagePath={"/service-icons/design-icon.svg"}
            offset
          />
          <ServiceCard2
            title={"SEO Services"}
            subtitle={
              "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines."
            }
            imagePath={"/service-icons/seo-icon.svg"}
          />
          <ServiceCard2
            title={"Website Audits"}
            subtitle={
              "Already have a website? I'll look over it and produce a pdf report detailing any improvements that you could impliment."
            }
            imagePath={"/service-icons/audit-icon.svg"}
          />
        </div>

        <div className={styles.mobileMenu}>
          <MobileServiceCard
            service={"Web Development"}
            description={
              "My development process prioritises fast and user-accessible websites. Catoring to all devices and screen sizes to allow for the best user experience."
            }
            imagePath={"/service-icons/development-icon.svg"}
          />
          <MobileServiceCard
            service={"Web Design"}
            description={
              "All my websites are designed with an inherent understanding of brand communication, information architecture, accessibility and usability."
            }
            imagePath={"/service-icons/design-icon.svg"}
          />
          <MobileServiceCard
            service={"SEO Services"}
            description={
              "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines."
            }
            imagePath={"/service-icons/seo-icon.svg"}
          />

          <MobileServiceCard
            service={"Website Audits"}
            description={
              "Already have a website? I'll look over it and produce a pdf report detailing any improvements that you could impliment."
            }
            imagePath={"/service-icons/audit-icon.svg"}
          />
        </div>
      </div>
    </div>
  );
}

export default services;
