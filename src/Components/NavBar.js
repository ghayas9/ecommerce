import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux';
import { logout } from '../State/authReducer';
import CardItems from './CardItems';
import axiosInstance from '../Config/axiosInstance';
import { toast } from 'react-toastify';

export default function NavBar() {

  const [cardData ,setCardData] = useState([])

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


  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()

  const [isCardOpen, setIsCardOpen] = useState(false);

    const openCard = () => {
        setIsCardOpen(true);
        getItem()
    };

    const closeCard = () => {
        setIsCardOpen(false);
    };

  return (
    <>
   
     <CardItems isOpen={isCardOpen} onClose={closeCard} data={cardData} reload={getItem} />
           
    <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-semibold">Logo</div>
          <nav>
            <ul className="flex space-x-6 items-center">
              <li><Link to="/"className="hover:text-gray-300">Home</Link></li>
              <li><Link to={"/products"} className="hover:text-gray-300">Products</Link></li>
             {!auth.isLoggedIn ?<li><Link to={"/signin"} className="hover:text-gray-300 bg-blue-900">LogIn</Link></li>: <button onClick={()=>{dispatch(logout())}} className='bg-red-900 px-3 py-2 rounded-lg'>LogOut</button> }
             {auth.isLoggedIn ?
             <li><button onClick={openCard}>
             <FaShoppingCart />
             </button></li>: null
              }
              
            </ul>
          </nav>
        </div>
      </header>

      </>
  )
}



