import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from '../components/Search/Searched';
import Recipe from './Recipe';
import {Route , Routes} from 'react-router-dom';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import Contact from './Contact'


function Pages() {
  return (
    
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/cuisine/:type' element= {<Cuisine/>}/>
       <Route path='/searched/:search' element={<Searched/>}/>
       <Route path='/recipe/:name' element={<Recipe/>} />
       <Route path='/AboutUs' element={<AboutUs/>}/>
       <Route path='/OurTeam' element={<OurTeam/>}/>
       <Route path='/Contact' element={<Contact/>}/>

  
    </Routes>
   
  )
}

export default Pages