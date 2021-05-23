import React from 'react';
import {FormControl, Select, MenuItem, Button} from '@material-ui/core';
import 'tachyons';

class Signin extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
        police_station : ['SSP Office','Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'],
     // police_station: ['SSP Office','PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10'],
        station_chosen: '',
	    avatarStyle: {backgroundColor:'#1bbd7e'},
      
		paperStyle: { padding :10, height:'29%',width:300, margin:"20px auto", backgroundColor: 'white'}   
   	}
   }

   onStationChange = (event) => {
   	 this.setState({station_chosen: event.target.value});
   }

   onSubmit = () => {
       const link = this.props.link;
       if(this.state.station_chosen === '')
         alert('Kindly Select a Police Station');
       else{
        fetch(link + '/api/forgot', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                station: this.state.station_chosen
            })
        })
       .then(response => response.json())
       .then(data => {
           if(data.msg === 'Email sent'){
            sessionStorage.setItem('forgotToken', data.token);
            alert('Code has been send to the official Email ID of the station!!!')
            this.props.onRouteChange('resetPass', this.state.station_chosen)
          }
          else
            alert('Kindly click the "Send Code" button again!!!')  
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
				Send Code  
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
