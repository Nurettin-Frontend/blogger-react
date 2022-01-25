import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/">
        <h2>React Blogs</h2>
      </Link>
      <Link to="new-blog">
        <span>Add New Blog</span>
      </Link>
    </div>
  );
};

export default Navbar;
