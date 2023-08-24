import React from 'react'

export default function Home() {
  return (
    <div class="bg-gradient-to-b from-blue-300 to-blue-500 min-h-screen flex flex-col justify-center items-center">
  <header class="text-white text-4xl font-semibold mb-4">Welcome to Our E-Commerce Store</header>
  <p class="text-gray-200 text-lg mb-8">Discover a wide range of high-quality products.</p>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
    {/* <!-- Product Card 1 --> */}
    <div class="bg-white rounded-lg p-4 shadow-md">
      <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="Product 1" class="w-full h-40 object-cover mb-4 rounded-md" />
      <h3 class="text-lg font-semibold">Product Name 1</h3>
      <p class="text-gray-600">Description of the product goes here.</p>
      <p class="text-lg font-semibold mt-2">$99.99</p>
      <button class="bg-blue-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
    
    {/* <!-- Product Card 2 --> */}
    <div class="bg-white rounded-lg p-4 shadow-md">
      <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="Product 2" class="w-full h-40 object-cover mb-4 rounded-md" />
      <h3 class="text-lg font-semibold">Product Name 2</h3>
      <p class="text-gray-600">Description of the product goes here.</p>
      <p class="text-lg font-semibold mt-2">$149.99</p>
      <button class="bg-blue-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
    
    {/* <!-- Add more product cards here --> */}
  </div>
</div>


  )
}
