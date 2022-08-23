import Link from 'next/link'
import React from 'react'
import styles from './servicecard.module.css'

function ServiceCard({service, description, imagePath, offset}) {
  const link = "/services/" + service.split(' ').join('-').toLowerCase()

  return (
    <div className={styles.serviceCard}>
    <div className={styles.avatar}>
      <img className={offset ? styles.offset : ''} src={imagePath} alt={"placeholder service icon"} />
    </div>

    <div className={styles.content}>
      <h3>{service}</h3>
      <p>
        {description}
      </p>
    </div>

    <Link about={`link to ${service.search(/service/ig) > 0 ? `${service} page` : `${service} services page`}`} href={link}>What is this?</Link>
  </div>
  )
}

export default ServiceCard