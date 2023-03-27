import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 const Card = (props)=>{

 
  

const Onclickbtn = ()=>{

  toast.success('Email Copied!', {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  navigator.clipboard.writeText(props.email)
  

}



    return (
      <>
      
        <div className='d-flex p-2 '>
        
        <div className="card text-center container " >
  
  <div className="card-body">
    <h5 className="card-title">{props.firstName} {props.lastName}</h5>
    <p className="card-text">{props.role}</p>
    <button onClick={Onclickbtn}  className="btn btn-primary">{props.email}</button>
  </div>
 
</div>
        </div>
        </>
    )


}

export default Card;