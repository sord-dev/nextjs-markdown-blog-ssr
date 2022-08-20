import Head from "next/head";
import React from "react";
import styles from "../../styles/pages/blog/blog.module.css";
import BlogCard from "../../components/card/BlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function Blog(props) {
  const { posts } = props;
  return (
    <div className={styles.blog}>
      <Head>
        <title>sord-dev | Blog </title>
        <meta
          name="description"
          content="Information to grow your small business and get more leads."
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
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              data={post.frontmatter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("markdown"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("markdown", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}

export default Blog;
