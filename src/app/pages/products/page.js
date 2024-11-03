"use client"
import Card from '@/app/components/Card'
import React, { useState, useEffect } from 'react'

const getApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  return data
}

const ProductPage = () => {
  const [searchItem, setSearchItem] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const products = await getApi()
      setData(products)
    }
    fetchData()
  }, [])

  const filteredProducts = data.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  )

  return (
    <>
      <h1 className='text-[30px] font-bold p-5'>Featured Products</h1>
      <input
        className='ml-6 mb-6 p-2 pr-[250px] outline-none border-b-solid border-b-2 border-b-grey'
        placeholder='Search...'
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div className='flex flex-wrap justify-center gap-6'>
        {
            filteredProducts.length>0 ? (
                filteredProducts.map((item) => (
                    <Card item={item} key={item.id}/>
                  ))
            ):(
                <p>No Data Found</p>
            )
        }
      </div>
    </>
  )
}

export default ProductPage
