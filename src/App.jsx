import { useReducer } from 'react'
import './App.css'
import Adder from './Components/Adder'
import ToDo from './Components/ToDo'
import content from './Context/contentContext'
function App() {
  function todoSetter(state,action)
    {
    switch(action.type){
      case 'add':
        return [...state,action.payload]
      case 'delete':
        return state.filter((d,i)=>i!=action.payload)  
      default:
        return state  
    }
  }
  const [todos,dispatch]=useReducer(todoSetter,[])
  return (
    <>
    <content.Provider value={dispatch}>  
    <div className='container' style={{height:"100vh",backgroundColor:'#3e3636',overflowY:'scroll'}}>
     <h5 className='display-5' style={{display:'flex',justifyContent:'center',color:'#59c559',fontWeight:'bold'}}>React Todo App</h5>

    <Adder></Adder>
      <ToDo props={todos}></ToDo> 
    </div>
     
      </content.Provider>
    </>
  )
}

export default App
