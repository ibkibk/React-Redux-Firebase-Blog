import React from "react";

const BlogDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div>
      <h2>Blog Title - {id}</h2>
      <p>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has?
      </p>
      <p>Posted by Ibrahim kurhan</p>
      <p>2nd of April</p>
    </div>
  );
};

export default BlogDetails;
