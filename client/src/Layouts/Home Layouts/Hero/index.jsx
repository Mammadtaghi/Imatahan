import React from "react";
import style from "./index.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Hero() {
  return (
    <>
      <div id={style.Hero}>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className={style.container}>
              <div className={style.textBox}>
                <h1 className={style.title}>
                  Wood & <br /> Cloth Sofa
                </h1>
                <p className={style.info}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia molestias asperiores iste nobis sapiente hic, velit
                  natus.
                </p>
                <button className={style.btn}>BUY NOW</button>
              </div>
              <div className={style.imgBox}>
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.container}>
              <div className={style.textBox}>
                <h1 className={style.title}>
                  Wood & <br /> Cloth Sofa
                </h1>
                <p className={style.info}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia molestias asperiores iste nobis sapiente hic, velit
                  natus.
                </p>
                <button className={style.btn}>BUY NOW</button>
              </div>
              <div className={style.imgBox}>
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.container}>
              <div className={style.textBox}>
                <h1 className={style.title}>
                  Wood & <br /> Cloth Sofa
                </h1>
                <p className={style.info}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia molestias asperiores iste nobis sapiente hic, velit
                  natus.
                </p>
                <button className={style.btn}>BUY NOW</button>
              </div>
              <div className={style.imgBox}>
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.container}>
              <div className={style.textBox}>
                <h1 className={style.title}>
                  Wood & <br /> Cloth Sofa
                </h1>
                <p className={style.info}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia molestias asperiores iste nobis sapiente hic, velit
                  natus.
                </p>
                <button className={style.btn}>BUY NOW</button>
              </div>
              <div className={style.imgBox}>
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
