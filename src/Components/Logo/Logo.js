import React from 'react';
import Tilt from 'react-tilt';
import logo from './PP_Logo.png'
import './Logo.css'

const Logo = () => {
	return(
       <div className='ml3 mt0'>
	      <Tilt options={{ max : 35 }} style={{ height: 50, width: 125 }} >
	        <div className="Tilt-inner pa3">
	         <img style={{paddingTop: '0px'}} src={logo} alt=''/>
	        </div>
	      </Tilt>
		  
       </div>
	);
}

export default Logo