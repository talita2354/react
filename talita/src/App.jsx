import {Route,Routes} from 'react-router-dom'
import React from 'react'
 import HOME from './HOME'
 import CONTATO from './CONTATO'
 import NOSSA from './NOSSA'
 import PRODUTO from './PRODUTO'
 import MiSSAO from './MISSAO'
 import Footer from './Footer'




function App() {

  return (
    <>
    <div>

     <div>
      <HOME/>
     </div>

    <Routes>
      {/* <Route path='/' element={<Header />}/> */}
      <Route path='/' element={<HOME />}/>
      <Route path='/missao' element={<MiSSAO />}/>
      <Route path='/produto' element={<PRODUTO />}/> 
      <Route path='/nossa' element={<NOSSA />}/>
      <Route path='/contato' element={<CONTATO />}/>

   
     

   
    </Routes>
    <Footer/> 
  </div> 
   </>
  )
}

export default App
