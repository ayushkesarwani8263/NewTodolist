// import React, { useRef } from 'react'
import content from '../Context/contentContext'
import { useContext } from 'react'
import '../CSS/todoitem.css'
const TodoItem = ({item,index}) => {
  const dispatch=useContext(content)
  return (
    <>
    <div className='row' style={{justifyContent:'center',marginTop:"3px"}}>
    <div className='col-md-6' style={{display:'inline-block'}}>
    <input type="text" className="form-control box" value={item} readOnly />
 </div>
    <div className='col-md-1' style={{display:'inline-block'}}>

    <button className='btn btn-danger' onClick={()=>dispatch({type:'delete',payload:index})} >Delete</button>
    </div>
    </div>
    </>
         )
}

export default TodoItem