import React from 'react'
import { Link } from 'react-router-dom'

function FooterTop() {
  return (
    <div className=' w-full bg-white py-6'>
      <div className=' w-full border-t-[1px] border-b-[1px] py-8'>
        <div className=' w-64 flex flex-col gap-1 mx-auto text-center'>
          <p className=' text-sm'>See Personalized recommendations</p>
          <Link>
          <button className='w-full bg-cyan-400  rounded-md py-1 font-semibold cursor-pointer hover:bg-cyan-600 active:bg-cyan-800 '>Sign In</button>
          </Link>
        
          <p className=' text-xs mt-1'>New Customer? <span className=' text-blue-600 ml-1 cursor-pointer'> Start here</span></p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop