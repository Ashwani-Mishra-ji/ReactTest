import React, { useEffect, useState } from 'react'
import './Product.css'
import axios from 'axios'

const Product = () => {

  const [data, setData] = useState([])

  useEffect( () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data)
    })
  }, [])
  return (
    <>
    <div className=''>
      <h2 className='headingProduct'>New products</h2>
      <img className='lineimg' src="src/assets/Group 17 (1).png" alt="" />
      </div>
      <div className='flex flex-wrap '>
        <div className='w-1/4 p-4 cards'>
         <p className='Apparel'>Apparel</p>
         <p className='Accessories'>Accessories</p>
         <p className='BestSellers'>Best sellers</p>
         <p className='off'>50% off</p>
        </div>
        <div className='cards '>
          <div className='grid overflow-hidden'>
           {data.map( (product)=>{
           const {id, title , price,description, image,category } = product;
            return <div className={ data ? 'slide-in':''} key={id} > 
            <img  className='productImage' src={image} alt="" srcset="" />
            <h2><span className='font-bold'>Title:</span> {title}</h2>
            {/* <p>{description}</p> */}
            <span  className='font-bold'>Price:{price}$</span>
            <p  className='font-bold'> Category:{category}</p>
          </div>
           
            })}
        </div>
      
      </div>
      </div>
      <div className='h-64'></div>
    </>
  )
}

export default Product
