import Head from "next/head";
import Link from "next/link";

// stylesheet
import styles from "../styles/pages/home.module.css";

// components
import Hero from "../components/home/Hero";
import CustomHeading from "../components/home/CustomHeading";
import ServiceCard from "../components/Card/ServiceCard";
import ProjectCard from "../components/card/ProjectCard";
import TestimonialCard from "../components/card/TestimonialCard";
import BlogCard from "../components/card/BlogCard";
import ContactCard from "../components/card/ContactCard";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>sord-dev | Freelance Web Design and Development</title>
        <meta
          name="description"
          content="Freelance Web Designer/Developer based in London UK. Providing SEO, Web Design and Development services."
        />
        <meta
          name="keywords"
          content="freelancer, freelancer london, responsive web design, local web design, web designers near me, freelance web developer, local web developer, web developer, seo services, local seo services"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <Hero />

      <div className="container">
        <div className={styles.services}>
          <span>SERVICES</span>
          <h2>A website should be a solution, not a problem</h2>

          <div className={styles.services_grid}>
            <ServiceCard
              service={"Web Development"}
              description={
                "All my websites are designed with an inherent understanding of brand communication, information architecture, accessibility and usability"
              }
            />
            <ServiceCard
              service={"SEO Services"}
              description={
                "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines."
              }
            />
            <ServiceCard
              service={"Website Audits"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est libero temporibus alias enim beatae fugit eveniet vel."
              }
            />
          </div>
        </div>
      </div>

      <CustomHeading title={"I keep brand image first and foremost in my design process."} />

      <div className="container pt-10">
        <div className={styles.projectList}>
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      <div className={styles.testimonial}>
        <div className={styles.title}>
          <span>TESTIMONIALS</span>
          <h2>People say the nicest things</h2>
        </div>

        <div className={styles.grid}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
      <div className="container pt-10">
        <div className={styles.blog}>
          <div className={styles.title}>
            <span>BLOG</span>
            <h2>Learn how to grow your business here</h2>
          </div>

          <div className={styles.grid}>
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                data={post.frontmatter}
              />
            ))}
          </div>

          <Link href={"/blog"}> All Posts </Link>
        </div>

        <ContactCard />
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
