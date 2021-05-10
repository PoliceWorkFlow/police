import React from 'react';
import 'tachyons';
import './Navigation.css';
import {Link} from '@material-ui/core';


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
     	   <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	       <div className="flex-grow flex items-center pt2 pb3" >
		   <p  onClick={() => onRouteChange('progressReport')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Progress Report</p>
		   <p  onClick={() => onRouteChange('psWiseReport')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >PS Wise Report</p>
		   <div  class="dropdown" >
              <p className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >More</p>
              <div class="dropdown-content">
			  <Link href=''  onClick={(e) => {e.preventDefault(); onRouteChange('enotice')}}  >E Notice </Link>
		      <Link href=''  onClick={(e) => {e.preventDefault(); onRouteChange('marksCrit')}} >Marks Criteria </Link>  
		      <Link href=''  onClick={(e) => {e.preventDefault(); onRouteChange('profileSSP')}} >Profile </Link>  	    
              </div>
            </div>
	       <p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
	       </div>
		{/*   <h2  className='f3 tl pl4'>SSP OFFICE</h2> */}
	       </nav>
		   	
        );
     } 

	 else if(route === 'station'){
		return(
			 <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
			<div className="flex-grow flex items-center pt2 pb4">
			<div  class="dropdown" >
              <p className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Monthly Report</p>
              <div class="dropdown-content">
                <Link href='' onClick={(e) => {e.preventDefault(); onRouteChange('stationReport', 'Investigation')}}> Investigation </Link>
                <Link  href='' onClick={(e) => {e.preventDefault(); onRouteChange('stationReport', 'Recovery')}}> Recovery </Link>
				<Link  href='' onClick={(e) => {e.preventDefault(); onRouteChange('stationReport', 'Challan')}}> Challan </Link>	
              </div>
            </div>	 
			<p  onClick={() => onRouteChange('marksCritPS')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Marks Criteria</p>  
			<p  onClick={() => onRouteChange('profilePS')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Profile</p>   
			<p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
			</div>
			</nav>	
		 );
	  }
	  
	  else if(route === 'progressReport' || route === 'psWiseReport' || route === 'enotice' || route === 'profileSSP' || route === 'marksCrit'){
		return(
			 <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
			<div className="flex-grow flex items-center pt2 pb3">
			<p  onClick={() => onRouteChange('ssp',0)} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Go Back</p>		    
			<p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
			</div>
			</nav>	
		 );
	  }

	  
	  else if(route === 'stationReport' || route === 'profilePS' || route === 'marksCritPS'){
		return(
			 <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
			<div className="flex-grow flex items-center pt2 pb4">
			<p  onClick={() => onRouteChange('station', 0)} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Go Back</p>
			<div  class="dropdown" >
              <p className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Monthly Report</p>
              <div class="dropdown-content">
                <Link href='' onClick={(e) => {e.preventDefault(); onRouteChange('stationReport', 'Investigation')}}> Investigation </Link>
                <Link  href='' onClick={(e) => {e.preventDefault(); onRouteChange('stationReport', 'Recovery')}}> Recovery </Link>
				<Link  href='' onClick={(e) => {e.preventDefault(); onRouteChange('stationReport', 'Challan')}}> Challan </Link>
              </div>
            </div>	    
			<p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
			</div>
			</nav>	
		 );
	  } 
}

export default Navigation;

