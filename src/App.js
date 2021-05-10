import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import 'tachyons';
import './App.css';
import './Components/Signin.css'
import SignIn from './Components/Signin';
import Forgot from './Components/Forgot';
import ChangePass from './Components/ChangePass';
import Logo from './Components/Logo/Logo';
import {Grid } from "@material-ui/core";
import DashboardSSP from './Components/Dashboard/Dash_SSP';
import DashboardStation from './Components/Dashboard/Dash_PS';
import ProgressReport from './Components/ProgressReport/Report'
import Navigation from './Components/Navigation';
import PSReport from './Components/PSReport/PS';
import Notice from './Components/Notice/Notice';
import Profile from './Components/Profile/Profile';
import Marks from './Components/Marks/Marks';
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
      recoveryCheck: [],
   //  link: 'http://localhost:3000',
      link: 'http://103.118.50.49'
    }
  }

  onRouteChange = (route, data ) => {
    this.setState({route: route});
    
    if(route === 'stationReport')
       this.setState({caseType: data});

    else if(route === 'ssp' && data !== 0){
        this.setState({policeStation: data.id});

        var report = data.report; 
        report.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({progressReport: report});
     }
    
    else if(route === 'station' && data !== 0){
        
        this.setState({policeStation: data.id});

     /*   var challan = data.challan; 
        challan.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({challan});

        var ipc = data.ipc;
        ipc.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({ipc});
        var local = data.local; 
        local.sort(function(a, b) {
          return a.id - b.id;
        });
        this.setState({local}); */
    }
    
     else if(route === 'psWiseReport'){
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var monYear = months[new Date().getMonth()] + ' ' + new Date().getFullYear();
      var year = monYear.split(' ')[1];
      var index = new Date().getMonth();
      if(index === 0)
         year = year - 1;
      else
        index = index - 1;
  
      monYear = months[index] + ' ' + year;

      var token = sessionStorage.getItem('jwtToken');
       fetch(this.state.link + '/api/extractDetails', {
			 	 method: 'post',
				 headers: {'Content-Type': 'application/json', 'jwttoken': token},
				 body: JSON.stringify({
					 monYear: monYear
			  	})
		   	})
		  	.then(response => response.json())
		  	.then(data => { 
          if(data.auth === false)
            alert('Problem in Authorization!!!\nKindly do it again!!')
            else
             this.onMonthChange(data);
          })
     }
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
  
   onProgressChanges = (data) => {
        var progress = this.state.progressReport;
        let ps = {...progress[data.id - 1]};
        ps = data;
        progress[data.id - 1] = ps
        //console.log(progress);
        this.setState({progressReport: progress})
    }  

  render(){
    const {route} = this.state;
    var currentLocation = window.location.href;
   // console.log(currentLocation);

    if(currentLocation.includes('/change-password')){
      console.log(currentLocation);
      return(
        <div className='App signin'>
          <Logo />
          <Router >
          <Route path='/change-password/:slug' render={(props) => <ChangePass onRouteChange={this.onRouteChange} link={this.state.link} {...props}/>}/>
          </Router>
         </div>
      );
    }

    if(route === 'signin'){
       return(
        <div className='App signin'>
          {/*<Logo />*/}
           <SignIn onRouteChange={this.onRouteChange} link={this.state.link}/>
           </div>
       );
    }

  else if(route === 'Forgot'){
      return(
       <div className='App signin pt6'>
        <Forgot onRouteChange={this.onRouteChange} link={this.state.link} />
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
           
          <DashboardStation policeStation={this.state.policeStation} link={this.state.link} />
          
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
           { this.state.progressReport.length === 0
            ? <p></p>
            : <DashboardSSP progressReport={this.state.progressReport} link={this.state.link} />
           }
         </div>
        );
    }

    else if(route === 'progressReport'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route}  />  
          <ProgressReport onProgressChanges={this.onProgressChanges} link={this.state.link}/>
         </div>
        );
    }

    else if(route === 'stationReport'){
      return (
        <div className='App'>
         <Navigation onRouteChange={this.onRouteChange} route={this.state.route} /> 
          <PSReport policeStation={this.state.policeStation} caseType={this.state.caseType} link={this.state.link} />
         </div>
        );
    }

    else if(route === 'psWiseReport'){
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
            {  this.state.challan.length === 0 || this.state.recovery.length === 0 || this.state.ipc.length === 0 || this.state.local.length === 0 
              ? <p></p>
               : 
              <PSWiseReport link={this.state.link} challan={this.state.challan} recovery={this.state.recovery} ipc={this.state.ipc} local={this.state.local} challanCheck={this.state.challanCheck} ipcCheck={this.state.ipcCheck} localCheck={this.state.localCheck} recoveryCheck={this.state.recoveryCheck} onMonthChange={this.onMonthChange}/>
            }
            </div>
        );
    }

    else if(route === 'enotice'){
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
         <Notice link={this.state.link}/>
        </div>
    
    );
    }

    else if(route === 'profilePS' || route === 'profileSSP'){
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
         <Profile policeStation = {this.state.policeStation} link={this.state.link}/>
        </div>
    
    );
    }

    else if(route === 'marksCrit' || route === 'marksCritPS'){
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
          <Marks link={this.state.link}/>
        </div>
    
    );
    }
    
  }
}
 
export default App;
