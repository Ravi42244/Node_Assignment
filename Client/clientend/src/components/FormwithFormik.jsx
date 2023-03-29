import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";

import axios from "axios";

function FormwithFormik(props) {
  const [Paste, setPaste] = useState(false);
  const [copiedEmail, setcopiedEmail] = useState({ email: "" });
  const [loading, setloading] = useState(false);

  const formTitle = {
    fontSize: "50px",
    fontStyle: "bold",
  };
  const initialValues = {
    email: "",
  };

  const onSubmit = async (values) => {
    let email = values.email;
    await axios
      .get(`${window.env.BACKEND_URL}${email}`)
      .then((res) => {
        setloading(false);
        props.getData(res.data);
      })
      .catch((err) => {
        setloading(false);
        props.getData(err);
        console.error(err);
      });
  };

  useEffect(() => {
    if (Paste) {
      onSubmit(copiedEmail);
      setPaste(false);
    }
  }, [copiedEmail]);
  return (
    <div className="container">
      <Formik
        initialValues={Paste ? initialValues : copiedEmail}
        className="container my-5 text-center"
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form>
          <div className="mb-3 text-center">
            <label className="form-label " style={formTitle}>
              Employee Name
            </label>
            <Field
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required={true}
            />
          </div>
          <div className="row">
            <button
              type="submit"
              className="btn btn-primary container col mx-3"
              onClick={() => {
                setloading(true);
              }}
            >
              Search
            </button>

            <button
              id="pasteandsearch"
              type="button"
              onClick={async () => {
                setloading(true);

                const copiedData = await navigator.clipboard.readText();

                setcopiedEmail({ email: copiedData });
              }}
              className="btn btn-primary container col mx-3"
            >
              Paste & Search
            </button>
          </div>
        </Form>
      </Formik>

      {loading ? (
        <div
          className="d-flex justify-content-center"
          style={{
            marginTop: "300px",
            marginLeft: "633px",
            zIndex: 10,
            position: "absolute",
          }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FormwithFormik;
