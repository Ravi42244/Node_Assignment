import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = (props) => {
  const formTitle = {
    fontSize: "50px",
    fontStyle: "bold",
  };

  const [email, setemail] = useState("");
  const [Paste, setPaste] = useState(true);
 
    
   
  

  const Onchangehandler = (event) => {
    setemail(event.target.value);
  };

  const OnSubmithandler = (event) => {
    axios
      .get(`http://localhost:3001/${event.target.email.value}`)
      .then((res) => {
        props.getData(res.data);
      })
      .catch((err) => {
        props.getData(err);
        console.log(err);
      });

    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://localhost:3001/user')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }, []);

    setemail("");

    event.preventDefault();
  };


  return (
    <div className="container my-5 text-center">
      <form onSubmit={OnSubmithandler}>
        <div className="mb-3 text-center">
          <label className="form-label " style={formTitle}>
            Employee Name
          </label>
          <input
            type="text"
            value={email}
            name="email"
            className="form-control"
            onChange={Onchangehandler}
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
              const pasteData = await navigator.clipboard.readText();
              console.log(pasteData);
              setemail(pasteData);
              
              console.log("before if: "+Paste)
if(Paste){


  
  document.getElementById('pasteandsearch').click();


  setPaste(false)
  
}
              
console.log("after if: "+Paste)
              
            }}
            className="btn btn-primary container col mx-3"
          >
            Paste & Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
