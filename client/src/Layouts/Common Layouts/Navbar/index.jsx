import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./index.module.scss";

function Navbar() {
  return (
    <>
      <nav id={style.Navbar}>
        <div className={style.imgBox}>
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
            alt=""
          />
        </div>
        <ul className={style.navList}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/add"}>Add</NavLink>
          </li>
          <li>
            <Link>Pages</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
        <div className={style.iconBox}>
          <NavLink to={"/wishlist"}>
            <i className="fa-regular fa-heart"></i>
          </NavLink>
          <NavLink to={"/basket"}>
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
