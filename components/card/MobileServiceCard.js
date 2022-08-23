import Link from "next/link";
import React from "react";
import styles from './mobileservicecard.module.css'

function MobileServiceCard({ service, description, imagePath, offset }) {
  const link = "/services/" + service.split(" ").join("-").toLowerCase();
  return (
    <Link
      about={`link to ${
        service.search(/service/gi) > 0
          ? `${service} page`
          : `${service} services page`
      }`}
      href={link}
    >
      <div className={styles.mobileServiceCard}>
        <h3>{service}</h3>

        <img src={imagePath} about={'service icon'} />

        <p>{description}</p>
      </div>
    </Link>
  );
}

export default MobileServiceCard;
