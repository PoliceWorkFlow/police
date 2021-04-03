import React from 'react';
import {Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import 'tachyons';

class Signin extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
   		signinusername: '',
   		signinPass: '',
	    avatarStyle: {backgroundColor:'#1bbd7e'},
		paperStyle: { padding :10, height:'65vh',width:500, margin:"20px auto", backgroundColor: 'white'}   
   	}
   }

   onUsernameChange = (event) => {
   	 this.setState({signinusername: event.target.value});
   }

   onPassChange = (event) => {
   	 this.setState({signinPass: event.target.value});
   }

   onSubmitSignIn = () => {
	 /*   if(this.state.signinEmail === 'abc')
            this.props.onRouteChange('ssp');
	    else
	        this.props.onRouteChange('station');*/

   	 fetch('http://localhost:3000/signin', {
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
	 	const {onRouteChange} = this.props;

	 return(
	 <article style = {this.state.paperStyle} className="br3 ba shadow-2 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
	      <div className="">
	       <input 
	         onClick = {this.onSubmitSignIn}
	         className="b ph3 pv2 input-reset ba b--black bg-white pointer f6 dib" 
	         type="submit" 
	         value="Sign in" 
	         />
	      </div>
		  
	    </div>
	  </main>
	</article>  
	
    );
  }
}

export default Signin;
