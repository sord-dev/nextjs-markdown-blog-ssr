import Link from 'next/link'
import React from 'react'
import styles from './servicecard2.module.css'

function ServiceCard2({ service }) {
  return (
    <div className={styles.serviceCard}>

        <div>
            <span>icon</span>
        </div>

        <div>
            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
            <Link href={service._buttonLink}><button>{service.buttonText}</button></Link>
        </div>
    </div>
  )
}

export default ServiceCard2