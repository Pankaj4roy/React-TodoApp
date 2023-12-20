import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const Todolist=(props)=>{
return(
    <>
    <div className='todo'>
            <li> {props.text}</li>
            <div className='icon'>
            <DeleteIcon onClick={()=>{
                props.onSelect(props.id)
            }}  />
            </div>
    </div>
    </>
)
}
export default Todolist;