import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills'
import { MyWork } from './skills/myWorks/MyWorks';
import { Contact } from './contact/Contact';
import { Footer } from './footer/Footer';




function App() {
  return (
    <div className="App">
      
      <Header />
      <Main />
      <MyWork />
      <Skills />
      <Contact />
      <Footer />
      

    </div>
  );
}

export default App;
