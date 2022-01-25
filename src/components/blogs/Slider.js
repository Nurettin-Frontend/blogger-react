import style from "./Slider.module.scss";
import { Carousel } from "antd";
const Slider = () => {
  return (
    <div className={style.slider}>
      <Carousel autoplay>
        <div className={style.slider__slide}>
          <div className={style.slider__slide__cover}>
            <div className={style.slider__slide__cover__title}>
              <h4>Blog Title</h4>
              <p>
                lorem loream lroeakro earkeoa reaokr ekaror skorskfom dskfdskao
                pfskfopds
              </p>
            </div>
          </div>
          <img src="https://www.ris.world/wp-content/uploads/2019/10/Why-ISO-standards-are-crucial-for-organic-and-natural-transparency-CFTAS-president_wrbm_large.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
