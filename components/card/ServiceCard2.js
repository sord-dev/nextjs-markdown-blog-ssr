import Link from "next/link";
import React from "react";
import styles from "./servicecard2.module.css";

function ServiceCard2({ title, subtitle, imagePath, offset }) {
  const _buttonLink = `services/${title
    .split(" ")
    .join("-")
    .toLowerCase()}`;

  return (
    <div className={styles.serviceCard}>
      <div>
        <img className={offset ? styles.offset : ''} src={imagePath} alt={`${title.toLowerCase()} service icon`} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <Link href={_buttonLink} about={`link to ${title.search(/service/ig) > 0 ? `${title} page` : `${title} services page`}`}>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard2;
