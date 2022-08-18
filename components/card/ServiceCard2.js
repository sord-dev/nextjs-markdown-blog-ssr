import React from 'react'
import styles from './servicecard2.module.css'

function ServiceCard2() {
  return (
    <div className={styles.serviceCard}>

        <div>
            <span>icon?</span>
        </div>

        <div>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel, obcaecati eaque deserunt, numquam consequuntur placeat quisquam autem.</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default ServiceCard2