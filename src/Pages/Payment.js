import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axiosInstance from '../Config/axiosInstance';
import { toast } from 'react-toastify';

export default function Payment() {
  const [cardData ,setCardData] = useState([])

  const [total_price , setTotal] = useState(0)

  useEffect(()=>{
      setTotal(get_total_price)
  },[cardData])
  
  const get_total_price = ()=>{
      let pricearray = cardData.map((data)=>{
        return data.quantity * data.item.price
      })

      return 0 + pricearray.reduce((total, currentValue) => total + currentValue, 0)
    }

  useEffect(()=>{getItem()},[])




  const getItem = ()=>{
    axiosInstance.get('/card').then((data)=>{
        if(data.data.success){
          // toast.success('dsfsdfd')
            setCardData(data.data.data)
        }else{
            toast.error(data.data.message)
        }
        console.log(data)
    }).catch((err)=>{
        console.log(err)
        toast.error(err.response.data.message)
    })
}
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      toast.error(error.message)
    } else {
      try{
        const response = await axiosInstance.post('/payment', { token: token.id });
        console.log(response)
        toast.success(response.data.message)
      }catch(err){
        console.log(err)
        toast.error("error")
      }
      
    }
  };
  return (

    <div className="flex justify-center p-5 flex-col">
        {
           cardData.map((e,index)=>{

            return (
                <div key={index} className="flex m-2 p-2 bg-blue-100 rounded-lg justify-between ">
                    <div className="w-[50%]">
                    <img className="w-full  object-cover" src={e.item.img} alt="" />
                    </div>
                    <div className="flex w-[50%] items-center justify-center">
                      <div className="flex flex-col justify-center px-3  ">
                        <h1 className="text-3xl font-bold">Name :{e.item.name}</h1>
                        <h1 className="text-3xl font-bold">Price : ${e.item.price}</h1>
                        <h1 className="text-3xl font-bold">Quantity : {e.quantity}</h1>
                        <h1 className="text-3xl font-bold text-blue-900">Total  : ${e.quantity * e.item.price}</h1>
                      </div>
                    </div>
                </div>
            )
        })
      }

        <div className="p-2 m-2 bg-green-200 rounded-lg">
            <div className="flex justify-between">
              <h1 className='text-3xl font-bold'>SUBTOTAL</h1>
              <h1 className='text-3xl font-bold'>${total_price}</h1>
            </div>
            <p className='text-xl font-bold'>Taxes and shipping calculated at checkout</p>
          </div>
        
        <form onSubmit={handleSubmit} className="w-full p-5 border-2 rounded-lg bg-[#f8f8f8] shadow-lg">
        <CardElement className="mb-5 border-2 rounded-lg p-4" />
        <button type="submit" className="w-full p-4 bg-blue-400 rounded-lg pointer">
         Pay $ {total_price}
        </button>
    </form>

    </div>
  )
}


// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentError, setPaymentError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const result = await stripe.createToken(elements.getElement(CardElement));

//     if (result.error) {
//       setPaymentError(result.error.message);
//     } else {
//       // Send the token to your server for processing
//       console.log(result.token);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit">Pay</button>
//       {paymentError && <div>{paymentError}</div>}
//     </form>
//   );
// };

// export default PaymentForm;




