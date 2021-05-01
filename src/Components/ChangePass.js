import React from 'react';
import {Button} from '@material-ui/core';
import { } from 'react-router-dom'
import 'tachyons';

class Signin extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
        police_station : '',
        new_pass: '',
        confirm_pass: '',
        email: '',
	    avatarStyle: {backgroundColor:'#1bbd7e'},
		paperStyle: { padding :10, height:'65vh',width:300, margin:"20px auto", backgroundColor: 'white'}   
   	}
   }

   componentDidMount(){
      let slugparam = this.props.match.params.slug;
     
       let splitslug = slugparam.split('+++');
       let reqDate = splitslug[0];
       let emailName= splitslug[1].split('++');
       let email = emailName[0];
       let station = emailName[1];
       console.log(reqDate);
       console.log(email);
       console.log(station);
       this.setState({email: email, police_station:station});
       let date1 = new Date(reqDate);
       let currentDate = new Date();
       let difference = currentDate - date1;
      console.log(difference);
       if(difference > 900000){
           alert('Link has been expired!!!\nKindly send the reset password link again')
           this.props.history.push('/')
           this.props.onRouteChange('signin')
       }
   }

   onPassChange1 = (event) => {
    this.setState({new_pass: event.target.value});
   }

   onPassChange2 = (event) => {
    this.setState({confirm_pass: event.target.value});
    }
   
    onChangeRoute = () =>{
        this.props.history.push('/')
        this.props.onRouteChange('signin')
    }

   onSubmit = () => {
      
       if(this.state.new_pass === '')
         alert('Kindly add new password');

       else if(this.state.new_pass !== this.state.confirm_pass)
         alert('Kindly check the confirm password!!!\nBoth password should match!!!')

       else{
           console.log(this.state.new_pass)
           console.log(this.state.confirm_pass)
        fetch('http://localhost:3000/update_password', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                station: this.state.police_station,
                email: this.state.email,
                new_pass: this.state.new_pass
            })
        })
       .then(response => response.json())
       .then(data => {
           if(data === 'success'){
             alert('Password changed Successfully!!!!')
             this.props.history.push('/')
             this.props.onRouteChange('signin')
           }
           else 
             alert('Error in reseting Password!!\nKindly reset it again!!!')
       }) 
      }
      
       }  

	 render(){

	 return(
	 <article style = {this.state.paperStyle}  >
         <div className = 'pt3 pb1 w5'>
         <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	         <legend className="f3 fw6 ph0 mh0">Reset Password</legend>
             <label className="db pt2 fw6 lh-copy f5">{this.state.police_station}</label>
	         <div className="mv2">
	          <label className="db fw6 lh-copy f6" htmlFor="password">New Password</label>
	          <input 
	            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	            type="password" 
	            name="password"  
	            id="new_pass"
	            onChange={this.onPassChange1} 
	            />
	         </div>
	         <div className="mv3">
	          <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
	          <input 
	            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	            type="password" 
	            name="password"  
	            id="confirm_pass"
	            onChange={this.onPassChange2} 
	            />
	         </div>
	        </fieldset>
            </div>  
        <Button variant="contained" color="secondary" onClick={this.onSubmit}>
				Reset Password 
			</Button>
            <div className='pa3'>
        <Button variant="contained" color="lightsecondary" onClick={this.onChangeRoute}>
				Sign In Page
			</Button> 
            </div>          
	</article>  
	
    );
  }
}

export default Signin;