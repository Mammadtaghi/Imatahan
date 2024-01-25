import React, { useState } from "react";
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
    SubCount,
  } = useBasket();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav id={style.Navbar}>
        <div className={style.container}>
          <div className={style.toggleBox} onClick={() => setIsOpen(!isOpen)}>
            <i className={`fa-solid fa-${isOpen ? "xmark" : "bars"}`}></i>
          </div>
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
                <div className={style.count}>{SubCount()}</div>
              </i>
            </NavLink>
          </div>
          <div className={`${style.resNav} ${isOpen ? "" : style.none}`}>
            <NavLink to={"/"} className={style.NavLink}>
              Home
            </NavLink>
            <NavLink to={"/add"} className={style.NavLink}>
              Add
            </NavLink>
            <NavLink to={"/wishlist"} className={style.NavLink}>
              Wishlist
            </NavLink>
            <NavLink to={"/basket"} className={style.NavLink}>
              Basket
            </NavLink>
            <Link className={style.NavLink}>Pages</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
