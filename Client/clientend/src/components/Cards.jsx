
import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import '../components/css/tree.css';

const Cards = (props) => {
  const [reportTO_display, setreportTO_display] = useState(false);
  const [ids, setids] = useState(props.data.reportTo);

  // console.log(props)
  useEffect(() => {
    setids(props.data.reportTo);
  }, [props.data]);

  useEffect(() => {
    if (props.data.reportTo) {
      setreportTO_display(true);
    } else setreportTO_display(false);
  }, [props.data]);

const children = ()=>{

return ((props.data.reportTo).map((item,index)=>{
let child={}

  
 child['id']=index+2
  child['text']= item.firstName
  child['diamond']=false
  child['firstName']=item.firstName
  child['lastName']=item.lastName
  child['email']=item.email
  child['role']=item.role

return child
}))

}
const childNodes=children()
  const treeData = [
   
    {
      id:'1',
      text:props.data.firstName,
diamond:false,
children: childNodes,
firstName:props.data.firstName,
lastName:props.data.lastName,
email:props.data.email,
role:props.data.role
    }
]
console.log('child node'+childNodes)
  const treeRendering = (treeData) => {
    console.log({treeData})
    return (
        <>
                <ul>
            {
                treeData.map((item)=>                
                    <li >
                   
                          <Card
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              role={item.role}
            />
                        {
                            item.children && item.children.length ?
                            treeRendering(item.children)
                            :''
                        }
                    </li>
                )            
                
            }
            </ul>
        </>
    )
}



  return (
    <div className="container text-center" >
{/* 
<div className="tree">
    {
        treeRendering(treeData)
    }
	
                    
</div> */}



     <div className="row my-5">
        <div className="col">
          {props.data.firstName ? (
            <>
            <Card
              firstName={props.data.firstName}
              lastName={props.data.lastName}
              email={props.data.email}
              role={props.data.role}
            />




           </>
          ) : (
            <>User Not Found!</>
          )}
        </div>
      </div>

      {reportTO_display === true ? (


        <div className="row">
          
          {ids.map((data, i) => {
            return (


              <div className="col tree" key={i}>
                <Card
                  firstName={data.firstName}
                  lastName={data.lastName}
                  email={data.email}
                  role={data.role}
                />
              </div>
            );
          })}
        </div>

        
      ) : (
        <></>
      )}  
     </div> 
  );
};

export default Cards;
