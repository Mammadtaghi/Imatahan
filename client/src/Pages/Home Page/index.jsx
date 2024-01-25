import React from "react";
import { Helmet } from "react-helmet-async";
import Awsome from "../../Layouts/Home Layouts/Awsome";
import Best from "../../Layouts/Home Layouts/Best";
import Brands from "../../Layouts/Home Layouts/Brands";
import Hero from "../../Layouts/Home Layouts/Hero";
import Subscribe from "../../Layouts/Home Layouts/Subscribe";
import style from "./index.module.scss";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div id={style.Home}>
        <Hero />
        <Awsome />
        <Best />
        <Subscribe />
        <Brands />
      </div>
    </>
  );
}

export default Home;
