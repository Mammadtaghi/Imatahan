import React from "react";
import style from "./index.module.scss";

function Best() {
  return (
    <>
      <div id={style.Best}>
        <div className={style.container}>
          <h1 className={style.secTitle}>Best Sellers</h1>
          <div className={style.grid}>
            <div id={style.Product}>
              <div className={style.imgBox}>
                <img
                  src={
                    "https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png"
                  }
                  alt=""
                />
              </div>
              <h2 className={style.title}>Chair 1</h2>
              <span className={style.price}>$300</span>
            </div>

            <div id={style.Product}>
              <div className={style.imgBox}>
                <img
                  src={
                    "https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png"
                  }
                  alt=""
                />
              </div>
              <h2 className={style.title}>Chair 1</h2>
              <span className={style.price}>$300</span>
            </div>

            <div id={style.Product}>
              <div className={style.imgBox}>
                <img
                  src={
                    "https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png"
                  }
                  alt=""
                />
              </div>
              <h2 className={style.title}>Chair 1</h2>
              <span className={style.price}>$300</span>
            </div>

            <div id={style.Product}>
              <div className={style.imgBox}>
                <img
                  src={
                    "https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png"
                  }
                  alt=""
                />
              </div>
              <h2 className={style.title}>Chair 1</h2>
              <span className={style.price}>$300</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Best;
