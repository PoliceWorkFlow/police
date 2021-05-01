import React, {useState} from 'react';
import './dashboard.css';
import { Card, CardContent, RadioGroup, FormControlLabel, Radio, Paper, makeStyles} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import 'tachyons';
import Table from './Table';
import 'tachyons';
import Stacked from './stacked_graph'
import StackedPS from './graph_investigation'
import ComparativeAnal from './ps1';
import Bar from './simplechart'

const useStyle = makeStyles(theme => ({
	pageContent : {
		margin: theme.spacing(3),
		padding: theme.spacing(2)
	}
}))

function Dashboard(props){
     const [report, setReport] = useState(props.progressReport);
     const [graph, setGraph] = useState('pr')
     const [selectedDate, setSelectedDate] = useState(props.progressReport[0].monYear);
     const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
     
     const classes = useStyle();
     const handleChange = e =>{
          const type = e.target.value;
          setGraph(type);
    }

     function onChangeDate(date){
         const monYear = months[0][date.getMonth()] + ' ' + date.getFullYear();
         setSelectedDate(monYear);

         console.log(monYear);

         fetch('http://localhost:3000/extractReportDetails', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                  monYear: monYear
              })
         })
        .then(response => response.json())
        .then(data => { 
              if(data === 'error')
                alert('Kindly select the date again!!!!')
              else{
                  var report = data; 
                  report.sort(function(a, b) {
                  return a.id - b.id;
                  });
                  setReport(report);
              }
        })
     }

     return(
      <div>
         { report.length === 0
               ? <p></p>
               :   
               <div className="dash">
               <div className="dash_left"> 
               <div className='dash_header'> 
                <h2 className='center'>SSP OFFICE</h2>
                </div>
                <RadioGroup row onChange={handleChange} value={graph}>
                <h3 className='pt2 pr3 pl5' >Comparative analysis based on </h3>
                    <FormControlLabel value= "pr" name='graph' control = {<Radio/>} label="Progress Report"/>
                    <FormControlLabel value= "mr" name='graph' control = {<Radio/>} label="Monthly Report"/>
                </RadioGroup>
               
                 { 
                    graph === 'pr'
                   ?    <div>
                         <div className='tr pb2'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <DatePicker
                                    variant="outlined"
                                    openTo="year"
                                    views={["year", "month"]}
                                    dateFormat="MM/yyyy"
                                    label="Select Month"
                              
                                    value={selectedDate}
                                    onChange= {date => onChangeDate(date)}  
                                    />  
                              </MuiPickersUtilsProvider> 
                        </div>
                        <div class="row">
                        <div class="column">
                        <Stacked Report={report} flag = {1} />
                        
                        </div>
                        <div class="column">
                        <Stacked Report = {report} flag = {2} />
                        </div>
                        </div>
                        <h3 className='pt3 pb2'>Detailed Comparison of Police Stations wrt each Attribute</h3>
                        <div class="row" > 
                        <div class="column">
                              <Bar Report = {report} date={selectedDate} flag = {1} />
                        </div>
                        <div class="column">
                              <Bar Report = {report} date={selectedDate} flag = {2} />
                           
                        </div>
                        </div>
                        </div> 
                   : 
                    <div>
                       <Paper className={classes.pageContent}>
                         <StackedPS /> 
                        </Paper>
                        <Paper className={classes.pageContent}>
                         <ComparativeAnal  />
                        </Paper>
                    </div> 
                   }
                </div>
                {
                  graph === 'pr'
                  ?
                     <div style={{paddingTop:'45px'}}>
                        <Card className="dash_right">
                        <CardContent>
                        <h3 >Rank</h3> 
                        <h5 className="pt1 tr" style={{color: '#777777'}}> {selectedDate}</h5>

                        <Table report = {report} flag = {1} />
                        <h3 className="pt4"> Progress Report</h3>
                        <h4 className="pt1"> Last Updated On</h4>
                        <h5 className="pt1 tr" style={{color: '#777777'}}> {selectedDate}</h5>
                              <Table report = {report} flag = {2} />  
                        </CardContent>
                        </Card>
                  </div> 
                  : <p></p>
                 }  
            </div> 
            }  

          </div>                
        );
      
}

export default Dashboard;
