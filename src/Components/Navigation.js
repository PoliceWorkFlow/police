import React from 'react';
import 'tachyons';

const Navigation = ({onRouteChange, route}) => {
	if(route === 'signin'){
	 return(
	     <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	       <div className="flex-grow grow flex items-center"> 
	         <p  onClick={() => onRouteChange('home')} className='f5 dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign In</p>
	       </div> 
	     </nav>
	   );
     }

    else if(route === 'ssp'){
       return(
     	   <nav >
	       <div className="flex-grow flex items-center pt2 pb3" style={{display: 'flex' , justifyContent: 'flex-end'}}>
		   <p  onClick={() => onRouteChange('progressReport')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Progress Report</p>
		   <p  onClick={() => onRouteChange('psWiseReport')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >PS Wise Report</p>	    
	       <p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
	       </div>
		   <h2  className='f3 tl pl4'>SSP OFFICE</h2>
	       </nav>
		   	
        );
     } 

	 else if(route === 'station'){
		return(
			 <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
			<div className="flex-grow flex items-center pt2 pb4">
			<p  onClick={() => onRouteChange('stationReport')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Monthly Report</p>	    
			<p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
			</div>
			</nav>	
		 );
	  }
	  
	  else if(route === 'progressReport' || route === 'psWiseReport'){
		return(
			 <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
			<div className="flex-grow flex items-center pt2 pb3">
			<p  onClick={() => onRouteChange('ssp',0)} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Go Back</p>	    
			<p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
			</div>
			</nav>	
		 );
	  }
	  
	  else if(route === 'stationReport'){
		return(
			 <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
			<div className="flex-grow flex items-center pt2 pb4">
			<p  onClick={() => onRouteChange('station', 0)} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Go Back</p>	    
			<p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
			</div>
			</nav>	
		 );
	  } 
}

export default Navigation;