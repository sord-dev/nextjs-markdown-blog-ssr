import Link from "next/link";
import React from "react";
import styles from "./servicecard2.module.css";

function ServiceCard2({ title, subtitle }) {
  const _buttonLink = `services/${title
    .split(" ")
    .join("-")
    .toLowerCase()}`;

  return (
    <div className={styles.serviceCard}>
      <div>
        <span>icon</span>
      </div>

      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <Link href={_buttonLink}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard2;
