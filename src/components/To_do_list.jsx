import React from 'react'
import To_do_item from "./To_do_item"
const To_do_list = ({Alltask,
  handleCheck,
  handleDelete,
  handleEdit,
  handleInput,
  taskValue,
  handleeditvalue
}) => {
  return (
    <>
    <div className=' flex flex-col items-center'>
   {Alltask.map((e)=>{
      return <To_do_item key={e.id}  handleeditvalue={(id)=>{handleeditvalue(id)}} taskValue={taskValue} val={e.task} id = {e.id} handleInput={(val)=>handleInput(val)} isChecked={e.isChecked} isEditable={e.isEditable} handleEdit={(id,val)=>{handleEdit(id,val)}}  handleDelete={(id)=>{handleDelete(id)}}  handleCheck={(id)=>{handleCheck(id)}} />
   })}
    </div>
    </>


  )
}

export default To_do_list