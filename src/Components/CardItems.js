import React, { useEffect, useState } from 'react'
import axiosInstance from '../Config/axiosInstance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function CardItems({ isOpen, onClose , data ,reload}) {
  const nv = useNavigate()
  const [total_price , setTotal] = useState(0)

  useEffect(()=>{
      setTotal(get_total_price)
  },[data])
  
  const get_total_price = ()=>{
      let pricearray = data.map((data)=>{
        return data.quantity * data.item.price
      })

      return 0 + pricearray.reduce((total, currentValue) => total + currentValue, 0)
    }
    const changeQuantity = (e,id)=>{
        const quantity = e
        axiosInstance.put('/card/'+id,{quantity}).then((data)=>{
          if(data.data.success){
              toast.success(data.data.message)
              reload()
          }else{
              toast.error(data.data.message)
          }
      }).catch((err)=>{
          toast.error(err.response.data.message)
      })
    }


    const deleteItems = (id)=>{
        axiosInstance.delete('/card/'+id).then((data)=>{
            if(data.data.success){
                toast.success(data.data.message)
                reload()
            }else{
                toast.error(data.data.message)
            }
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    }

  return (
    <div
          className={`fixed right-0 top-0 h-full w-[500px] bg-gray-400 shadow-md transform transition-transform ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col">
          <div className="flex justify-between text-2xl bg-green-100 items-center p-3">
            <h1>Your cart</h1>
            <h1 onClick={onClose}>x</h1>
          </div>


          {
            data.map((e,index)=>{

                return (
                    <div key={index} className="flex m-2 p-2 bg-blue-100 rounded-lg justify-between ">
                        <div className="w-[25%] h-[100px]">
                        <img className="w-full h-full object-cover" src={e.item.img} alt="" />
                        </div>
                        <div className="flex flex-col justify-between px-3">
                        <h1 className="">{e.item.name}</h1>
                        <h1 className="text-2xl font-bold">${e.item.price}</h1>
                        </div>
                        <div className="w-[25%] h-[100px] flex flex-col justify-between items-end">
                        <input value={e.quantity} onChange={(x)=>{changeQuantity(x.target.value,e._id)}} type="number" min="0" className="rounded-lg w-[50%] h-[60px] p-3" />
                        <button onClick={()=>{deleteItems(e._id)}} className="bg-red-500 text-white px-3 py-2 rounded-lg mt-2">Delete</button>
                        </div>
                    </div>
                )
            })
          }

          <div className="p-2 m-2 bg-green-200">
            <div className="flex justify-between">
              <h1 className='text-2xl'>SUBTOTAL</h1>
              <h1 className='text-2xl'>${total_price}</h1>
            </div>
            <p className='text-xl'>Taxes and shipping calculated at checkout</p>
            <div className="flex justify-center mt-1">
              <button className='bg-blue-400 px-3 py-2 rounded-lg' onClick={()=>{nv('/payment')}}>CHECK OUT</button>
            </div>
          </div>


        </div>
      </div>
  )
}
