import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const NewProducts = () => {

    const { products } = useContext(ShopContext);
    const[newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        setNewProducts(products.slice(0,5)); // add 10 products
    }, [products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'NEW'} text2={'PRODUCTS'}/>
        <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-500'>
            Check out our new arrivals straight from South Korea!
        </p>
      </div>

        {/* Rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
           newProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
           ))     
        }
        </div>
    </div>
  )
}

export default NewProducts
