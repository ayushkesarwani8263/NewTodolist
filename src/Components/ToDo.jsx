import React, { useRef } from 'react'
import TodoItem from './TodoItem'

const ToDo = ({props}) => {
   return (
    <>
    {props.map((d,i)=>(<TodoItem item={d} index={i}/>))}
    </>
  );
}

export default ToDo