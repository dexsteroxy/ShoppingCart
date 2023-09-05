import React from 'react'
import { Link } from 'react-router-dom'

function FooterTop() {
  return (
    <div className=' w-full bg-white py-6'>
      <div className=' w-full border-t-[1px] border-b-[1px] py-8'>
        <div className=' md:w-64 flex flex-col gap-1 mx-auto text-center'>
          <p className=' text-sm'>See Personalized recommendations</p>
          <Link>
          <button className='md:w-full  w-40 bg-amazon_light text-white   rounded-md py-1 font-semibold cursor-pointer  '>Add to cart</button>
          </Link>
        
          <p className=' text-xs mt-1'>New Customer? <span className=' text-blue-600 ml-1 cursor-pointer'> Start here</span></p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop