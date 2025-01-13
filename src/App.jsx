import { useEffect, useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import To_do_list from "./components/To_do_list"
function App() {
  let[todos,setTodos]= useState([{id:1,task:"dance",isChecked:false,isEditable:false}])
const [value,setvalue]= useState("")

const[taskValue,SettaskValue]=useState("")

function handleDelete(id){
 
  setTodos((prev) =>
    prev.filter((e) =>
      e.id !== id 
    )
  );
}

function handleeditvalue(id){
  console.log(id);
  setTodos((prev) =>
    prev.map((e) =>
      e.id === id ? { ...e, task: taskValue,isEditable:!e.isEditable } : e
    )
  );
}

function handleCheck(id) {
  
  setTodos((prev) =>
    prev.map((e) =>
      e.id === id ? { ...e, isChecked: !e.isChecked } : e
    )
  );
}

function handleEdit(id,val){
  console.log(id);
  SettaskValue(val)
  setTodos((prev)=>(
    prev.map((e)=>(
      e.id==id?{...e,isEditable:!e.isEditable}:e
    ))
  ))
}

function handlesubmit(e){
  e.preventDefault()
  console.log(value);
  setTodos((prevTodo)=>{
    return todos=[...prevTodo,{
      id:uuidv4(),
      task:value,
      isChecked:false,
      isEditable:false
    }]
 })
 setvalue("") 
}

useEffect(()=>{

},[todos])


  return (
    <>
    <div className='flex justify-center items-center'>
      <Header value={value} handleChange={(value)=>{setvalue(value)}} handlesubmit={(e)=>{handlesubmit(e)}}  />
    </div>
    <br /> <br />
    <To_do_list Alltask={todos} handleeditvalue={(id)=>{handleeditvalue(id)}} taskValue={taskValue}  handleInput={(val)=>{SettaskValue(val)}} handleEdit={(id,val)=>{handleEdit(id,val)}} handleDelete={(id)=>{handleDelete(id)}}  handleCheck={(id)=>{handleCheck(id)}}  />
    </>
  )
}

export default App
