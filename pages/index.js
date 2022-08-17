import Head from "next/head";

// stylesheet
import styles from "../styles/pages/home.module.css";

// components
import Hero from "../components/home/Hero";
import CustomHeading from "../components/home/CustomHeading";
import ServiceCard from "../components/Card/ServiceCard";
import ProjectCard from "../components/card/ProjectCard";
import TestimonialCard from "../components/card/TestimonialCard";
import BlogCard from "../components/card/BlogCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stefan Syrett - Freelance Web Design and Development</title>
        <meta
          name="description"
          content="Freelance Web Designer/Developer based in London UK. Providing SEO, Web Design and Development services."
        />
        <meta
          name="keywords"
          content="freelancer, freelancer london, responsive web design, local web design, web designers near me, freelance web developer, local web developer, web developer, seo services, local seo services"
        />
      </Head>

      <Hero />

      <div className="container">
        <div className={styles.services}>
          <h3>SERVICES</h3>
          <h2>A website should be a solution, not a problem</h2>

          <div className={styles.services_grid}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>

      <CustomHeading />

      <div className="container pt-10">
        <div className={styles.projectList}>
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      <div className={styles.testimonial}>
        <div className={styles.title}>
          <h3>TESTIMONIALS</h3>
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
            <h3>BLOG</h3>
            <h2>Learn how to grow your business here</h2>
          </div>

          <div className={styles.grid}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          <Link href={"/blog"}> Read More </Link>
        </div>

        <div className={styles.contactCard}>
        
        <div>
          <h4>Get in touch</h4>
          <p>Want to have a talk about what your website could be missing? Give me an email!</p>
        </div>


        <Link href={'/contact'}>
        <div>
          <button>Contact</button>
        </div>
        </Link>
        </div>
      </div>
    </div>
  );
}
