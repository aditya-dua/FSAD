import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
      setData(response.data);
    })
    .catch(error=>{
      console.log(error)
    })
  },[])
  return (
    <div className="App">
      {data.map(item=>(
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;
