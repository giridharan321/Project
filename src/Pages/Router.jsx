import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom';

import About from './About'
import Services from './Services'
import Contactus from './Contactus'
import Home from './Home';
import Navbar from '../Components/Navbar';

export default function Router() {
  return (
    <div>
        
        <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contactus" element={<Contactus/>}/>
        </Routes>
        </div>
    </div>
  )
}
