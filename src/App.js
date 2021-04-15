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
import PSWiseReport from './Components/psWiseReport/psWiseReport';


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
      progressReport: [],
      caseType: ''
    }
  }
  
  onRouteChange = (route, data ) => {
    this.setState({route: route});
    
    if(route === 'stationReport')
       this.setState({caseType: data});

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
   
   onMonthChange = (data) => {
        var challan = data.challan; 
        challan.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({challan});

        var ipc = data.ipc;
        ipc.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({ipc});

        var recovery = data.recovery;
        recovery.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({recovery});

        var local = data.local; 
        local.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({local});
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
        <div className='App '>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
          <DashboardSSP progressReport={this.state.progressReport} />
         </div>
        );
    }

    else if(route === 'progressReport'){
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
          <PSReport policeStation={this.state.policeStation} caseType={this.state.caseType} />
         </div>
        );
    }
    else if(route === 'psWiseReport'){
      return (
        <div>
          {  this.state.challan.length === 0 || this.state.recovery.length === 0 || this.state.ipc.length === 0 || this.state.local.length === 0 
            ? <p></p>
            :  
             <div className='App'>
              <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
              <PSWiseReport challan={this.state.challan} recovery={this.state.recovery} ipc={this.state.ipc} local={this.state.local} onMonthChange={this.onMonthChange}/>
              </div>
          }
          </div>
        
        );
    }
  }
}
 
export default App;
