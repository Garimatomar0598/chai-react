
import React from 'react'

function App() {
const [color, setColor] = React.useState("lightblue")


  return (
    <div className='text-2xl w-full h-screen
     font-bold flex justify-center items-end ' 
     style={{backgroundColor: color}}>
  <div className='justify-center flex flex-wrap bg-white shadow-lg py-2 px-3 gap-5 rounded-3xl mb-8' >
  <button  onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"red"}}>Red</button> 
  <button  onClick={()=>setColor("green")}       className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button> 
    <button  onClick={()=>setColor("blue")}     className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button> 
      <button  onClick={()=>setColor("yellow")}     className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button> 
        <button  onClick={()=>setColor("purple")}    className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button> 
          <button   onClick={()=>setColor("lightgrey")}    className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"lightgrey"}}>lightgrey</button> 
  </div>
    </div>
  
  )
}

export default App
