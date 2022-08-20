import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";

import matter from "gray-matter";
import { marked } from "marked";
import styles from "../../styles/pages/blog/blogpage.module.css";
import MetaData from "../../components/MetaData";

function BlogPage({ frontmatter: { title, date, author, excerpt }, content, slug }) {
  return (
    <div>
      <Head>
        <title>{`${title}`}</title>
      </Head>

      <div className={styles.BlogPage}>
        <MetaData author={author}  date={date} size={'lg'} />

        <div className={styles.title}>
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </div>

        <div className={styles.thumbnail}>

        </div>

        <div dangerouslySetInnerHTML={ { __html: marked(content) } } className={styles.content}></div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("markdown"));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("markdown", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default BlogPage;
