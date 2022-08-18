import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/pages/servicepage.module.css";
import MarkDown from "markdown-to-jsx";

const dummyrichtext =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis ea nostrum optio neque commodi eaque pariatur porro fugit, voluptatum repellat voluptates sed nesciunt facere eligendi, incidunt illo? Natus sint quisquam repellat earum nobis ratione laboriosam, ex harum? Delectus magnam ullam necessitatibus optio autem totam dolores nulla magni, natus quibusdam!";

const DATA = [
  {
    title: "Website Audits",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem.",
    target: "website-audits",
  },
  {
    title: "SEO Services",
    subtitle:
      "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.",
    target: "SEO",
  },
  {
    title: "Web Design",
    subtitle:
      "All my websites are designed with an inherent understanding of brand communication, information architecture, accessibility and usability",
    target: "web-design",
  },
  {
    title: "Web Development",
    subtitle:
      "All my websites are designed with an inherent understanding of brand communication, information architecture, accessibility and usability",
    target: "web-development",
  },
];

function ServiceId() {
  const { query } = useRouter(), pageData = DATA.filter((page) => page.target == query.serviceId)[0];


  return (
    <div>
      <div className={styles.hero}>
        <div>
          <h1>{pageData.title}</h1>
          <h2>{pageData.subtitle}</h2>
        </div>
      </div>

      <div className="containertext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minima alias architecto asperiores! Amet ea, obcaecati voluptatibus, facere, dolore at deserunt dignissimos corrupti dolorem dolor quidem tempora aspernatur hic dicta?
      </div>
    </div>
  );
}



export default ServiceId;
