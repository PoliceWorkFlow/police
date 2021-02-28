import React, { Component } from 'react';
import './App.css';
import './Components/Signin.css'
import SignIn from './Components/Signin';
import Logo from './Components/Logo/Logo';
import DashboardSSP from './Components/Dash_SSP/Dashboard';
import DashboardStation from './Components/Dash_station/Dashboard';
import ProgressReport from './Components/ProgressReport/Report'
import Navigation from './Components/Navigation';
import PSReport from './Components/PSReport/PS';


class App extends Component {
  constructor(){
  super();
    this.state = {
      route : 'signin'
    }
  }
  
  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    const {route} = this.state;
    
    if(route === 'signin'){
       return(
        <div className='App'>
         <Logo />
         <SignIn onRouteChange={this.onRouteChange} />
        </div>
       );
    }
    else if (route === 'station'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
          <DashboardStation />
         </div>
        );
    }
    
    else if(route === 'ssp'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
          <DashboardSSP />
         </div>
        );
    }

    else if(route === 'progressReport'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
          <ProgressReport />
         </div>
        );
    }

    else if(route === 'stationReport'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
          <PSReport />
         </div>
        );
    }
  }
}
 
export default App;
