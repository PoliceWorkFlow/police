import React from 'react';
import { MenuItem, FormControl, Select, Grid} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import GroupChart from './group_chart';
import Stacked from './stacked_graph_ps'
import 'tachyons';

function handleDateChange(date){
  const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monYear = months[date.getMonth()] + ' ' + date.getFullYear();
  return monYear;
}

class StackedChart extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            case_chosen: 'Under Investigation',
            selectedDate: handleDateChange(new Date()),
            ipc: [],
            local: [],
            challan: [],
            flag: false,
            caseType: ['Under Investigation', 'Cancellation/Untraced', 'Under Investigation Over 1 Year', 'Under Investigation Over 6 Month', 'Under Investigation Over 3 Month', 'Under Investigation less than 3 month', 'Challan Cases'],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
         }
    }

    onCaseTypeChange = (event) => {
        this.setState({case_chosen: event.target.value});
    }

    handleDateChange = (date) => {          
          const monYear = this.state.months[date.getMonth()] + ' ' + date.getFullYear();
          this.setState({selectedDate: monYear})

         // console.log(this.state.case_chosen);
        fetch('http://localhost:3000/extractDetails', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					monYear: monYear
			  	})
		   	})
		  	.then(response => response.json())
		  	.then(data => { 
           this.setState({flag: true});

           var challan = data.challan; 
           challan.sort(function(a, b) {
              return a.id - b.id;
            });
            this.setState({challan});

            var ipc = data.ipc;
            ipc.sort(function(a, b) {
              return a.id - b.id;
            });
            this.setState({ipc});

            var local = data.local; 
            local.sort(function(a, b) {
              return a.id - b.id;
            });
            this.setState({local});

            if(this.state.case_chosen === 'Challan Cases')
                this.setState({case_chosen: 'Under Investigation'});
            else
                this.setState({case_chosen: 'Challan Cases'});
          })   
    }

    render(){
       return(
          <div>
              <Grid container>
			  <Grid item xs={9}>
            <FormControl style={{minWidth: 100}}>  
                    <Select variant="outlined" className="dash_dropdown" onChange={this.onCaseTypeChange} value={this.state.case_chosen} >
                    { this.state.caseType.map((cases) => (
                        <MenuItem value = {cases} > {cases} </MenuItem>
                        ))}
                    </Select>
             </FormControl>
             </Grid>
             <Grid item xs={3} style={{paddingTop: '14px'}}>
             <MuiPickersUtilsProvider utils={DateFnsUtils} >
						 <DatePicker 
							variant="outlined"
							openTo="year"
							views={["year", "month"]}
							dateFormat="MM/yyyy"
							showMonthYearPicker
							label="Select Date"
							value={this.state.selectedDate}
							onChange= { date => this.handleDateChange(date)}
							/>  
				     </MuiPickersUtilsProvider>
              
              </Grid>
             </Grid>
             <div style = {{paddingTop: '20px'}}> 
             { 
                this.state.flag === false
                ?  <h3>Kindly Select Date </h3>
                :
                   this.state.case_chosen === 'Challan Cases' && this.state.challan.length !== 0
                    ? <Stacked challan={this.state.challan} />
                    :  
                    this.state.ipc.length === 0 || this.state.local.length === 0 
                     ?  <p></p>
                     :
                     <GroupChart ipc={this.state.ipc} local={this.state.local} case_chosen={this.state.case_chosen} />
               }
             </div>
           </div > 
        );
    }

}

export default StackedChart;

     /* var challan = data.challan; 
                 challan.sort(function(a, b) {
                   return a.id - b.id;
                 });
                 this.setState({challan});

                 const overloading = [1*challan[0].overloading, 1*challan[1].overloading, 1*challan[2].overloading, 1*challan[3].overloading, 1*challan[4].overloading, 1*challan[5].overloading, 1*challan[6].overloading, 1*challan[7].overloading, 1*challan[8].overloading, 1*challan[9].overloading ];
                 const drunken = [1*challan[0].drunken, 1*challan[1].drunken, 1*challan[2].drunken, 1*challan[3].drunken, 1*challan[4].drunken, 1*challan[5].drunken, 1*challan[6].drunken, 1*challan[7].drunken, 1*challan[8].drunken, 1*challan[9].drunken ];
                 const overspeed = [1*challan[0].overspeed, 1*challan[1].overspeed, 1*challan[2].overspeed, 1*challan[3].overspeed, 1*challan[4].overspeed, 1*challan[5].overspeed, 1*challan[6].overspeed, 1*challan[7].overspeed, 1*challan[8].overspeed, 1*challan[9].overspeed ];
                 const withoutHelmet = [1*challan[0].withoutHelmet, 1*challan[1].withoutHelmet, 1*challan[2].withoutHelmet, 1*challan[3].withoutHelmet, 1*challan[4].withoutHelmet, 1*challan[5].withoutHelmet, 1*challan[6].withoutHelmet, 1*challan[7].withoutHelmet, 1*challan[8].withoutHelmet, 1*challan[9].withoutHelmet ];
                 const covid19 = [1*challan[0].covid19, 1*challan[1].covid19, 1*challan[2].covid19, 1*challan[3].covid19, 1*challan[4].covid19, 1*challan[5].covid19, 1*challan[6].covid19, 1*challan[7].covid19, 1*challan[8].covid19, 1*challan[9].covid19 ];
                 const others = [1*challan[0].others, 1*challan[1].others, 1*challan[2].others, 1*challan[3].others, 1*challan[4].others, 1*challan[5].others, 1*challan[6].others, 1*challan[7].others, 1*challan[8].others, 1*challan[9].others]
                 
                 this.setState({overloading: overloading});
                 this.setState({drunken: drunken});
                 this.setState({overspeed: overspeed});
                 this.setState({withoutHelmet: withoutHelmet});
                 this.setState({covid19: covid19});
                 this.setState({others: others});

                 var recovery = data.recovery; 
                 recovery.sort(function(a, b) {
                   return a.id - b.id;
                 });
                 this.setState({recovery});
         
                 var ipc = data.ipc; 
                 ipc.sort(function(a, b) {
                   return a.id - b.id;
                 });
                 this.setState({ipc});
         
                 var local = data.local; 
                 local.sort(function(a, b) {
                   return a.id - b.id;
                 });
                 this.setState({local});
                
                 this.setState({flag: true});
                 */