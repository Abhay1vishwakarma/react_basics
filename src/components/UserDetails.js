import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const UserDetails = () => {
  const {userId,}=useParams();
  const [data,setData]=useState({});
useEffect(()=>{
 async function getData() {

  const get=await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`)
  const res=await get.json();
  setData(res[0])
  console.log(res) 
 }
getData()

},[])
  return (
    <div>
      <p>id:{data.id}</p>
      <img src={data.imageUrl} alt="" />
      <p>first name: {data.firstName}</p>
      <p>last name: {data.lastName}</p>
      <p>email: {data.email}</p>
      <p>contact number: {data.contactNumber}</p>
      <p>age: {data.age}</p>
      <p>dob: {data.dob}</p>
      <p>salary: {data.salary}</p>
    </div>
  )
}

export default UserDetails