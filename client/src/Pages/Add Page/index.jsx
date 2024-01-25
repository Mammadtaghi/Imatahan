import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import style from "./index.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { usePro } from "../../Context/proContext";

function AddPage() {
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  const { Pro, setPro, GetPros, isLoading } = usePro();

  async function Post(values) {
    try {
      const response = await axios.post("http://localhost:3000/pro", values);
      console.log(response.data);
      GetPros();
    } catch (error) {
      console.log(error);
    }
  }

  async function DeletePro(id) {
    try {
      const response = await axios.delete(`http://localhost:3000/pro/${id}`);
      console.log(response.data);
      GetPros();
    } catch (error) {
      console.log(error);
    }
  }

  function checkStr(str) {
    if (typeof str === "string") {
      return str.toLowerCase();
    }
    return str;
  }

  return (
    <>
      <Helmet>
        <title>AddPage</title>
      </Helmet>
      <div id={style.AddPage}>
        <Formik
          initialValues={{ title: "", image: "", price: "" }}
          validationSchema={Yup.object({
            title: Yup.string().required("Required"),
            image: Yup.string().required("Required"),
            price: Yup.string().min(1, "Cant be Free!").required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            Post(values);
          }}
        >
          <Form>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" />

            <label htmlFor="image">Image</label>
            <Field name="image" type="text" />
            <ErrorMessage name="image" />

            <label htmlFor="price">Price</label>
            <Field name="price" type="number" min={0} />
            <ErrorMessage name="price" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setSort(null)}>Default</button>
        <button onClick={() => setSort({ property: "title", asc: true })}>
          A-Z
        </button>
        <button onClick={() => setSort({ property: "title", asc: false })}>
          Z-A
        </button>
        <button onClick={() => setSort({ property: "price", asc: true })}>
          Price up
        </button>
        <button onClick={() => setSort({ property: "price", asc: false })}>
          Price down
        </button>
        {isLoading ? (
          <span className={style.loader}></span>
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
              {Pro &&
                Pro.filter((x) =>
                  x.title.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a,b)=>{
                  if (sort && sort.asc) {
                    return (a[sort.property] < b[sort.property]) ? -1 : (b[sort.property] < a[sort.property]) ? 1 : 0
                  } else if (sort && !sort.asc) {
                    return (a[sort.property] > b[sort.property]) ? -1 : (b[sort.property] > a[sort.property]) ? 1 : 0
                  } else{
                    return 0
                  }
                })
                .map((item) => (
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
                      <button onClick={() => DeletePro(item._id)}>
                        Delete
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

export default AddPage;
