import React, { Component } from 'react';
import './App.css';
import SignIn from './Components/Signin';
import Logo from './Components/Logo/Logo';


class App extends Component {
  render(){
  return (
    <div className='App'>
     <Logo />
     <SignIn />

    </div>
    );
  }
}

export default App;
