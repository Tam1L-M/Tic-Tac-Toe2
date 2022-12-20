import React from 'react'
function square({val,choosesquare}:{val:any,choosesquare:any}) {
  return (
    <div className='flex-[33%]  h-full border border-black grid justify-center items-center text-2xl font-semibold ' onClick={choosesquare}>{val}</div>
  )
}

export default square