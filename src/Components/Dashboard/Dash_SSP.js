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
import Bar from './simplechart';
import Bar2 from './relativeData';
import Compare from './compare';
import Table2 from './table2';

const useStyle = makeStyles(theme => ({
	pageContent : {
		marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
		padding: theme.spacing(1)
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

	   const monthCurr = months[0][new Date().getMonth()] + ' ' + new Date().getFullYear();
         const monYear = months[0][date.getMonth()] + ' ' + date.getFullYear();
        
         if(monthCurr.split(' ')[1] < monYear.split(' ')[1])
	     alert('You have entered wrong Year!!!!')
   
         else if(monthCurr.split(' ')[1] === monYear.split(' ')[1] &&  months[0].indexOf(monthCurr.split(' ')[0]) < months[0].indexOf(monYear.split(' ')[0]))
	     alert('You have entered wrong month!!!!')
         
        else{   
           setSelectedDate(monYear);
         var token = sessionStorage.getItem('jwtToken');

         fetch(props.link + '/api/extractReportDetails', {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'jwttoken': token },
            body: JSON.stringify({
                  monYear: monYear
              })
         })
        .then(response => response.json())
        .then(data => { 
              if(data.auth === false)
                alert('Kindly Select the date again!!!!')
             else if(data === 'error')
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
     }

     return(
      <div>
         { report.length === 0
               ? <p></p>
               :   
               <div className="dash">
               <div className="dash_left"> 
               <div className='dash_header'> 
                <h1 className='center pl6' style={{ color: '#E7040F', fontWeight: '700'}}>Police Stations Performance Review Portal</h1>
                </div>
                <RadioGroup row onChange={handleChange} value={graph}>
                <h3 className='pl2 pt2 pr3' >Comparative analysis based on </h3>
                    <FormControlLabel value= "pr" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.9rem' }}>Summarized Prog Rept</span>}/>
                   <FormControlLabel value= "pr2" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.9rem' }}>Relative Prog Rept</span>}/> 
                   <FormControlLabel value= "pr3" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.9rem' }}>Detailed Prog Rept</span>}/> 
                    <FormControlLabel value= "mr" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.9rem' }}>Monthly Rept</span>}/>
                </RadioGroup>
               
                 { 
                    graph === 'pr'
                   ?    <div>
                         <div className='tr pt2 pb2'>
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
                   graph === 'pr2'
                   ?   
                   <div>
                   <div className='center pt2 pb2'>
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

                         <div style={{paddingBottom: '20px'}}>     
                        <Stacked Report={report} flag = {1} />
                        </div>

                        <div style={{paddingTop: '30px'}}> 
                        <Stacked Report = {report} flag = {2} />
                        </div>

                        </div>
                        <div class="column" >
                            <Table2 report={report} flag = {1}/>
                        </div>
                        </div>
                       </div>
                    : 
                    
                    graph === 'pr3'
                    ? 
                        <div>
                        <div className='center pt2 pb2'>
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
                                 <Bar2 Report={report} date={selectedDate} flag = {1} />
                              <div style={{paddingTop: '20px'}}> 
                                 <Bar2 Report = {report} date={selectedDate} flag = {2} />
                              </div>
      
                              </div>
                              <div class="column" style={{paddingLeft: '30px'}} >
                              <Table2 report={report} flag = {2}/>
                              </div>
                              </div>
                              </div>

                       :
                        <div>
                        <Paper className={classes.pageContent}>
                              <StackedPS link={props.link} /> 
                              </Paper>
                              <Paper className={classes.pageContent}>
                              <ComparativeAnal link={props.link}/>
                              </Paper>
                        </div> 
                   }
                </div>
                {
                  graph === 'pr'
                  ?  
                     <div style={{paddingTop:'120px'}}>
                        <Card className="dash_right">
                        <CardContent>
                        <h3 className="pt2">Rank</h3> 
                        <h5 className="pt1 tr" style={{color: '#777777'}}> {selectedDate}</h5>

                        <Table report = {report} flag = {1} />
                        <h3 className="pt5"> Progress Report</h3>
                        <h4 className="pt1"> Last Updated On</h4>
                        <h5 className="pt3 tr" style={{color: '#777777'}}> {selectedDate}</h5>
                              <Table report = {report} flag = {2} />  
                        </CardContent>
                        </Card>
                     </div> 
                  : <p></p>
                 }  
            </div> 
            } 
            { graph === 'pr' || graph === 'pr2'
               ? <div>
                 <h2 className='pt4 pb2'>Detailed Comparison of two Police Stations</h2>
                   <Compare link={props.link} report = {report} /> 
                  </div>
                : <p></p>
            }           
    
          </div>                
        );
      
}

export default Dashboard;
