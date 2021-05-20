import React, {useState} from 'react';
import './dashboard.css';
import {Paper, makeStyles} from "@material-ui/core";
import "date-fns";
import ComparativeAnal from './comparativeAnal';
import ComparativeAnalPR from './comparativeAnalPR';
import 'tachyons';

const useStyle = makeStyles(theme => ({
	pageContent : {
		margin: theme.spacing(3),
		padding: theme.spacing(2)
	}
}))


function Dashboard(props){

  //const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
  const policeStation = useState( ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10']);
  //const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);  
  const classes = useStyle();

    return(
          <div >     
            <div className="dash">
               <div className="dash_left">
                  <div className='dash_header' > 
                  <h2 className='center pt3' style={{ color: '#E7040F', fontWeight: '700'}}>Performance Submission/Review Portal {policeStation[0][props.policeStation - 1]} Police Station</h2>
                  </div>
                  <Paper className={classes.pageContent}>
                    < ComparativeAnal policeStation={props.policeStation} link={props.link} />
                 </Paper>
                 <Paper className={classes.pageContent}>
                    < ComparativeAnalPR policeStation={props.policeStation} link={props.link} />
                 </Paper>
                 </div> 
               </div>  
                 
         </div>        
        );
       
}

export default Dashboard;
