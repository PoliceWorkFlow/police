import React, { Component } from 'react';
import './App.css';
import './Components/Signin.css'
import SignIn from './Components/Signin';
import Logo from './Components/Logo/Logo';
import {Grid } from "@material-ui/core";
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
      caseType: '',
      challanCheck: [],
       ipcCheck: [],
      localCheck: [],
      recoveryCheck: []
    }
  }
  
  onRouteChange = (route, data ) => {
    this.setState({route: route});
    
    if(route === 'stationReport')
       this.setState({caseType: data});

    else if((route === 'ssp' || route === 'station') && data !== 0){
        this.setState({policeStation: data.id});

        var report = data.report; 
        report.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({progressReport: report});
     }

     else if(route === 'psWiseReport'){
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const monYear = months[new Date().getMonth()] + ' ' + new Date().getFullYear();

       fetch('http://localhost:3000/extractDetails', {
			 	 method: 'post',
				 headers: {'Content-Type': 'application/json'},
				 body: JSON.stringify({
					 monYear: monYear
			  	})
		   	})
		  	.then(response => response.json())
		  	.then(data => { 
         // console.log(data);
             this.onMonthChange(data);
          })
     }
   }

   onProgressChanges = (data) => {
         const id = data.id - 1;
         var progressReport = [...this.state.progressReport];
         progressReport[id] = data;
         this.setState({progressReport});
        }
   
   onMonthChange = (data) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var challanCheck = data.challanCheck; 
    //console.log(data.challanCheck);

    challanCheck.sort(function(a, b) {
      if(a.id !== b.id)
        return a.id - b.id;
      else if(a.monYear.split(' ')[1] !== b.monYear.split(' ')[1])
          return b.monYear.split(' ')[1] - a.monYear.split(' ')[1]
      else
         return  months.indexOf(b.monYear.split(' ')[0]) - months.indexOf(a.monYear.split(' ')[0])   
          
    });
    this.setState({challanCheck});

    var ipcCheck = data.ipcCheck; 
    ipcCheck.sort(function(a, b) {
      if(a.id !== b.id)
      return a.id - b.id;
      else if(a.monYear.split(' ')[1] !== b.monYear.split(' ')[1])
          return b.monYear.split(' ')[1] - a.monYear.split(' ')[1]
      else
        return  months.indexOf(b.monYear.split(' ')[0]) - months.indexOf(a.monYear.split(' ')[0]) 
    });
    this.setState({ipcCheck});

    var localCheck = data.localCheck; 
    localCheck.sort(function(a, b) {
      if(a.id !== b.id)
        return a.id - b.id;
      else if(a.monYear.split(' ')[1] !== b.monYear.split(' ')[1])
          return b.monYear.split(' ')[1] - a.monYear.split(' ')[1]
      else
         return  months.indexOf(b.monYear.split(' ')[0]) - months.indexOf(a.monYear.split(' ')[0]) 
    });
    this.setState({localCheck});
    
    var recoveryCheck = data.recoveryCheck; 
    recoveryCheck.sort(function(a, b) {
      if(a.id !== b.id)
        return a.id - b.id;
      else if(a.monYear.split(' ')[1] !== b.monYear.split(' ')[1])
         return b.monYear.split(' ')[1] - a.monYear.split(' ')[1]
      else
         return  months.indexOf(b.monYear.split(' ')[0]) - months.indexOf(a.monYear.split(' ')[0]) 
    });
    this.setState({recoveryCheck});

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
          <Grid container>
            <Grid xs={4}>
              <Logo />
            </Grid>
            <Grid xs={8}>
            <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
            </Grid>
          </Grid>
          <DashboardStation policeStation={this.state.policeStation} progressReport={this.state.progressReport} />
         </div>
        );
    }
    
    else if(route === 'ssp'){
      return (
        <div className='App '>
         <Grid container>
            <Grid xs={4}>
              <Logo />
            </Grid>
            <Grid xs={8}>
            <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
            </Grid>
          </Grid>
          <DashboardSSP progressReport={this.state.progressReport}/>
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
               <Grid container>
                <Grid xs={4}>
                  <Logo />
                </Grid>
                <Grid xs={8}>
                <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
                </Grid>
              </Grid>
              <PSWiseReport challan={this.state.challan} recovery={this.state.recovery} ipc={this.state.ipc} local={this.state.local} challanCheck={this.state.challanCheck} ipcCheck={this.state.ipcCheck} localCheck={this.state.localCheck} recoveryCheck={this.state.recoveryCheck} onMonthChange={this.onMonthChange}/>
              </div>
          }
          </div>
        
        );
    }
  }
}
 
export default App;
