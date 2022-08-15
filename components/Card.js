import React from "react";
import styles from "../styles/card.module.css";
import Link from 'next/link'
import Image from "next/image";
import infinty from '../public/infinity.svg'

function Card({type}) {



    const ServiceCard = () => (
        <div className={styles.serviceCard}>
          <div className={styles.avatar}>
            <Image src={infinty} width={'50px'} alt={'placeholder service icon'}/>
          </div>
    
          
            <div className={styles.content}>
                <h4>Web Development</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros ipsum, ullam corper vitae ex ac, molestie ullamcorper velit.
                </p>
            </div>

            <Link href={'/'}>
                Read More
            </Link>

          
        </div>
      );
   
  const BlogCard = () => (
    <div className={styles.blogCard}>
      <div>
        {/* thumbnail */}
        <p>Type of </p>
        <h4></h4>
        <p></p>
      </div>

      <div>
        <div>
            {/* content */}
        </div>
        <div>
            {/* name and date */}
        </div>
      </div>
    </div>
  );




  return type == 'service' ? <ServiceCard /> : <BlogCard /> 
}

export default Card;
