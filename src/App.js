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
      challan: [],
      recovery: [],
      ipc: [],
      local: [],
      progressReport: []
    }
  }
  
  onRouteChange = (route, data ) => {
    this.setState({route: route});
  
    /*
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
    */

    if((route === 'ssp' || route === 'station') && data !== 0){
        this.setState({policeStation: data.id});

        var report = data.report; 
        report.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({progressReport: report});

        var challan = data.challan; 
        challan.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({challan});

        var recovery = data.recovery; 
        recovery.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({recovery});

        var ipc = data.ipc; 
        //console.log(ipc);
        ipc.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({ipc});

        var local = data.local; 
        local.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({local});
     }
   }

   onProgressChanges = (data) => {
         const id = data.id - 1;
         var progressReport = [...this.state.progressReport];
         progressReport[id] = data;
         this.setState({progressReport});
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
          <DashboardStation policeStation={this.state.policeStation} progressReport={this.state.progressReport} challan={this.state.challan} recovery={this.state.recovery} ipc={this.state.ipc} local={this.state.local}/>
         </div>
        );
    }
    
    else if(route === 'ssp'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
          <DashboardSSP progressReport={this.state.progressReport} challan={this.state.challan} recovery={this.state.recovery} ipc={this.state.ipc} local={this.state.local}/>
         </div>
        );
    }

    else if(route === 'progressReport'){
      //console.log(this.state.progressReport);
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route}  /> 
          <ProgressReport onProgressChanges={this.onProgressChanges} />
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
