import React from 'react'
import styles from './heading.module.css'

function CustomHeading({title}) {
  return (
    <div className={styles.projectHeading}>
        <div>
          <h3>CLIENT PROJECTS</h3>
          <h2>
           {title}
          </h2>
        </div>
      </div>
  )
}

export default CustomHeading