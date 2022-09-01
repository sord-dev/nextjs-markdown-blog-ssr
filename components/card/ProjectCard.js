import React from 'react'
import styles from './projectcard.module.css'
import Link from 'next/link'

function ProjectCard({title, description, linkSRC, imageSRC}) {
  return (
    <div className={styles.projectCard}>
    <div>
    <Link href={linkSRC}>
      <img src={imageSRC} alt={`${title} thumbnail image`} />
    </Link>
    </div>
    <div>
      <h3>{title}</h3>
      <p>
        {description}
      </p>
      <Link href={linkSRC}><button>View Website</button></Link>
    </div>
  </div>
  )
}


ProjectCard.defaultProps = {
  title: 'Business/Project Name',
  description: 'Vivamus iaculis, tellus a suscipit gravida, nisi augue porta lectus, ac molestie ante tortor sit amet eros. Proin a ligula ex.',
  imageSRC: '/project-thumbnails/placeholder.png',
  linkSRC: '/'
}

export default ProjectCard