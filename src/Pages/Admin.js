import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminProductCard from '../Components/AdminProductCard'
import { Link } from 'react-router-dom'

export default function Admin() {

    const [data , setData] = useState([])

    const getAllProducts = ()=>{
        axios.get("http://localhost:9000/product").then((res)=>{
            setData(res.data.data)
            console.log(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getAllProducts()
    },[])
  return (
    <div className="bg-gray-100 min-h-screen ">
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <Link to={"/product/add"}>
        <button className="w-full bg-blue-500 text-white py-2 my-2 px-4 rounded-md hover:bg-blue-600">
            Add Product
        </button>
        </Link>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {
        data ? data.map((item,index)=>{
            return(
               < AdminProductCard  item={item} key={index} reload={getAllProducts}/>
            )
        }):null
    }
    </section>
        
    </div>
</div>
  )
}


