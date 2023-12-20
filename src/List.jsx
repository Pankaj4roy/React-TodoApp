// component of todomaterial ui
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const List=(props)=>{
    const [line,setLine]=useState(false)
    const click=()=>{
setLine(true)
    }
    return (
        <div className='todo'> 
        <span onClick={click}>
        <DeleteIcon className='delete'/>
        </span>
        <li style={{textDecoration:line? 'line-through':"none"}}>
         {props.text}
         </li>
</div>
    )

}
export default List;