import React ,{useState} from 'react'
import Praclist from './Praclist'

const App = () => {
    const[add,setAdd]=useState()
    const[item,setItem]=useState([])


const click=()=>{
setItem((old)=>{
return ([...old,add])
// ye krne se hmko previous data + current data milega.Jo setItem hai wo hmesa previous value return krta hai agar kuch parameter pass krida to
})
setAdd("")
}
const clear=(id)=>{
   return  setItem((old)=>{
return old.filter((value,index)=>{
    return index!==id
   })
})
}



  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
        <h1>TodoList</h1>
      <input onChange={(e)=>{setAdd(e.target.value)}} type="text" placeholder='Add an item' value={add}  />
      <button onClick={click}>➕</button>


      <ol>
      {item.map((itemvalue,index)=>{
        return(
         <Praclist
            text={itemvalue}
            id={index}
            key={index}
            onSelect={clear}
         />
        )
        
      })
      }
        
      </ol>
        </div>
    </div>
    </>
  )
}   

export default App
