import React from "react";
import Blog from "./Blog";
import { Row, Col } from "antd";
import style from "./Blogs.module.scss";
import { useSelector } from "react-redux";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  return (
    <div className={style.container}>
      <Row gutter={[40, 16]}>
        {blogs.map((blog) => (
          <Col
            key={blog.id}
            span={8}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <Blog blog={blog} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
