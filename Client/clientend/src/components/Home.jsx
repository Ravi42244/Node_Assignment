import React,{useState} from 'react' 
import NavBar from './NavBar';
import Cards from './Cards';
import FormwithFormik from './FormwithFormik'
 

 const Home = ()=>{

    const [Emp_data,setEmp_data]= useState('before')

function getData(data){
setEmp_data(data)
}



    return(



<>
<NavBar/>
<FormwithFormik getData={getData}/>
{(Emp_data !== 'before') ? <Cards data={Emp_data} /> : <></>}


</>


)


}

export default Home;