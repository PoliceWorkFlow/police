import React from 'react';
import { Grid, RadioGroup, FormControlLabel, Radio, Paper} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import GroupChart from './group_chart';
import Stacked from './stacked_graph_ps'
import 'tachyons';
import Table from './table3';

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
            case_chosen2: 'Cancellation/Untraced',
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
         }
    }

    componentDidMount() { 
      var token = sessionStorage.getItem('jwtToken');
      fetch(this.props.link + '/api/extractDetails', {
      method: 'post',
      headers: {'Content-Type': 'application/json', 'jwttoken': token},
      body: JSON.stringify({
        monYear: this.state.selectedDate
        })
       })
      .then(response => response.json())
      .then(data => { 
        
        if(data.auth === false)
           alert('Problem in Authorization!!!\nKindly do it again!!')
        else{    
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

        }
        })   

    }


    onCaseTypeChange = (event) => {
        this.setState({case_chosen: event.target.value});
    }

    handleChange1 = e => {
      this.setState({case_chosen: e.target.value})
    }

    handleChange2 = e => {
      this.setState({case_chosen2: e.target.value})
    }

    handleDateChange = (date) => {          
          const monYear = this.state.months[date.getMonth()] + ' ' + date.getFullYear();
          const monthCurr = this.state.months[new Date().getMonth()] + ' ' + new Date().getFullYear();
    
           if(monthCurr.split(' ')[1] < monYear.split(' ')[1])
               alert('You have entered wrong Year!!!!')
     
           else if(monthCurr.split(' ')[1] === monYear.split(' ')[1] &&  this.state.months.indexOf(monthCurr.split(' ')[0]) < this.state.months.indexOf(monYear.split(' ')[0]))
              alert('You have entered wrong month!!!!')
          
         else{
          this.setState({selectedDate: monYear})
        var token = sessionStorage.getItem('jwtToken');
        fetch(this.props.link + '/api/extractDetails', {
				method: 'post',
				headers: {'Content-Type': 'application/json', 'jwttoken': token},
				body: JSON.stringify({
					monYear: monYear
			  	})
		   	})
		  	.then(response => response.json())
		  	.then(data => { 
          
          if(data.auth === false)
             alert('Problem in Authorization!!!\nKindly do it again!!')
          else{    
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
          }
          })   
        }
    }

    render(){
       return(
          <div>
            <h3 style={{paddingBottom:'20px'}}>Comparative analysis based on Monthly Report</h3>

             <div className='center pb3'>
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
             </div> 
             <Grid container>
            
              <Grid item xs={12}>
                <div className='pl6'>
                 <RadioGroup row onChange={this.handleChange1} value={this.state.case_chosen}>
                    <FormControlLabel value= "Under Investigation" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.9rem' }}>Under Investigation</span>}/>
                    <FormControlLabel value= "Under Investigation Over 1 Year" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.9rem' }}>Under Investigation Over 1 Year</span>}/>
                    <FormControlLabel value= "Under Investigation Over 6 Month" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.9rem' }}>Under Investigation Over 6 Month</span>}/>
                </RadioGroup>
                </div>
                </Grid>
                <Grid item xs={6}>
                <Paper className='pa2 mr2'>
                  {this.state.ipc.length === 0 || this.state.local.length === 0 
                      ?  <p></p>
                      :
                      <GroupChart ipc={this.state.ipc} local={this.state.local} case_chosen={this.state.case_chosen} />
                  }
                  </Paper>
                  </Grid>
                <Grid item xs={6}>
                 {  this.state.ipc.length === 0 || this.state.local.length === 0 
                     ?  <p></p>
                     :
                      <Table ipc={this.state.ipc} local={this.state.local} case_chosen={this.state.case_chosen} />
                 }
                  </Grid>

                <div className='pt4'>
                  
                <Grid item xs={12}>  
                <RadioGroup row onChange={this.handleChange2} value={this.state.case_chosen2}>
                    <FormControlLabel value= "Cancellation/Untraced" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.8rem' }}>Cancellation/Untraced</span>}/>
                    <FormControlLabel value= "Under Investigation Over 3 Month" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.8rem' }}>Under Investigation Over 3 Month</span>}/>
                    <FormControlLabel value= "Under Investigation less than 3 month" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.8rem' }}>Under Investigation less than 3 month</span>}/>
                    <FormControlLabel value= "Challan Cases" name='graph' control = {<Radio/>} label={<span style={{ fontSize: '.8rem' }}>Challan Cases</span>}/>
                </RadioGroup>
                </Grid>
                </div>
              
               <Grid item xs={6}>
              
                <Paper className='pa2 mr2'>
                {
                   this.state.case_chosen2 === 'Challan Cases' && this.state.challan.length !== 0
                   ? <div className='center'>
                     <Stacked challan={this.state.challan} />
                     </div>
                   :  
                   this.state.ipc.length === 0 || this.state.local.length === 0 
                    ?  <p></p>
                    :
                    <GroupChart ipc={this.state.ipc} local={this.state.local} case_chosen={this.state.case_chosen2} />
                }
              </Paper>
              </Grid>
              <Grid item xs={6}>
                 { this.state.ipc.length === 0 || this.state.local.length === 0 || this.state.challan.length === 0
                     ?  <p></p>
                     :
                      <Table ipc={this.state.ipc} local={this.state.local} challan={this.state.challan} case_chosen={this.state.case_chosen2}/>
                   }
                  </Grid>
            
             </Grid>
  
           </div > 
        );
    }

}

export default StackedChart;


                
     