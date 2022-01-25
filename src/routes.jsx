import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import NewBlog from "./pages/NewBlog";
import Navbar from "./layout/Navbar";
const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/new-blog" element={<NewBlog />} />
        <Route exact path="/" element={<Blogs />} />
      </Routes>
    </>
  );
};
export default Routers;
