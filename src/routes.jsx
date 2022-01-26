import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import NewBlog from "./pages/NewBlog";
import Navbar from "./layout/Navbar";
import DetailsPage from "./pages/details";
const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/blogs/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
};
export default Routers;
