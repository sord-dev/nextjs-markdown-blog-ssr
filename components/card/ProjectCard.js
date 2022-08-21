import React from 'react'
import styles from './projectcard.module.css'

function ProjectCard() {
  return (
    <div className={styles.projectCard}>
    <div>
      {" "}
      <h3> Project or Brand Picture </h3>{" "}
    </div>
    <div>
      <h3>Business/Project Name</h3>
      <p>
        Vivamus iaculis, tellus a suscipit gravida, nisi augue porta lectus,
        ac molestie ante tortor sit amet eros. Proin a ligula ex.
      </p>
      <button>View Website</button>
    </div>
  </div>
  )
}

export default ProjectCard