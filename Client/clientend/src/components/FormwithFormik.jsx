import React,{useState} from 'react'
import {Formik,Form,Field } from 'formik'

import axios from "axios";

function FormwithFormik(props) {
 const [Paste, setPaste] = useState(false)
    const formTitle = {
        fontSize: "50px",
        fontStyle: "bold",
      };
      const initialValues = {
        email : ''
    }


let email

const onSubmit = async (values) => {
     email = values.email;
    if(Paste){
        email = await navigator.clipboard.readText();
        setPaste(false)
    }
    axios
      .get(`http://localhost:3001/${email}`)
      .then((res) => {
        props.getData(res.data);
      })
      .catch((err) => {
        props.getData(err);
        console.log(err);
      });
  };



  return (
    <div className="container">
    <Formik initialValues={initialValues} className="container my-5 text-center" onSubmit={onSubmit}>
    <Form >
      <div className="mb-3 text-center">
        <label className="form-label " style={formTitle}>
          Employee Name
        </label>
        <Field
         name='email'
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required={true}
          />
      </div>
      <div className="row">
        <button type="submit" className="btn btn-primary container col mx-3">
          Search
        </button>
        <button id="pasteandsearch"
          type="submit"
          onClick={async () => {
            setPaste(true)

          }}
          className="btn btn-primary container col mx-3"
        >
          Paste & Search
        </button>
      </div>
    </Form>
  </Formik>
  </div>
  )
}

export default FormwithFormik