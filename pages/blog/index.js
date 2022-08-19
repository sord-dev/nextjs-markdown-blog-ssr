import Head from "next/head";
import React from "react";
import styles from "../../styles/pages/blog/blog.module.css";
import BlogCard from "../../components/card/BlogCard";

function Blog(props) {
    console.log(props)
  return (
    <div className={styles.blog}>
      <Head>
        <title>sord-dev | Blog </title>
        <meta
          name="description"
          content="Freelance SEO Services to get more leads."
        />
        <meta
          name="keywords"
          content="freelancer, freelancer london, seo, local seo services, how to get leads, get more clients, rank on google, google ranking, search engine optimisation"
        />
      </Head>

      <div className={styles.title}>
        <h1>Blog</h1>
        <h2>
          Learn how to grow your small business, get more customers and make a
          statement on the internet.
        </h2>
      </div>

      <div className="container">
        {/* replace with catagories */}
        <div style={{ textAlign: "center" }}>
          <h3>
            <code>Catagories Placeholder</code>
          </h3>
        </div>

        <div className={styles.content}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
} 

export default Blog;
