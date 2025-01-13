import React from 'react'

const To_do_item = ({val,
  id,
  handleCheck,
  isChecked,
  handleDelete,
  isEditable,
  handleEdit,
  handleInput,
  taskValue,
  handleeditvalue
}) => {
  return (
    <>
    <div key={id} className={`border-2  ${isChecked?"bg-green-200 line-through":"bg-red-200"}   w-2/5 flex justify-around p-2 `}>
      <input type="checkbox" onChange={()=>{handleCheck(id)}} className='h-9 w-5 '/>
      &nbsp;
      <input type="text" onChange={(e)=>handleInput(e.target.value)} readOnly={!isEditable} value={isEditable?taskValue:val}  className={`w-56 bg-transparent h-full p-1 ${isEditable ? "border-2 border-blue-500" : 'outline-none'} font-semibold text-2xl`} />
   
      <button onClick={()=>{
        console.log(id);
        
        handleDelete(id)}} className='border-2 p-1 hover:bg-slate-400'>
  <i className="fas fa-trash" style={{ fontSize: '24px' }}></i>
</button>

   &nbsp;


   <button  onClick={()=>{handleeditvalue(id)}} className={` ${isEditable?"":"hidden"} border-2 p-1 hover:bg-slate-400`}>
      <i className='fas fa-file' style={{ fontSize: '24px' }}></i>
      </button>

      <button onClick={()=>{handleEdit(id,val)}} className={` ${isEditable?"hidden":""} border-2 p-1 hover:bg-slate-400`}>
      <i className='fas fa-pen' style={{ fontSize: '24px' }}></i>
      </button>
    </div>
    </>
  )
}

export default To_do_item