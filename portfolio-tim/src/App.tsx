import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills'
import { Contact } from './contact/Contact';
import { Footer } from './footer/Footer';
import { MyProjects } from './myProjects/MyProjects';
import { Confirmation } from './confirmationPage/Confirmation';
import { Redirect, Route } from 'react-router-dom';
import { StateType } from './state/State';


type AppPropsType = {
  state: StateType
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      
      {/* <Redirect to={'/profile'} /> */}

      <Route path='/' render={ () => <Header />}/>
      <Route path='/' render={ () => <Main />}/>
      <Route path='/' render={ () => <MyProjects projects={props.state.projects}/>}/>
      <Route path='/' render={ () => <Skills skills={props.state.skills}/>}/>
      <Route path='/' render={ () => <Contact />}/>
      

      {/* <Route path='/confirmation' render={ () => <Confirmation />}/> */}
      
      
      <Route path='/' render={ () => <Footer />}/>
      <Redirect to='/' />
      
    </div>
  );
}

export default App;
