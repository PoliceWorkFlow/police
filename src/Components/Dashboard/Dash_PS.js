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

/*
 <div className="dash">
                    <div className="dash_left">
                      <div className='dash_header' > 
                      <h2 className='center'>{policeStation[0][props.policeStation - 1]} Police Station</h2>
                      </div>
                      <MuiPickersUtilsProvider utils={DateFnsUtils} >
                      <DatePicker
                        variant="outlined"
                        openTo="year"
                        views={["year", "month"]}
                        dateFormat="MM/yyyy" 
                        label="Select Month"
                        helperText=" "
                        value={selectedDate}
                        onChange= {date => onChangeDate(date)}  
                                        />  
                      </MuiPickersUtilsProvider>
                      <div>
                        < ComparativeAnal policeStation={props.policeStation}/>
                        </div>
                      <h3 style={{paddingBottom:'10px'}}>Comparative analysis based on Progress Report</h3>
                        <div class="row">
                        <div class="column">
                              <Stacked Report = {report} flag = {1}/>
                        </div>
                        <div class="column">
                          <Stacked Report = {report} flag = {2} />
                        </div>
                        </div> 
                       </div> 
                       <div style={{paddingTop:'45px'}}>
                        <Card className="dash_right">
                        <CardContent>
                        <h3>Rank </h3>
                        <h5 className="pt1 tr" style={{color: '#777777'}}> {selectedDate}</h5>
                            <Table report = {report} flag = {1} />
                        </CardContent>
                        </Card> 
                        </div>
                      </div>  

*/