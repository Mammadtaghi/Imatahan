import React from "react";
import style from "./index.module.scss";

function Brands() {
  return (
    <>
      <div id={style.Brands}>
        <div className={style.container}>
          <div style={{ gridArea: "grid1" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png"
              alt=""
            />
          </div>
          <div style={{ gridArea: "grid2" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png"
              alt=""
            />
          </div>
          <div style={{ gridArea: "grid3" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png"
              alt=""
            />
          </div>
          <div style={{ gridArea: "grid4" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png"
              alt=""
            />
          </div>
          <div style={{ gridArea: "grid5" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png"
              alt=""
            />
          </div>
        </div>
        <div className={style.container}>
          <div style={{ gridArea: "grid2" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png"
              alt=""
            />
          </div>
          <div style={{ gridArea: "grid3" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png"
              alt=""
            />
          </div>
          <div style={{ gridArea: "grid4" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png"
              alt=""
            />
          </div>
          <div style={{ gridArea: "grid5" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png"
              alt=""
            />
          </div>
          <div style={{ gridArea: "grid1" }} className={style.brandBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
