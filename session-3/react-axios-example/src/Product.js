import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Product() {
  const [data,setData] = useState([]);
  const product={
    name:"Latest Iphone 19"
  };
  useEffect (()=>{
    axios.post("https://5ee9cb81ca5957001602a2af.mockapi.io/api/v1/product",{name:"Latest Iphone"})
    .then(res=>{
      console.log(res);
      console.log(res.data)
    });

    axios.delete("https://5ee9cb81ca5957001602a2af.mockapi.io/api/v1/product/2")
    .then(res=>{
      console.log("Delete Success");
      console.log(res.data)
    });
    
    axios.get("https://5ee9cb81ca5957001602a2af.mockapi.io/api/v1/product")
    .then(response=>{
      setData(response.data);
    })
    .catch(error=>{
      console.log(error)
    })

  },[]);

  return(
    <div>
      {data.map(pr=>(
        <p key={pr.id}>Name: {pr.name} Price: {pr.price} Id: {pr.id}</p>
      ))}
    </div>
  )

}

export default Product;
