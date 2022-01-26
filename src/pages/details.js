import React from "react";
import Details from "../components/details/Details";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>blog: blabla</title>
        <meta name="title" content="Details" />
        <meta name="description" content="Description Blog Details" />
      </Helmet>      
      <Details />
    </React.Fragment>
  );
};

export default DetailsPage;
