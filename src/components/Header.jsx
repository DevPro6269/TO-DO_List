import React from 'react'

const Header = ({value,
    handleChange,
    handlesubmit,
}) => {
  return (
    <>
    <div className=' mt-2 mx-auto'>
        <form action="" onSubmit={(e)=>{handlesubmit(e)}} >
        <input type="text" placeholder='Write ToDo....' className='w-80 h-14 rounded-md outline outline-slate-500' value={value} onChange={(e)=>{handleChange(e.target.value)}}/> &nbsp;
        <button type='submit' className='p-2 w-20 border-2 rounded-xl bg-blue-600 hover:bg-blue-400'>Add</button>
        </form>
    </div>
    </>
  )
}

export default Header