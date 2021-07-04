import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills'
import { Contact } from './contact/Contact';
import { Footer } from './footer/Footer';
import { MyProjects } from './myProjects/MyProjects';
// import { Confirmation } from './confirmationPage/Confirmation';
import { Redirect } from 'react-router-dom';
import { StateType } from './state/State';
import ScrollToTop from './scrollToTop/ScrollToTop';


type AppPropsType = {
  state: StateType
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <ScrollToTop />
      
        <Header />
        <Main />
        <MyProjects projects={props.state.projects}/>
        <Skills skills={props.state.skills}/>
        <Contact />

        <Footer />

      <Redirect to='/' />
      
    </div>
  );
}

export default App;
