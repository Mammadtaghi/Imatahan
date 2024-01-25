import React from "react";
import style from "./index.module.scss";

function Product({ props }) {
  return (
    <>
      <div id={style.Product}>
        <div className={style.imgBox}>
          <img src={props.image} alt="" />
        </div>
        <h2 className={style.title}>{props.title}</h2>
        <span className={style.price}>${props.price}</span>
      </div>
    </>
  );
}

export default Product;
