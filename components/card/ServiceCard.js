import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './servicecard.module.css'
import infinty from '../../public/infinity.svg'

function ServiceCard() {
  return (
    <div className={styles.serviceCard}>
    <div className={styles.avatar}>
      <Image src={infinty} width={"50px"} alt={"placeholder service icon"} />
    </div>

    <div className={styles.content}>
      <h4>Web Development</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eros ipsum, ullam corper vitae ex ac, molestie ullamcorper velit.
      </p>
    </div>

    <Link href={"/services"}>Read More</Link>
  </div>
  )
}

export default ServiceCard