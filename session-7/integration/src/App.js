import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  const [customer,setCustomer] = useState([]);

  useEffect (()=>{
    axios.get("http://localhost:8080/get")
      .then(response =>{
        setCustomer(response.data)
      })
  },[])


  return (
    <div className="App">
      {customer.map(cust=>(
        <p key={cust.id}>Name: {cust.name} Phone: {cust.phone}</p>
      ))}

    </div>
  );
}

export default App;
