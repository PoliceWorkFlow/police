import React, {useState} from 'react';
import 'tachyons';
import { MenuItem, FormControl, Select, Grid} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "date-fns";
import Challan from './challan';
import IPC from './ipc';
import Local from './local';
import Recovery from './recovery';

export default function CustomizedTables(props) {
  const [case_chosen, setStaion] = useState('Under IPC Law');
  const [caseType] = useState(['Under IPC Law', 'Under Local & Special Law', 'Recovery', 'Challan']);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
 // console.log(props);

  const onCaseTypeChange = (event) => {
    setStaion(event.target.value);
   }
  
   const onNotification = (ps, month, type) => {
      console.log(ps + ' ' + month + ' ' + type);

      fetch('http://localhost:3000/api/sendNotification', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					ps: ps,
               monYear: month,
               type: type
			  	})
		   	})
		  	.then(response => response.json())
		  	.then(data => { 
             if(data === 'Email sent')
               alert('Notification Send!!!')
             else
               alert('Kindly send the notification again!!!')  
          })
     
     } 

  const handleDateChange = (date) => {
     const monYear = months[0][date.getMonth()] + ' ' + date.getFullYear();
     setSelectedDate(monYear);

     fetch('http://localhost:3000/api/extractDetails', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					monYear: monYear
			  	})
		   	})
		  	.then(response => response.json())
		  	.then(data => { 
             props.onMonthChange(data);
          })
     
  } 

  return (
     <div>
        <Grid container >
					 <Grid item xs={7}>
            <h2 class="pt2">POLICE STATION WISE REPORT </h2>
            </Grid>
            <Grid item xs={3}>
              <FormControl className="dash_dropdown" style={{minWidth: 100 }} class="tr pb2 pr5" >  
              <Select variant="outlined" onChange={onCaseTypeChange} value={case_chosen} >
              { caseType.map((cases) => (
                  <MenuItem value = {cases} > {cases} </MenuItem>
                  ))}
              </Select>
              </FormControl>
              </Grid>
             <Grid item xs={2} style={{padding: '14px'}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
						 <DatePicker 
							variant="outlined"
							openTo="year"
							views={["year", "month"]}
							dateFormat="MM/yyyy"
							showMonthYearPicker
							label="Select Date"
							value={selectedDate}
							onChange= { date => handleDateChange(date)}
							/>  
				   </MuiPickersUtilsProvider>
           </Grid>
        </Grid>         
    
        { case_chosen === 'Challan'
            ? <Challan challan={props.challan} challanCheck={props.challanCheck} onNotification={onNotification} />
            :   case_chosen === 'Under IPC Law'
                ? <IPC ipc={props.ipc} ipcCheck={props.ipcCheck} onNotification={onNotification}/>
                :  case_chosen === 'Under Local & Special Law'
                   ? <Local local={props.local} localCheck={props.localCheck} onNotification={onNotification}/>
                   : <Recovery recovery={props.recovery} recoveryCheck={props.recoveryCheck} onNotification={onNotification} />
          }    
    </div> 
  );
}