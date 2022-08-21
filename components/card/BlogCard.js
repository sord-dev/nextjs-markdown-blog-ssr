import Link from "next/link";
import React from "react";
import MetaData from "../MetaData";
import styles from "./blogcard.module.css";

function BlogCard({data, slug}) {
  return (
    <div className={styles.blogCard}>
        <Link href={`/blog/${slug}`}>
        
      <div className={styles.image}>
        {/* thumbnail */}
        <img src={data.thumbnail} alt={`${data.title} post image`} />
      </div>
        </Link>

      <div className={styles.content}>
        <div className={styles.main_text}>
          <span>{data.TOP}</span>
          <Link href={`/blog/${slug}`}>{data.title}</Link>
          <p>
            {data.excerpt}
          </p>
        </div>

        <MetaData author={data.author}  date={data.date} size={'md'} />
      </div>
    </div>
  );
}

export default BlogCard;
