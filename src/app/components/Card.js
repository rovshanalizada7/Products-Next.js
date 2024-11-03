import Link from 'next/link'
import React from 'react'


const Card = ({item}) => {
  return (
    <div className='w-[328px] h-[518px] flex flex-col items-center'>
        <div className='w-[312px] h-[418px] border-solid border-2 border-lightgrey rounded-md '>
            <img className='p-2 h-[100%]' src={item.image}/>
        </div>
        <div className='w-[95%] h-[100px] box-border'>
            <h1 className='text-[22px] my-1 h-[30px] overflow-hidden '>
             <Link href={`../pages/products/${item.id}`}>{item.title}</Link>
            </h1>
            <span className='text-[22px]  text-blue-400'>${item.price}</span>
        </div>
    </div>
  )
}

export default Card