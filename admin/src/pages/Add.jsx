import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

const [image1, setImage1] = useState(false)
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [category, setCategory] = useState('Cap');
const [bestseller, setBestseller] = useState(false);

const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("price", price)
        formData.append("category", category)
        formData.append("bestseller", bestseller)

        image1 && formData.append("image1", image1)
        const response = await axios.post(backendUrl + "/api/product/add", formData, {headers: {token}})

        if (response.data.success) {
            toast.success(response.data.message)
            setName('')
            setDescription('')
            setImage1(false)
            setPrice('')
        } else {
            toast.error(response.data.message)
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
}

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload image</p>
        <div className='flex gap-2'>
            <label htmlFor='image1'>
                <img className='w-20' src={!image1 ? assets.upload_icon : URL.createObjectURL(image1)} alt='' />
                <input onChange={(e) => setImage1(e.target.files[0])} type='file' id='image1' hidden/>
            </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write description' required />
      </div>

      <div className='flex flex-col gap-2 w-30 sm:gap-3'>
        <div>
            <p className='mb-2'>Product category</p>
            <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
                <option value="Cap">Cap</option>
                <option value="Cone">Cone</option>
                <option value="Ice">Ice</option>
                <option value="Wafer">Wafer</option>
            </select>
        </div>

        <p>Product price</p>
        <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='20' />
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor='bestseller'>Add to Bestseller</label>
      </div>

      <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>ADD</button>
    </form>
  )
}

export default Add
