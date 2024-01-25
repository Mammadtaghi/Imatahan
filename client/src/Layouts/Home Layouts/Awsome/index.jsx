import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../../Components/Product";
import { useBasket } from "../../../Context/basketContext";
import { usePro } from "../../../Context/proContext";
import { useWishlist } from "../../../Context/wishlistContext";
import style from "./index.module.scss";

function Awsome() {
  const navigate = useNavigate()
  const { Pro, setPro, GetPros, isLoading } = usePro();
  const { Wishlist, setWishlist, UpdateWishlist, isIn } = useWishlist();
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
      <div id={style.Awsome}>
        <div className={style.container}>
          <h1 className={style.secTitle}>Awsome</h1>
          <div className={style.grid}>
            {isLoading ? (
              <span key={1}>Loading. . .</span>
            ) : (
              Pro &&
              Pro.map((item, i) => {
                return (
                  <div
                    key={item._id}
                    className={style.proContainer}
                    style={{ gridArea: `grid${i + 1}` }}
                  >
                    <Product props={item} />
                    <button onClick={() => UpdateWishlist(item)}>
                      <i
                        className={`fa-${
                          isIn(item) ? "solid" : "regular"
                        } fa-heart`}
                      ></i>
                    </button>
                    <button onClick={() => AddToBasket(item)}>
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button onClick={()=>navigate(`/detail/${item._id}`)}>
                      <i className="fa-regular fa-eye"></i>
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Awsome;
