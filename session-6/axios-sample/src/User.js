import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [data,setData]=useState([]);
  const user={
    name:"K L University Admin User"
  }

  useEffect(()=>{
    axios.post("https://jsonplaceholder.typicode.com/users",{user})
    .then(response=>{
        console.log(response.data)
        
        //console.log(data)
      })

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      setData(response.data);
      //console.log(data)
     
    })
    .catch(error=>{
      console.log(error)
    })
  })

  return (
    <div className="App">
      {data.map(user=>(
        <p key={user.id}>{user.name} {user.email}</p>
      ))}
    </div>
  );
}

export default App;
