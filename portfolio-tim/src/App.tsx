import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills'
import { Contact } from './contact/Contact';
import { Footer } from './footer/Footer';
import { MyProjects } from './myWorks/MyProjects';
import { Confirmation } from './confirmationPage/Confirmation';
import { Redirect, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
      <Route path='/profile' render={ () => <Header />}/>
      <Route path='/profile' render={ () => <Main />}/>
      <Route path='/profile' render={ () => <MyProjects />}/>
      <Route path='/profile' render={ () => <Skills />}/>
      <Route path='/profile' render={ () => <Contact />}/>
      <Route path='/profile' render={ () => <Footer />}/>

      <Route path='/confirmation' render={ () => <Confirmation />}/>
      
      
      {/* <Redirect to={'/profile'} /> */}
    </div>
  );
}

export default App;
