import React, { useState } from 'react';
import Todolist from './Todolist';
import AddIcon from '@mui/icons-material/Add';


const App=()=>{
const[initial,final]=useState('')
const [items,setitmes]=useState([])



const itemEvent=(e)=>{
console.log(e.target.value)
final(e.target.value)
}

const listOfItem=()=>{
setitmes((old)=>{
  return [...old,initial]
});
final("")
}
const clear=(id)=>{
  console.log("deleted")
  setitmes((old)=>{
    return old.filter((aray,index)=>{
      return index!==id;

    })

  })
      }
  

  return(
    <>
<div className='main_div'>
  <div className='center_div'>
    <h1>Todo List App</h1>
    <input className ="me" type="text" placeholder='Add an item' 
    value={initial}
     onChange={itemEvent}/>
     <AddIcon onClick={listOfItem} />
  
  
  <ol>
     {items.map((value,index)=>{
      return <Todolist 
      text={value}
        key={index}
        id={index}
        onSelect={clear}
      /> 
      })}
    </ol>
  </div>
</div>
    </>
  )
}
export default App;