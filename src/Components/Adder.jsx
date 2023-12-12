import React, { useRef, useState } from 'react'
import content from '../Context/contentContext'
import { useContext } from 'react'
const Adder = () => {
  const [test,setTest]=useState("")
  const dispatch=useContext(content)
  function testSetter(){
    if(test!=""){
    dispatch({type:'add',payload:test})
    }
    setTest('')
  }
   return (
    <>
    <div className='row' style={{justifyContent:'center'}}>
      <div className='col-md-6' style={{display:'inline-block'}}>
     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the value" value={test} onChange={(e)=>setTest(e.target.value)} style={{backgroundColor:"#3e3636",color:"white"}}/>
      </div>
     <div className='col-md-1' style={{display:'inline-block'}}>
      <button className='btn btn-success' onClick={()=>testSetter()} style={{paddingLeft:'19px',paddingRight:'17px'}}>ADD</button>
    </div>      
</div>    
    </>
  )
}

export default Adder