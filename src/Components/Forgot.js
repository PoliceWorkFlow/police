import React from 'react';
import {FormControl, Select, MenuItem, Button} from '@material-ui/core';
import 'tachyons';

class Signin extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
        police_station : ['SSP Office','Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'],
        station_chosen: '',
	    avatarStyle: {backgroundColor:'#1bbd7e'},
		paperStyle: { padding :10, height:'50vh',width:300, margin:"20px auto", backgroundColor: 'white'}   
   	}
   }

   onStationChange = (event) => {
   	 this.setState({station_chosen: event.target.value});
   }

   onSubmit = () => {
       console.log(this.state.station_chosen);

       if(this.state.station_chosen === '')
         alert('Kindly Select a Police Station');
       else{
        fetch('http://localhost:3000/api/forgot', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                station: this.state.station_chosen
            })
        })
       .then(response => response.json())
       .then(data => {
          if(data === 'Email sent'){
            alert('Link has been send to the official Email ID of the station!!!')
            this.props.onRouteChange('signin')
          }
          else
            alert('Kindly click the "Send Link" button again!!!')  
       }) 
      }
      
       }  

	 render(){

	 return(
	 <article style = {this.state.paperStyle}  >
         <legend className="f3 fw6 center pa2">Forgot Password</legend>
         <div className = 'pt3 pb4 w5'>
		   <FormControl >  
				<Select variant="outlined" value = {this.state.station_chosen} onChange={this.onStationChange} displayEmpty>
				<MenuItem value="" disabled >Select Police Station</MenuItem>		
				{ this.state.police_station.map((station) => (
				   <MenuItem value = {station}> {station} </MenuItem>
				  ))}
				</Select>
				</FormControl>
                </div>  
        <Button variant="contained" color="secondary" onClick={this.onSubmit}>
				Send Link  
			</Button>
            <div className='pa3'>
        <Button variant="contained" color="lightsecondary" onClick={() => this.props.onRouteChange('signin')}>
				Sign In Page
			</Button> 
            </div>          
	</article>  
	
    );
  }
}

export default Signin;
