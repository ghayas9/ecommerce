import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'


export default function AdminProductCard({item ,reload }) {


    const DeleteProduct = (id)=>{
        axios.delete("http://localhost:9000/product/"+id).then((data)=>{
            if(data.data.success){
                toast.success(data.data.message)
                reload()
            }else{
                toast.error(data.data.message)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
        <div className="border rounded-lg p-4 mb- bg-gray-700 text-white">
            <div className="flex items-center mb-2">
                <img
                    src={item.img}
                    alt="Product Thumbnail"
                    className="h-12 w-12 rounded-md mr-2"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
            <p >{item.desc}</p>
            <button className="bg-blue-500 text-white py-1 px-2 rounded-md mt-2 hover:bg-blue-600">
                Edit
            </button>
            <button onClick={()=>{DeleteProduct(item._id)}} className="bg-red-500 text-white py-1 px-2 rounded-md mt-2 ml-2 hover:bg-red-600">
                Delete
            </button>
        </div>
  )
}
