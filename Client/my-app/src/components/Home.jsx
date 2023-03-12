import React,{useState} from 'react' 
import NavBar from './NavBar';
import Form from './Form';
import Cards from './Cards';
 

 const Home = ()=>{

    const [Emp_data,setEmp_data]= useState('before')

function getData(data){
setEmp_data(data)
}



    return(



<>
<NavBar/>
<Form getData={getData}/>
{(Emp_data !== 'before') ? <Cards data={Emp_data} /> : <></>}


</>


)


}

export default Home;