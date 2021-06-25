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

      <Route path='/index' render={ () => <Header />}/>
      <Route path='/index' render={ () => <Main />}/>
      <Route path='/index' render={ () => <MyProjects projects={props.state.projects}/>}/>
      <Route path='/index' render={ () => <Skills skills={props.state.skills}/>}/>
      <Route path='/index' render={ () => <Contact />}/>
      

      {/* <Route path='/confirmation' render={ () => <Confirmation />}/> */}
      
      
      <Route path='/index' render={ () => <Footer />}/>
      <Redirect to='/index' />
      
    </div>
  );
}

export default App;
