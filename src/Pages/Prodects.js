import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'

export default function Prodects() {
  const [data , setData] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:9000/product").then((res)=>{
          setData(res.data.data)
          console.log(res.data.data)
      }).catch((err)=>{
          console.log(err)
      })
  },[])
  return (
    <main className="container mx-auto py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {
          data?data.map((item,index)=>{
            return <ProductCard key={index} item={item}/>
          }):null
        }
      </section>
    </main>
  )
}



