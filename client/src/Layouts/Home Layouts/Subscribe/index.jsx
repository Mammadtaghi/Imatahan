import React from "react";
import style from "./index.module.scss";

function Subscribe() {
  return (
    <>
      <div id={style.Subscribe}>
        <div className={style.container}>
          <h3 className={style.secSubTitle}>JOIN OUR NEWSLETTER</h3>
          <h1 className={style.secTitle}>
            Subscribe to get Updated with new offers
          </h1>
          <div className={style.fakeForm}>
            <input
              type="text"
              id={style.subInp}
              placeholder={"Enter Email Address"}
            />
            <button className={style.subBtn}>SUBSCRIBE NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
