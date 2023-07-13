import React from 'react'

function SideNavContent({title,one,two,three}) {
  return (
    <div className=' py-3  border-b-[1px] border-b-gray-300'>
    <h3 className=" text-lg font-poppins font-semibold mb-1 px-4">
     {title}
    </h3>
    <ul className=' text-sm '>
      <li className=" flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
      {one}
        <span>
          
          <i className="fa-solid fa-caret-right"></i>
        </span>
      </li>

      <li className=" flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
       {two}
        <span>
          
          <i className="fa-solid fa-caret-right"></i>
        </span>
      </li>

      <li className=" flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
       {three}
        <span>
          
          <i className="fa-solid fa-caret-right"></i>
        </span>
      </li>
    </ul>
  </div>
  )
}

export default SideNavContent