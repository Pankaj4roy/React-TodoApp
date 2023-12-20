import React from 'react'

const Praclist = (props) => {

    const clear=()=>{

    }
  return (
    <>
    <div className='todo'>
    <li> {props.text} </li>
<div className='icon'>
    <button onClick={()=>{
        props.onSelect(props.id)
        // props.onSelect(props.id) ye krne se faida ye ha ki hme har input field , id ke sath milega so delete krna asan hga 
    }}>
    ➖
    </button>
</div>
    </div>
    </>
  )
}

export default Praclist
