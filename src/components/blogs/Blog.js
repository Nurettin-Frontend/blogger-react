import style from "./Blog.module.scss";
import { FieldTimeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Blog = (props) => {
  const { blog } = props;
  return (
    <div className={style.blog}>
      <Link to={"/blogs/" + blog.id}>
        <img src={blog.image} />
      </Link>
      <div className={style.blog__contain}>
        <span className={style.blog__contain__title}>{blog.title}</span>
        <p className={style.blog__contain__desc}>{blog.desc}</p>
        <p className={style.blog__contain__date}>
          <FieldTimeOutlined /> {blog.date}
        </p>
      </div>
    </div>
  );
};

export default Blog;
