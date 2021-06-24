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
      
      {/* <Redirect to={'/profile'} /> */}

      <Route path='/' render={ () => <Header />}/>
      <Route path='/' render={ () => <Main />}/>
      <Route path='/' render={ () => <MyProjects />}/>
      <Route path='/' render={ () => <Skills />}/>
      <Route path='/' render={ () => <Contact />}/>
      

      {/* <Route path='/confirmation' render={ () => <Confirmation />}/> */}
      
      
      <Route path='/' render={ () => <Footer />}/>
    </div>
  );
}

export default App;
