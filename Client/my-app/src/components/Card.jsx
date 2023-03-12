import React,{useEffect, useState} from 'react';
 
 const Card = (props)=>{

  const [Coptyalert,setCoptyalert]=useState(false)
  const [className,setclassName]=useState('')
  const [Style,setStyle]=useState(null)
  

const Onclickbtn = ()=>{

  navigator.clipboard.writeText(props.email)
  setCoptyalert(true)
setStyle({position:'absolute', width:'auto'})
  setclassName('alert alert-success z-1 postion-relative')
  setTimeout(()=>{
    
    setCoptyalert(false)
    
  },500)
}
useEffect(()=>{
  if(Coptyalert === true){
    setclassName('alert alert-success z-1 postion-relative')
  setStyle({position:'absolute', width:'auto'})
  }else(
    
    setclassName('')

    
  
  )
  
},[Coptyalert])








    return (
      <>
      <div className={className} role="alert" style={Style}>
        {Coptyalert === true ? (
 'email copied!'
) : <div></div>}
</div>
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