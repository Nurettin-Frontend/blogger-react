import React from "react";
import Form from "../components/new-blog/Form";
import { Helmet } from "react-helmet";

const NewBlog = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Add Form</title>
        <meta name="title" content="Add Form" />
        <meta name="description" content="Description Blog Details" />
      </Helmet>
      <Form />
    </React.Fragment>
  );
};

export default NewBlog;
