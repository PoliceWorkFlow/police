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

  const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
  //const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);  
  const classes = useStyle();

    return(
          <div >     
            <div className="dash">
               <div className="dash_left">
                  <div className='dash_header' > 
                  <h1 className='center'>{policeStation[0][props.policeStation - 1]} Police Station</h1>
                  </div>
                  <Paper className={classes.pageContent}>
                    < ComparativeAnal policeStation={props.policeStation} /*challan={props.challan} ipc={props.ipc} local={props.local}*/ />
                 </Paper>
                 <Paper className={classes.pageContent}>
                    < ComparativeAnalPR policeStation={props.policeStation} />
                 </Paper>
                 </div> 
               </div>  
                 
         </div>        
        );
       
}

export default Dashboard;
