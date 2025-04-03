import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="header">
    <div className='book'>
      <h3>E-BOOK</h3>
      <p>landing page</p>
     </div>
     <nav className='navbar'><ul><li>home</li></ul>
     <ul><li>about</li></ul>
     <ul><li>services</li></ul>
     </nav>
    </div>

   <div className='the'> <div className='solve'>
      <h1 className='PR'>Solve the problem of everday life in 1 minute</h1>
      <span><p className="lorem">Lorem Ipsum is simply dummy text of the printing and#
         typesetting industry. Lorem Ipsum has b
         een the industry's standard dummy text ever since the 1500s, when 
         an unknown printer took a galley of type and scrambled it to make a t
         ype specimen book. It has survived not only five centuries, but also the leap into electron
         ic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letr
         aset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
         including versions of Lorem Ipsum</p></span>
  
    <button className='btn'>order this ebook for $49</button>
    <p className='chap'>interested in a free chapter? <span className='now'>Download it now¬</span> </p></div> 
     <div className='novel'><img  className=" pic"src="./no.jpg" ></img></div></div>
    
  
    </>
  )
}

export default App
