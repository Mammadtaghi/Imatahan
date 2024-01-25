import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useBasket } from "../../Context/basketContext";
import style from "./index.module.scss";

function BasketPage() {
  const {
    Basket,
    setBasket,
    AddToBasket,
    RemoveFromBasket,
    Increase,
    Decrease,
    SubTotal,
  } = useBasket();

  return (
    <>
      <Helmet>
        <title>BasketPage</title>
      </Helmet>
      <div id={style.BasketPage}>
        {!Basket.length ? (
          <Link to={"/"}>Go Back to Home</Link>
        ) : (
          <table border={1}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              {Basket &&
                Basket.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className={style.imgBox}>
                        <img src={item.image} alt="" />
                      </div>
                    </td>
                    <td>
                      <h3>{item.title}</h3>
                    </td>
                    <td>
                      <span>${item.price}</span>
                    </td>
                    <td>
                      <span>{item.count}</span>
                    </td>
                    <td>
                      <div className={style.btnContainer}>
                        <button onClick={() => RemoveFromBasket(item)}>
                          Remove
                        </button>
                        <button onClick={() => Increase(item)}>+</button>
                        <button onClick={() => Decrease(item)}>-</button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default BasketPage;
