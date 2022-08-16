import Link from "next/link";
import React from "react";
import styles from "./blogcard.module.css";

function BlogCard() {
  return (
    <div className={styles.blogCard}>
        <Link href={'/blog/postID'}>
      <div className={styles.image}>
        {/* thumbnail */}
        <h3>Post Picture</h3>
      </div>
        </Link>

      <div className={styles.content}>
        <div className={styles.main_text}>
          <p>Type of Post</p>
          <h4>Post Name</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem
            dignissimos sunt minima quibusdam nobis voluptas voluptatibus iste
            sit.{" "}
          </p>
        </div>

        <div className={styles.meta}>
          <div>
            
          </div>

          <div>
            <h4>Person Name</h4>
            <p>Time of Post</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
