import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function User() {
  const [data,setData] = useState([]);
  const user={
    name:"Univeristy Demo User"
  };
  useEffect (()=>{
    axios.post("https://jsonplaceholder.typicode.com/users",{user})
    .then(res=>{
      console.log(res);
      console.log(res.data)
    });
    
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      setData(response.data);
    })
    .catch(error=>{
      console.log(error)
    })

  },[]);

  return(
    <div>
      {data.map(user=>(
        <p key={user.id}>{user.name} {user.email}</p>
      ))}
    </div>
  )

}

export default User;
