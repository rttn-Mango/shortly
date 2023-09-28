import { Routes, Route } from 'react-router-dom'
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      <Footer/>

      
    </>
  )
}

export default App
