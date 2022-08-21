import React from "react";
import styles from "../styles/meta.module.css";

function MetaData({ author, date, size }) {
  const setSize = (size) => {
    const sizes = { sm: styles.sm, md: styles.md, lg: styles.lg };

    return sizes[size];
  };

  return (
    <div className={`${styles.meta} ${setSize(size)}`}>
      <div></div>

      <div>
        <span>{author}</span>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default MetaData;
