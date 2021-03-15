import React, { Component } from 'react';
import './App.css';
import './Components/Signin.css'
import SignIn from './Components/Signin';
import Logo from './Components/Logo/Logo';
import DashboardSSP from './Components/Dashboard/Dash_SSP';
import DashboardStation from './Components/Dashboard/Dash_PS';
import ProgressReport from './Components/ProgressReport/Report'
import Navigation from './Components/Navigation';
import PSReport from './Components/PSReport/PS';


class App extends Component {
  constructor(){
  super();
    this.state = {
      route : 'signin',
      policeStation: ' ',
      challan: { },
      recovery: { },
      ipc: { },
      local: { },
      progressReport: []
    }
  }
  
  onRouteChange = (route, data ) => {
    this.setState({route: route});

    if(route === 'station' && data !== 0){    
      this.setState({policeStation: data[0]});

      for(var i=1; i<5; i++){
          if(data[i].type === 'Challan')
            this.setState({challan: data[i] });
          else if(data[i].type === 'Recovery')
            this.setState({ recovery: data[i] });
          else if(data[i].type === 'IPC')
            this.setState({ ipc: data[i] });
          else if(data[i].type === 'Local')
            this.setState({ local: data[i] });         
      } 
    }

    if(route === 'ssp' && data !== 0)
       this.setState({progressReport: data});
  }

  render(){
    const {route} = this.state;
    
    if(route === 'signin'){
       return(
        <div className='App signin'>
         <Logo />
         <SignIn onRouteChange={this.onRouteChange} />
        </div>
       );
    }
    else if (route === 'station'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
          <DashboardStation policeStation={this.state.policeStation} challan={this.state.challan} recovery={this.state.recovery} ipc={this.state.ipc} local={this.state.local} />
         </div>
        );
    }
    
    else if(route === 'ssp'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
          <DashboardSSP progressReport={this.state.progressReport}/>
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
          <PSReport policeStation={this.state.policeStation} />
         </div>
        );
    }
  }
}
 
export default App;
