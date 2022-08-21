export const sortBlogs = (txt, activeCatagory) => {
  if (activeCatagory == txt) {
    setPostState(props.posts);
    setActiveCatagory("");
  } else {
    setPostState(props.posts.filter((post) => post.frontmatter.TOP == txt));
    setActiveCatagory(txt);
  }
};
