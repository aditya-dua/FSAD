import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function UserForm() {

  const [customer,setCustomer] = useState({name:"",phone:""});

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/create",{
      mode:"cors",
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
     
      body:JSON.stringify(customer)
    })
    .then(response=> response.json())
    .then(data=>console.log("User created:",data))
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder='Name'>
      </input>
      <input type="text" name="phone" value={customer.phone} onChange={handleChange} placeholder='Email'>
      </input>
      <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default UserForm;
