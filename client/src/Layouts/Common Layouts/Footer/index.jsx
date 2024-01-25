import React from "react";
import style from "./index.module.scss";

function Footer() {
  return (
    <>
      <footer id={style.Footer}>
        <div className={style.container}>
          <div className={style.topPart}>
            <div className={style.footList}>
              <h3 className={style.footTitle}>Top Products</h3>
              <ul className={style.footLinks}>
                <li>Jobs</li>
                <li>Managed Tools</li>
                <li>Managed Website</li>
                <li>Managed Service</li>
              </ul>
            </div>

            <div className={style.footList}>
              <h3 className={style.footTitle}>Top Products</h3>
              <ul className={style.footLinks}>
                <li>Jobs</li>
                <li>Managed Tools</li>
                <li>Managed Website</li>
                <li>Managed Service</li>
              </ul>
            </div>

            <div className={style.footList}>
              <h3 className={style.footTitle}>Top Products</h3>
              <ul className={style.footLinks}>
                <li>Jobs</li>
                <li>Managed Tools</li>
                <li>Managed Website</li>
                <li>Managed Service</li>
              </ul>
            </div>

            <div className={style.footList}>
              <h3 className={style.footTitle}>Top Products</h3>
              <ul className={style.footLinks}>
                <li>Jobs</li>
                <li>Managed Tools</li>
                <li>Managed Website</li>
                <li>Managed Service</li>
              </ul>
            </div>
          </div>

          <div className={style.bottomPart}>
            <p>
              Copyright ©2024 All rights reserved | This template is made with{" "}
              <i className="fa-regular fa-heart"></i> by Colorlib
            </p>
            <div className={style.icons}>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-solid fa-globe"></i>
              <i className="fa-brands fa-behance"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
