import React, { useState} from 'react';
import 'tachyons';
import { Grid, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "date-fns";
import Challan from './challan';
import IPC from './ipc';
import Local from './local';
import Recovery from './recovery';
import 'tachyons';

function date(months){
   var monYear = months[new Date().getMonth()] + ' ' + new Date().getFullYear();
   var year = monYear.split(' ')[1];
   var index = new Date().getMonth();

   if(index === 0)
      year = year - 1;
   else
     index = index - 1;

   monYear = months[index] + ' ' + year;
   //console.log(monYear);
   return monYear
}

export default function CustomizedTables(props) {
   const [case_chosen, setStaion] = useState('ipc');
   const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
   const [selectedDate, setSelectedDate] = useState(date(months[0]));

   const handleChange = e =>{
      const type = e.target.value;
      setStaion(type);
    }

   const onNotification = (ps, month, type) => {
      //console.log(ps + ' ' + month + ' ' + type);
      var token = sessionStorage.getItem('jwtToken');

      fetch(props.link + '/api/sendNotification', {
         method: 'post',
         headers: { 'Content-Type': 'application/json', 'jwttoken': token },
         body: JSON.stringify({
            ps: ps,
            monYear: month,
            type: type,
            status: 'one'
         })
      })
         .then(response => response.json())
         .then(data => {
            if (data.auth === false)
               alert('Problem in Authorization!!!\nKindly do it again!!')
            else if (data === 'Email sent')
               alert('Notification Send!!!')
            else
               alert('Kindly send the notification again!!!')
         })

   }

   const onNotificationAll = (ind, type) => {
      var token = sessionStorage.getItem('jwtToken');

      if (type === 'Challan') {
         const ps = [];
         for (let j = ind; j < 30; j += 3)
            if (props.challanCheck[j].status === 'Not Filled')
               ps.push(props.challanCheck[j].id)

      

         fetch(props.link + '/api/sendNotification', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'jwttoken': token },
            body: JSON.stringify({
               ps: ps,
               monYear: props.challanCheck[ind].monYear,
               type: type,
               status: 'all'
            })
         })
            .then(response => response.json())
            .then(data => {
               if (data.auth === false)
                  alert('Problem in Authorization!!!\nKindly do it again!!')
               else if (data === 'Email sent')
                  alert('Notification Send!!!')
               else
                  alert('Kindly send the notification again!!!')
            })

      }

     else if (type === 'Recovery') {
         const ps = [];
         for (let j = ind; j < 30; j += 3)
            if (props.recoveryCheck[j].status === 'Not Filled')
               ps.push(props.recoveryCheck[j].id)

         fetch(props.link + '/api/sendNotification', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'jwttoken': token },
            body: JSON.stringify({
               ps: ps,
               monYear: props.recoveryCheck[ind].monYear,
               type: type,
               status: 'all'
            })
         })
            .then(response => response.json())
            .then(data => {
               if (data.auth === false)
                  alert('Problem in Authorization!!!\nKindly do it again!!')
               else if (data === 'Email sent')
                  alert('Notification Send!!!')
               else
                  alert('Kindly send the notification again!!!')
            })

      }

     else if (type === 'IPC Law') {
         const ps = [];
         for (let j = ind; j < 30; j += 3)
            if (props.ipcCheck[j].status === 'Not Filled')
               ps.push(props.ipcCheck[j].id)

         fetch(props.link + '/api/sendNotification', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'jwttoken': token },
            body: JSON.stringify({
               ps: ps,
               monYear: props.ipcCheck[ind].monYear,
               type: type,
               status: 'all'
            })
         })
            .then(response => response.json())
            .then(data => {
               if (data.auth === false)
                  alert('Problem in Authorization!!!\nKindly do it again!!')
               else if (data === 'Email sent')
                  alert('Notification Send!!!')
               else
                  alert('Kindly send the notification again!!!')
            })

      }

     else if (type === 'Local and Special Law') {
         const ps = [];
         for (let j = ind; j < 30; j += 3)
            if (props.localCheck[j].status === 'Not Filled')
               ps.push(props.localCheck[j].id)

         fetch(props.link + '/api/sendNotification', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'jwttoken': token },
            body: JSON.stringify({
               ps: ps,
               monYear: props.localCheck[ind].monYear,
               type: type,
               status: 'all'
            })
         })
            .then(response => response.json())
            .then(data => {
               if (data.auth === false)
                  alert('Problem in Authorization!!!\nKindly do it again!!')
               else if (data === 'Email sent')
                  alert('Notification Send!!!')
               else
                  alert('Kindly send the notification again!!!')
            })

      }

   }

   const handleDateChange = (date) => {
      const monYear = months[0][date.getMonth()] + ' ' + date.getFullYear();
      setSelectedDate(monYear);
      var token = sessionStorage.getItem('jwtToken');

      fetch(props.link + '/api/extractDetails', {
         method: 'post',
         headers: { 'Content-Type': 'application/json', 'jwttoken': token },
         body: JSON.stringify({
            monYear: monYear
         })
      })
         .then(response => response.json())
         .then(data => {
            if (data.auth === false)
               alert('Problem in Authorization!!!\nKindly do it again!!')
            else
               props.onMonthChange(data);
         })

   }

   return (
      <div>
         
           <h2 class="pb2">POLICE STATION WISE REPORT </h2>
           
           <Grid container >
            <div style={{marginLeft: '20%'}}>
            <RadioGroup row onChange={handleChange} value={case_chosen}>
                    <FormControlLabel value= "ipc" name='graph' control = {<Radio/>} label="Under IPC Law"/>
                    <FormControlLabel value= "local" name='graph' control = {<Radio/>} label="Under Local & Special Law"/>
                    <FormControlLabel value= "rec" name='graph' control = {<Radio/>} label="Recovery"/>
                    <FormControlLabel value= "chal" name='graph' control = {<Radio/>} label="Challan"/>
                </RadioGroup>
            </div>
       
            <div style={{ marginLeft:'13%'}}>
               <MuiPickersUtilsProvider utils={DateFnsUtils} >
                  <DatePicker
                     variant="outlined"
                     openTo="year"
                     views={["year", "month"]}
                     dateFormat="MM/yyyy"
                     showMonthYearPicker
                     label="Select Date"
                     value={selectedDate}
                     onChange={date => handleDateChange(date)}
                  />
               </MuiPickersUtilsProvider>
               </div>
         </Grid>

         { case_chosen === 'chal'
            ? <Challan challan={props.challan} challanCheck={props.challanCheck} onNotification={onNotification} onNotificationAll={onNotificationAll} />
            : case_chosen === 'ipc'
               ? <IPC ipc={props.ipc} ipcCheck={props.ipcCheck} onNotification={onNotification} onNotificationAll={onNotificationAll} />
               : case_chosen === 'local'
                  ? <Local local={props.local} localCheck={props.localCheck} onNotification={onNotification} onNotificationAll={onNotificationAll} />
                  : <Recovery recovery={props.recovery} recoveryCheck={props.recoveryCheck} onNotification={onNotification} onNotificationAll={onNotificationAll} />
         }
      </div>
   );
}

    /* <Grid item xs={3}>
               <FormControl className="dash_dropdown" style={{ minWidth: 100 }} class="tr pb2 pr5" >
                  <Select variant="outlined" onChange={onCaseTypeChange} value={case_chosen} >
                     {caseType.map((cases) => (
                        <MenuItem value={cases} > {cases} </MenuItem>
                     ))}
                  </Select>
               </FormControl>
                     </Grid>*/ 