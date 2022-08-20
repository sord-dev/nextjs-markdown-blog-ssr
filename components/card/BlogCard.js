import Link from "next/link";
import React from "react";
import styles from "./blogcard.module.css";

function BlogCard({data, slug}) {
  return (
    <div className={styles.blogCard}>
        <Link href={`/blog/${slug}`}>
      <div className={styles.image}>
        {/* thumbnail */}
        <h3>Post Picture</h3>
      </div>
        </Link>

      <div className={styles.content}>
        <div className={styles.main_text}>
          <p>{data.TOP}</p>
          <h4><Link href={`/blog/${slug}`}>{data.title}</Link></h4>
          <p>
            {data.excerpt}
          </p>
        </div>

        <div className={styles.meta}>
          <div>
            
          </div>

          <div>
            <h4>{data.author}</h4>
            <p>{data.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
