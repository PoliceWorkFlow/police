import React, { Component } from 'react';
import './App.css';
import './Components/Signin.css'
import SignIn from './Components/Signin';
import Logo from './Components/Logo/Logo';


class App extends Component {
  render(){
  return (
    <div className='App'>
     
     <div className='signin'><Logo/><SignIn /></div>
     
    
    </div>
    );
  }
}
// hy 
export default App;
