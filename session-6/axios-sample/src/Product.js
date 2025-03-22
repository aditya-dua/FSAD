import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [data,setData]=useState([]);
  const product={
    name:"iphone 18 Pro Max"
  }

  useEffect(()=>{
    axios.post("https://5ee9cb81ca5957001602a2af.mockapi.io/api/v1/product",{product})
    .then(response=>{
        console.log(response.data)
        
        //console.log(data)
      })

      axios.delete("https://5ee9cb81ca5957001602a2af.mockapi.io/api/v1/product/2")
      .then(response=>{
        console.log("Delete Success")
        console.log(response.data)
          
          //console.log(data)
        })
    

    axios.get("https://5ee9cb81ca5957001602a2af.mockapi.io/api/v1/product")
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
      {data.map(product=>(
        <p key={product.id}>Name: {product.name} Price:{product.price}</p>
      ))}
    </div>
  );
}

export default App;
