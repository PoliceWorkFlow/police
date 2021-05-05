import React from 'react';
import {Avatar, Link, Button} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import 'tachyons';

class Signin extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
   		signinusername: '',
   		signinPass: '',
	    avatarStyle: {backgroundColor:'#1bbd7e'},
		paperStyle: { padding :10, height:'70vh',width:300, margin:"20px auto", backgroundColor: 'white'}   
   	}
   }

   onUsernameChange = (event) => {
   	 this.setState({signinusername: event.target.value});
   }

   onPassChange = (event) => {
   	 this.setState({signinPass: event.target.value});
   }

   onSubmitSignIn = () => {
     const link = this.props.link;

   	 fetch(link + '/api/signin', {
   		method: 'post',
   		headers: {'Content-Type': 'application/json'},
   		body: JSON.stringify({
   			username: this.state.signinusername,
   			password: this.state.signinPass
   		})
   	})
      .then(response => response.json())
      .then(data => {
      	if(data === 'unable to login')
		  alert('Wrong Credentials');	
      	else{
		  var ind = data.id;
		  if(ind>0 && ind<11)
		    this.props.onRouteChange('station', data);
		  else
		     this.props.onRouteChange('ssp', data);	
		  }	
      })
     }
     
	 render(){

	 return(
	 <article style = {this.state.paperStyle} className="br3 ba center">
		 <Avatar style={this.state.avatarStyle} className="center pa3 shadow-2"><LockOutlinedIcon/></Avatar>	
	    <main className="pa3 black-80">
	      <div className="measure">
	       <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	         <legend className="f2 fw6 ph0 mh0">Sign In</legend>
	         <div className="mt3">
	          <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
	          <input 
	            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
	            type="email" 
	            name="email-address" 
	            id="email-address"
				required
	            onChange={this.onUsernameChange} 
	            />
	         </div>
	         <div className="mv3">
	          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
	          <input 
	            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	            type="password" 
	            name="password"  
	            id="password"
	            onChange={this.onPassChange} 
	            />
	         </div>
	        </fieldset>
			<Button variant="contained" color="secondary" onClick={this.onSubmitSignIn}>
				Sign In
			</Button>

		  <div className='tl pt3'>
		  <Link href="#" onClick = {() => this.props.onRouteChange('Forgot')} variant="body2">
                Forgot password?
              </Link>
		  </div>
	    </div>
	  </main>
	</article>  
	
    );
  }
}

export default Signin;
