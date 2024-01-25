import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useWishlist } from "../../Context/wishlistContext";
import style from "./index.module.scss";

function WishlistPage() {
  const { Wishlist, setWishlist, UpdateWishlist, isIn } = useWishlist();

  return (
    <>
      <Helmet>
        <title>WishlistPage</title>
      </Helmet>
      <div id={style.WishlistPage}>
        {!Wishlist.length ? (
          <Link to={"/"}>Go Back to Home</Link>
        ) : (
          <table border={1}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              {Wishlist &&
                Wishlist.map((item) => (
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
                      <button onClick={() => UpdateWishlist(item)}>
                        Remove
                      </button>
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

export default WishlistPage;
