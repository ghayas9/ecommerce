import React from 'react';
import axiosInstance from '../Config/axiosInstance';
import { toast } from 'react-toastify';

function ProductCard({item}) {

  const addToCard = ()=>{
      axiosInstance.post('/card/add',{item:item._id}).then((data)=>{
        if(data.data.success){
            toast.success(data.data.message)
        }else{
            toast.error(data.data.message)
        }
        console.log(data)
    }).catch((err)=>{
        console.log(err)
        toast.error(err.response.data.message)
    })
  }
  return (
    <div className="bg-gray-300 rounded-lg p-4 shadow-md text-white">
      <img src={item.img} alt="Product 1" className="w-full h-40 object-cover mb-4 rounded-md"/>
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="">{item.desc}</p>
      <p className="text-lg font-semibold mt-2">${item.price}</p>
      <button onClick={addToCard} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-700">Add To Card</button>
    </div>
  );
}

export default ProductCard;
