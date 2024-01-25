import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Product from "../../Components/Product";
import style from "./index.module.scss";

function DetailPage() {
  const { id } = useParams();

  const [Prod, setProd] = useState("");

  async function GetPro() {
    try {
      const response = await axios.get(`http://localhost:3000/pro/${id}`);
      console.log(response.data);
      setProd(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetPro();
  }, []);

  return (
    <>
      <Helmet>
        <title>DetailPage</title>
      </Helmet>
      <div id={style.DetailPage}>
        {!Prod ? <span>Loading. . .</span> : <Product props={Prod} />}
      </div>
    </>
  );
}

export default DetailPage;
