import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import style from "./Details.module.scss";

const Details = () => {
  const params = useParams();
  const blogs = useSelector((state) => state.blogs);
  let filteredBlog = blogs.filter((blog) => blog.id == params.id)[0];

  return (
    <div className={style.details}>
      <img src={filteredBlog.image} />
      <div className={style.details__text}>
        <Row gutter={[40, 16]}>
          <Col xs={{span: 24}} sm={{span: 12}} md={{span: 8}}>
            <div className={style.details__text__cover}>
              <span>Title: </span>
              <span>{filteredBlog.title}</span>
            </div>
          </Col>
          <Col xs={{span: 24}} sm={{span: 12}} md={{span: 8}}>
            <div className={style.details__text__cover}>
              <span>Description: </span>
              <span>{filteredBlog.desc}</span>
            </div>
          </Col>
          <Col xs={{span: 24}} sm={{span: 12}} md={{span: 8}}>
            <div className={style.details__text__cover}>
              <span>Date: </span>
              <span>{filteredBlog.date}</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Details;
