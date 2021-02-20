import React from 'react';
import Tilt from 'react-tilt';
import logo from './PP_Logo.png'
import './Logo.css'

const Logo = () => {
	return(
       <div className='ma4 mt0'>
	      <Tilt options={{ max : 35 }} style={{ height: 125, width: 125 }} >
	        <div className="Tilt-inner pa3">
	         <img style={{paddingTop: '0px'}} src={logo} alt=''/>
	        </div>
	      </Tilt>
       </div>
	);
}

export default Logo