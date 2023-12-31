
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [state,setState]=useState(2);
    const [data,setData]=useState([]);
  useEffect(()=>{
   async function getData() {
    const get=await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
    const res=await get.json();
    setData(res)
    console.log(res) 
   }
  getData()
  document.title=`employee (${state})`
  },[state])

  return (
    <div>
    <button onClick={()=>setState(state+1)}>click me {state}</button>
   {
    data.map((element,index)=>{
      return(
        <Link to={`/app/${element.id}`}>
        <div className='data' key={index}>
          <h4>{element.firstName}</h4>
          <h4>{element.lastName}</h4>
          <h4>{element.email}</h4>
        </div>
        </Link>
      )
    })
   }
  
    </div>
  )
}

export default Home