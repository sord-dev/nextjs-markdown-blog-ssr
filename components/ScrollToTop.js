import React, { useEffect, useState } from "react";
import styles from "../styles/scrollbtn.module.css";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    isVisible && (
      <div onClick={scrollToTop} className={styles.scrollBtn}>
        <img src="/arrow.svg" alt="back to top button arrow" />
      </div>
    )
  );
}

export default ScrollToTop;
