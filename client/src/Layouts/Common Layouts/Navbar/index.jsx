import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useBasket } from "../../../Context/basketContext";
import { useWishlist } from "../../../Context/wishlistContext";
import style from "./index.module.scss";

function Navbar() {
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
      <nav id={style.Navbar}>
        <div className={style.container}>
          <div className={style.imgBox}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
              alt=""
            />
          </div>
          <ul className={style.navList}>
            <li>
              <NavLink className={style.NavLink} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={style.NavLink} to={"/add"}>
                Add
              </NavLink>
            </li>
            <li>
              <NavLink className={style.NavLink} to={"/wishlist"}>
                Wihslist
              </NavLink>
            </li>
            <li>
              <NavLink className={style.NavLink} to={"/basket"}>
                Basket
              </NavLink>
            </li>
            <li>
              <Link className={style.NavLink}>Contact</Link>
            </li>
          </ul>
          <div className={style.iconBox}>
            <NavLink className={style.NavLink} to={"/wishlist"}>
              <i
                className={`fa-${
                  Wishlist.length ? "solid" : "regular"
                } fa-heart`}
              >
                <div className={style.count}>{Wishlist.length}</div>
              </i>
            </NavLink>
            <NavLink className={style.NavLink} to={"/basket"}>
              <i className="fa-solid fa-cart-shopping">
                <div className={style.count}>{Basket.length}</div>
              </i>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
