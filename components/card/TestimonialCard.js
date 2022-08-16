import Image from 'next/image'
import React from 'react'
import styles from './testimonialcard.module.css'
import quote from '../../public/quote.svg'
import infinity from '../../public/infinity.svg'

function TestimonialCard() {
  return (
    <div className={styles.testimonialCard}>
      <div>
        <div>
          <Image
            src={quote}
            alt={"testimonial quote image"}
            width={"38px"}
            height={"38px"}
          />
          <p>
            Donec semper magna tellus, eu ultrices turpis porta eu. Duis
            molestie pretium est sit amet sollicitudin. Nullam mollis sed leo ac
            ultrices. Sed quis efficitur est.
          </p>
        </div>
        <div>
          <div className={styles.avatar}>
            <Image
              src={infinity}
              height={"100px"}
              alt={"placeholder service icon"}
            />
          </div>
          <p>Person or Business Name</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard