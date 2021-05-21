import React from "react";
import { MenuItem, FormControl, Select, Button, Paper} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Group from './group_chart_compare';
import './stylo.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policeStation: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'],
      // policeStation:  ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10'],
      ps_choosen1: 'Nangal',
      ps_choosen2: 'City Morinda',
      selectedDate: this.props.report[0].monYear,
      data1: [this.props.report[0]],
      data2: [this.props.report[1]],
      flag: false,
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      }
    };
     
    onPSChange = (event) => {
        this.setState({ps_choosen1: event.target.value});
    }

    onPSChange2 = (event) => {
        this.setState({ps_choosen2: event.target.value});
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

    onSubmit = () => {

       if(this.state.ps_choosen1 === this.state.ps_choosen2)
         alert('Kindly select 2 different Police Stations!!!!')
       else{
        var token = sessionStorage.getItem('jwtToken');
        fetch(this.props.link + '/api/compare', {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'jwttoken': token},
            body: JSON.stringify({
                ps1: this.state.ps_choosen1,
                ps2: this.state.ps_choosen2,
                date: this.state.selectedDate 
              })
          })
          .then(response => response.json())
          .then(data => { 
              if(data.auth === false)
                   alert('Problem in Authorization!!!\nKindly do it again!!')
              else{    
                 this.setState({data1: data.report1})
                 this.setState({data2: data.report2})
                 this.setState({flag: true})
              }
          })
       }  

    }

    OnDataChanged = (report1, report2) => {
      const name1 = this.state.ps_choosen1;
      const name2 = this.state.ps_choosen2;

      var data1 = [(report1[0].caseincourt)/10, report1[0].propDisp/10, report1[0].propCrime/10, 2*report1[0].heniusCrime, 2*report1[0].POarrested, report1[0].untraceInCourt/5, report1[0].compDisp/10, 1*report1[0].cleaniness, 1*report1[0].feedback, 1*report1[0].handling, 2*report1[0].ndps/5, 1*report1[0].arm, report1[0].excise/5, report1[0].gambling/5, 2*report1[0].commercial];
      var data2 = [(report2[0].caseincourt)/10, report2[0].propDisp/10, 2*report2[0].heniusCrime, 2*report2[0].POarrested, report2[0].propCrime/10, report2[0].untraceInCourt/5, report2[0].compDisp/10, 1*report2[0].cleaniness, 1*report2[0].feedback, 1*report2[0].handling, 2*report2[0].ndps/5, 1*report2[0].arm, report2[0].excise/5, report2[0].gambling/5, 2*report2[0].commercial];

      const data = {
        labels: ['Cases Submitted in Court', 'Property Disposal', 'Untraced cases of crime against property', 'Heinous Crime', 'PO arrested', 'Untraced Cases put in court',
        'Disposal of Complaints', 'Cleaniness', 'Feedback', 'Handling', 'NDPS Act', 'Arm Act', 'Excise Act', 'Gambling Act', 'Commercial Recovery'
        ],
        datasets: [
          { 
            label: name1,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 5.6)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(54, 162, 235, 2.6)",
            hoverBorderColor: "rgba(54, 162, 235, 5.6)",
            data: data1
          },
          {
            label: name2,
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255,99,132,5.6)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,2.6)",
            hoverBorderColor: "rgba(255,99,132,5.6)",
            data: data2
          }
        ]
      }

      return data;
    };
  
  render() {
    return (
        <div >
          <div style={{padding:'10px'}}>
             <FormControl style={{minWidth: 100, paddingRight: '30px'}}>  
                    <Select variant="outlined" className="dash_dropdown" onChange={this.onPSChange} value={this.state.ps_choosen1}> 
                    { this.state.policeStation.map((station) => (
                     <MenuItem value = {station} > {station} </MenuItem>
                        ))}
                      </Select>
            </FormControl> 
            <FormControl style={{minWidth: 100, paddingRight: '30px'}}>  
                 <Select variant="outlined" className="dash_dropdown" onChange={this.onPSChange2} value={this.state.ps_choosen2}> 
                 { this.state.policeStation.map((station) => (
                    <MenuItem value = {station} > {station} </MenuItem>
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
         <FormControl style={{paddingLeft: '30px', paddingTop: '5px'}}>
               <Button variant="contained" color="secondary" style={{width:80, height: 40}} onClick={this.onSubmit}>
                 Go </Button>
        </FormControl>
        </div>
        <div>     
       
      <Group data1={this.state.data1} data2={this.state.data2} date={this.state.selectedDate} /> 
       
        </div>  
       </div> 
    );
  }
}

export default App;