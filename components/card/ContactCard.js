import Link from 'next/link'
import React from 'react'
import styles from './contactcard.module.css'

function ContactCard() {
  return (
    <div className={styles.contactCard}>
    <div>
      <h3>Get in touch</h3>
      <p>
        Want to have a talk about what your website could be missing? Give
        me an email!
      </p>
    </div>

    <Link href={"/contact"}>
      <div>
        <button>Contact</button>
      </div>
    </Link>
  </div>
  )
}

export default ContactCard