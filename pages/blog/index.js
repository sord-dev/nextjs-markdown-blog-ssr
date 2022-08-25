import Head from "next/head";
import React, { useEffect, useState } from "react";

// utils
import matter from "gray-matter";
import fs from "fs";
import path from "path";

// styles
import styles from "../../styles/blog.module.css";

// components 
import BlogCard from "../../components/card/BlogCard";


function Blog(props) {
  const [postState, setPostState] = useState([]);
  const [catagoriesState, setCatagoriesState] = useState([]);
  const [activeCatagory, setActiveCatagory] = useState([]);

  useEffect(() => {
    const arr = props.catagories.map((item) => item.text);
    const uniqueArray = [...new Set(arr)];
    setPostState(props.posts);
    setCatagoriesState(uniqueArray);
  }, [props]);

  const sortBlogs = (txt) => {
    if (activeCatagory == txt) {
      setPostState(props.posts);
      setActiveCatagory("");
    } else {
      setPostState(props.posts.filter((post) => post.frontmatter.TOP == txt));
      setActiveCatagory(txt);
    }
  };
  return (
    <div className={styles.blog}>
      <Head>
        <title>sord-dev | Blog </title>
        <meta
          name="description"
          content="Information to grow your small business and get more leads."
        />
        <meta name="keywords" content="" />
      </Head>

      <div className={styles.title}>
        <h1>Blog</h1>
        <h2>
          Learn how to grow your small business, get more customers and make a
          statement on the internet.
        </h2>
      </div>

      <div className="container">
        {/* replace styles and add functionality */}
        <div className={styles.catagories}>
          {/*  add this */}
          {catagoriesState.map((catagory) => (
            <button
              className={catagory == activeCatagory ? styles.select : ""}
              onClick={() => sortBlogs(catagory)}
              key={catagory}
            >
              {catagory}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {postState.map((post) => (
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

  const catagories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("markdown", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      text: frontmatter.TOP,
    };
  });

  return {
    props: {
      posts,
      catagories,
    },
  };
}

export default Blog;
