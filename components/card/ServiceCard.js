import Link from 'next/link'
import React from 'react'
import styles from './servicecard.module.css'

function ServiceCard({service, description}) {
  const link = "/services/" + service.split(' ').join('-').toLowerCase()

  return (
    <div className={styles.serviceCard}>
    <div className={styles.avatar}>
      <img src={'/infinity.svg'} alt={"placeholder service icon"} />
    </div>

    <div className={styles.content}>
      <h4>{service}</h4>
      <p>
        {description}
      </p>
    </div>

    <Link href={link}>Read More</Link>
  </div>
  )
}

export default ServiceCard