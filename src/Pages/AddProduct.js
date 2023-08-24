import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddProduct() {

    const nv = useNavigate()

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [productPrice, setProductPrice] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault()

        var  formdata = new FormData()

        formdata.append('name', productName);
        formdata.append('desc', productDescription);
        formdata.append('price', productPrice);
        formdata.append('img', productImage);


        axios.post("http://localhost:9000/product/add",formdata).then((data)=>{
            if(data.data.success){
                toast.success(data.data.message)
                nv('/admin')
            }else{
                toast.error(data.data.message)
            }
        }).catch((err)=>{
            toast.error(err.response.data.message)
            console.log(err)
        })

        
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setProductImage(selectedImage);
    
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };
    

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="w-full bg-white p-6 rounded-lg shadow-md px-5">
                
                    <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Product Description</label>
                    <textarea
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                        rows="3"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Product Price</label>
                    <input
                        type="number"
                        step="0.01"
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Product Image</label>
                    <input
                        // value={productImage}
                        type="file"
                        accept="image/*"
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                        onChange={handleImageChange}
                    />
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Product"
                            className="mt-2 rounded-md max-h-40"
                        />
                    )}
                </div>

                <button
                    onClick={handleAddProduct}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Add Product
                </button>
                
            </div>
        </div>
  )
}


