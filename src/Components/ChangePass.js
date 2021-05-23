import React from 'react';
import { Button } from '@material-ui/core';
import { } from 'react-router-dom'
import 'tachyons';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      police_station: this.props.station,
      new_pass: '',
      station : ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur', 'SSP Office'],
      confirm_pass: '',
      code: '',
      avatarStyle: { backgroundColor: '#1bbd7e' },
      paperStyle: { padding: 10, height: '32%', width: 300, margin: "20px auto", backgroundColor: 'white' }
    }
  }
    

  onPassChange1 = (event) => {
    this.setState({ new_pass: event.target.value });
  }

  onPassChange2 = (event) => {
    this.setState({ confirm_pass: event.target.value });
  }

  onCodeChange = (event) => {
    this.setState({ code: event.target.value });
  }

  onChangeRoute = () => {
    this.props.onRouteChange('signin')
  }

  something=(e)=> {
    if (e.keyCode === 13) {
        this.onSubmit()
    }
   }

  onSubmit = () => {
    const link = this.props.link;
    if (this.state.code === '')
      alert('Kindly add verification code');

    else if (this.state.new_pass === '')
      alert('Kindly add new password');

    else if (this.state.new_pass !== this.state.confirm_pass)
      alert('Kindly check the confirm password!!!\nBoth password should match!!!')

    else {
      
      var token = sessionStorage.getItem('forgotToken');
      fetch(this.props.link + '/api/checkLink', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        station: this.props.station,
        token: token,
        code: this.state.code
      })
      })
      .then(response => response.json())
      .then(data => {
  
         if (data === 'link expired'){
           alert('Verification code has been expired!!!\nKindly send the reset password code again')
            this.props.onRouteChange('signin')
         }

         else if(data === 'wrong code'){
          alert('Kindly recheck the Verification code again!!!!!')
         }

        else if (data !== 'success') {
          alert('Error!! Kindly send the Code again!!!')
          this.props.onRouteChange('signin')
        }

        else{
          fetch(link + '/api/update_password', {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              station: this.state.police_station,
              new_pass: this.state.new_pass
            })
          })
            .then(response => response.json())
            .then(data => {
                if (data === 'success') {
                alert('Password changed Successfully!!!!')
                this.props.onRouteChange('signin')
              }
              else
                alert('Error in reseting Password!!\nKindly reset it again!!!')
            })

        }
       })
    }
  }
  

  render() {
	  console.log(this.props.station);
	  console.log(this.state.police_station);
    
    return (
      <article style={this.state.paperStyle} >
        <div className='pt3 pb1 w5'>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Reset Password</legend>
            <label className="db pt2 fw6 lh-copy f5">{this.state.police_station}</label>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="code">Enter Verification Code </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="text"
                id="code"
                onChange={this.onCodeChange}
                onKeyDown={(e) => this.something(e) }
              />
            </div>

            <div className="mv2">
              <label className="db fw6 lh-copy f6" htmlFor="password">New Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="new_pass"
                onChange={this.onPassChange1}
                onKeyDown={(e) => this.something(e) }
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
                onKeyDown={(e) => this.something(e) }
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
