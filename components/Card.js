import React from "react";
import styles from "../styles/card.module.css";
import Link from "next/link";
import Image from "next/image";
import infinty from "../public/infinity.svg";
import quote from "../public/quote.svg";

// TODO
// MAKE THESE A SEPERATE COMPONENT lol

function Card(props) {
  const ServiceCard = () => (
    <div className={styles.serviceCard}>
      <div className={styles.avatar}>
        <Image src={infinty} width={"50px"} alt={"placeholder service icon"} />
      </div>

      <div className={styles.content}>
        <h4>Web Development</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eros ipsum, ullam corper vitae ex ac, molestie ullamcorper velit.
        </p>
      </div>

      <Link href={"/"}>Read More</Link>
    </div>
  );

  const BlogCard = () => (
    <div className={styles.blogCard}>
      <div>
        {/* thumbnail */}
        <p>Type of </p>
        <h4></h4>
        <p></p>
      </div>

      <div>
        <div>{/* content */}</div>
        <div>{/* name and date */}</div>
      </div>
    </div>
  );

  const TestimonialCard = () => (
    <div className={styles.testimonialCard}>
      <div>
        <div>
          <Image
            src={quote}
            alt={"testimonial quote image"}
            width={"38px"}
            height={"38px"}
          />
          <p>
            Donec semper magna tellus, eu ultrices turpis porta eu. Duis
            molestie pretium est sit amet sollicitudin. Nullam mollis sed leo ac
            ultrices. Sed quis efficitur est.
          </p>
        </div>
        <div>
          <div className={styles.avatar}>
            <Image
              src={infinty}
              height={"100px"}
              alt={"placeholder service icon"}
            />
          </div>
          <p>Person or Business Name</p>
        </div>
      </div>
    </div>
  );

  const ProjectCard = () => (
    <div className={styles.projectCard}>
      <div>
        {" "}
        <h4> Project or Brand Picture </h4>{" "}
      </div>
      <div>
        <h3>Business/Project Name</h3>
        <p>
          Vivamus iaculis, tellus a suscipit gravida, nisi augue porta lectus,
          ac molestie ante tortor sit amet eros. Proin a ligula ex.
        </p>
        <button>View Website</button>
      </div>
    </div>
  );

  switch (props.type) {
    case "service":
      return <ServiceCard {...props} />;
      break;

    case "project":
      return <ProjectCard {...props} />;
      break;

    case "blog":
      return <BlogCard {...props}/>;
      break;

    case "testimonial":
      return <TestimonialCard {...props} />;
      break;

    default:
      return <ServiceCard {...props} />;
      break;
  }
}

export default Card;
