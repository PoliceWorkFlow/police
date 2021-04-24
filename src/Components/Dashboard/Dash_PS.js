import React, {useState} from 'react';
import './dashboard.css';
import {Card, CardContent } from "@material-ui/core";
import Table from './Table';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Stacked from './stacked_graph';
import ComparativeAnal from './comparativeAnal';
import 'tachyons';

function Dashboard(props){

  const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
  const [report, setReport] = useState(props.progressReport);
  const [selectedDate, setSelectedDate] = useState(props.progressReport[0].monYear);
  const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);  

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
          <div >   
             { report.length === 0
                   ? <p></p>
                    :   
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
                      <h3 style={{paddingBottom:'10px'}}>Comparative analysis based on Progress Report</h3>
                        <div class="row">
                        <div class="column">
                              <Stacked Report = {report} flag = {1}/>
                        </div>
                        <div class="column">
                          <Stacked Report = {report} flag = {2} />
                        </div>
                        </div> 
                        <div>
                        < ComparativeAnal policeStation={props.policeStation}/>
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
                }   
         </div>        
        );
       
}

export default Dashboard;
