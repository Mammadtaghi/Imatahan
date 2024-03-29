import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ProProvider } from "./Context/proContext.jsx";
import { BasketProvider } from "./Context/basketContext.jsx";
import { WishlistProvider } from "./Context/wishlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <ProProvider>
        <BasketProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </BasketProvider>
      </ProProvider>
    </HelmetProvider>
  </BrowserRouter>
);
