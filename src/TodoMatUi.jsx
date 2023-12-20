// todo app using material ui
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from "./List"

const App =()=>{
    const [item,setItem]=useState("")
    const[newitem,setNewItem]=useState([]) // empty array lia bcz hm chhate h ki user jo type krega wo ek hi bar me button click krne se show ho
    

    const event=(e)=>{
        setItem(e.target.value)
    }
    const add=()=>{
setNewItem((old)=>{
return [...old,item]  // previously typed value b store hone k lie ...old use kia
})
setItem(""); // Updated data empty hojaiga to current data (item) bhi empty hoga
    }
    
    return(
        <>
<div className='main_div'>
    <div className='center_div'>
<h1>Todo List</h1> <br />
<input 
 type="text" 
 value={item}   // mango likhne k bad doobara placeholder dikhai dena chaie.to achive this hmne setItem ko empty string set kia(16line) and value={item} This is use of value.Note-donot give space between ""
 placeholder="Add an item"
 onChange={event}
   /> 
<Button onClick={add}  className='button'> 
<AddIcon/>
 </Button> <br />
 <ol>
   { newitem.map((value,index)=>{  // map method lia - To  acess the elements one by one
        return <List  key={index} text={value}/>;

    })}
 </ol>
    </div>
</div>
        </>
    )
}
export default App;