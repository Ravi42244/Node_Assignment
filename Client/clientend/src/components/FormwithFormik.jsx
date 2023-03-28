import React,{useState, useEffect} from 'react'
import {Formik,Form,Field } from 'formik'

import axios from "axios";

function FormwithFormik(props) {
 const [Paste, setPaste] = useState(false)
 const [copiedEmail, setcopiedEmail] = useState({email:''})
    const formTitle = {
        fontSize: "50px",
        fontStyle: "bold",
      };
      const initialValues = {
        email : ''
    }




const onSubmit = async (values) => {
   let  email = values.email;
    
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


  useEffect(() => {
    console.log(copiedEmail)
    if(Paste){
    onSubmit(copiedEmail)
    setPaste(false)
    }
    
  }, [copiedEmail])
  return (
    <div className="container">
    <Formik initialValues={Paste ? initialValues : copiedEmail} className="container my-5 text-center" onSubmit={onSubmit} enableReinitialize>
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
          type="button"
          onClick={async () => {
           
            const copiedData= await navigator.clipboard.readText();
            
            setcopiedEmail({email:copiedData})
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