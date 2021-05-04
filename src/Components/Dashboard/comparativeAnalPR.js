import React from 'react';
import { MenuItem, FormControl, Select, Button} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Line from './simpleLineGraph';

function handleDateChange(date){
    const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monYear = months[date.getMonth()] + ' ' + date.getFullYear();
    return monYear;
}

class comparativeAnal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            case_chosen: 'Under Investigation',
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            selectedDate: handleDateChange(new Date()),
            report: [],
            timeType: ['Last 3 Months Data', 'Last 6 Months Data', 'Last 9 Months Data', 'Last 1 Year Data'],
            time_choosen: 'Last 3 Months Data'
         }
    }


    handleDateChange = (date) => {          
        const monYear = this.state.months[date.getMonth()] + ' ' + date.getFullYear();
        this.setState({selectedDate: monYear})
    }

    onTimeTypeChange = (e) => {
      this.setState({time_choosen: e.target.value})
    }

    onSubmit = () => {
        if(this.state.time_choosen === '')
          alert('Kindly select date range');

        else{
          fetch('http://localhost:3000/api/extractDetailsProgressReport', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  id: this.props.policeStation,
                  monYear: this.state.selectedDate,
                  range: this.state.time_choosen
                })
            })
            .then(response => response.json())
            .then(data => {
                //console.log(data.report);
                if(data === 'error')
                  alert('Kindly click submit button again')
                else 
                  this.setState({report: data.report});
            })
          }   
    }

    render(){
        return(
        <div >
           <h3 style={{padding:'10px'}}>Comparative analysis based on Progress Report</h3> 
            
           <div style={{padding:'10px'}}>
             <FormControl style={{minWidth: 100, paddingRight: '20px'}}>  
                    <Select variant="outlined" className="dash_dropdown" onChange={this.onTimeTypeChange} value={this.state.time_choosen} displayEmpty >  
                    { this.state.timeType.map((cases) => (
                        <MenuItem value = {cases} > {cases} </MenuItem>
                        ))}
                    </Select>
             </FormControl>
             <FormControl style={{padding: '10px', width:150}} >
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
						 <DatePicker 
							variant="outlined"
							openTo="year"
							views={["year", "month"]}
							dateFormat="MM/yyyy"
							showMonthYearPicker
							label="Start Date"
							value={this.state.selectedDate}
							onChange= {this.handleDateChange}
							/>  
			  </MuiPickersUtilsProvider> 
             </FormControl> 
             <FormControl style={{paddingLeft: '20px', paddingTop: '5px'}}>
               <Button variant="contained" color="secondary" style={{width:80, height: 40}} onClick={this.onSubmit}>
                 Go </Button>
            </FormControl>  
             </div>  
             {
               this.state.report.length === 0
                ?  <p></p>
                 :
                   <Line report = {this.state.report} />
              }
        </div>
     );
    }

}

export default comparativeAnal;

