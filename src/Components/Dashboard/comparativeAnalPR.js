import React from 'react';
import { MenuItem, FormControl, Select, Button} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Line from './simpleLineGraph';

function handleDateChange(date){
  const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monYear = months[new Date().getMonth()] + ' ' + new Date().getFullYear();
  var year = monYear.split(' ')[1];
  var index = new Date().getMonth();

  if(index === 0)
     year = year - 1;
  else
    index = index - 1;

   monYear = months[index] + ' ' + year;
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
   
    componentDidMount() { 
   
      var token = sessionStorage.getItem('jwtToken');
      fetch(this.props.link + '/api/extractDetailsProgressReport', {
          method: 'post',
          headers: {'Content-Type': 'application/json',  'jwttoken': token},
          body: JSON.stringify({
              id: this.props.policeStation,
              monYear: this.state.selectedDate,
              range: this.state.time_choosen
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'error')
              alert('Kindly click submit button again')
            else 
              this.setState({report: data.report});
        })
    }

    handleDateChange = (date) => {          
        const monYear = this.state.months[date.getMonth()] + ' ' + date.getFullYear();
        const monthCurr = this.state.months[new Date().getMonth()] + ' ' + new Date().getFullYear();
  
        if(monthCurr.split(' ')[1] < monYear.split(' ')[1])
            alert('You have entered wrong Year!!!!')
  
        else if(monthCurr.split(' ')[1] === monYear.split(' ')[1] &&  this.state.months.indexOf(monthCurr.split(' ')[0]) < this.state.months.indexOf(monYear.split(' ')[0]))
           alert('You have entered wrong month!!!!')

        else   
         this.setState({selectedDate: monYear})
    }

    onTimeTypeChange = (e) => {
      this.setState({time_choosen: e.target.value})
    }

    onSubmit = () => {
        if(this.state.time_choosen === '')
          alert('Kindly select date range');

        else{
          var token = sessionStorage.getItem('jwtToken');
          fetch(this.props.link + '/api/extractDetailsProgressReport', {
              method: 'post',
              headers: {'Content-Type': 'application/json',  'jwttoken': token},
              body: JSON.stringify({
                  id: this.props.policeStation,
                  monYear: this.state.selectedDate,
                  range: this.state.time_choosen
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.auth === false)
                  alert('Problem in Authorization!!!\nKindly do it again!!')
                 else if(data === 'error')
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

