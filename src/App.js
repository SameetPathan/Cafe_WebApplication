import './App.css';
import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import ContactComponent from './components/ContactComponent';
import AboutusComponent from './components/AboutusComponent';
import BackgroundComponent from './components/BackgroundComponent';

function App() {
  return (
    <div className="App" >
     <Router>
     
     <NavbarComponent></NavbarComponent>
     <div style={styles.backgroundImage}>
            
           
              <Routes> 
               
                <Route exact path='/contactus' element={ <ContactComponent></ContactComponent>}></Route>
              
                <Route exact path='/aboutus' element={ <AboutusComponent></AboutusComponent>}></Route>
            
              </Routes>
           
          
              </div>
            <FooterComponent></FooterComponent>
            
          </Router>
    
    
   
      
    </div>
  );
}

const styles = {
  backgroundImage: {
    background: 'url("bg2.jpg") center/cover no-repeat',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
};

export default App;
