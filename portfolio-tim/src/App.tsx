import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills'
import { Contact } from './contact/Contact';
import { Footer } from './footer/Footer';
import { MyProjects } from './myWorks/MyProjects';





function App() {
  return (
    <div className="App">
      
      <Header />
      <Main />
      <MyProjects />
      <Skills />
      <Contact />
      <Footer />
      

    </div>
  );
}

export default App;
