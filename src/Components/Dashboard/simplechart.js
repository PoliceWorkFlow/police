import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './dashboard.css';
import { MenuItem, FormControl, Select} from "@material-ui/core";


class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
            ndps: [2*this.props.Report[0].ndps/5, 2*this.props.Report[1].ndps/5, 2*this.props.Report[2].ndps/5, 2*this.props.Report[3].ndps/5, 2*this.props.Report[4].ndps/5, 2*this.props.Report[5].ndps/5, 2*this.props.Report[6].ndps/5, 2*this.props.Report[7].ndps/5, 2*this.props.Report[8].ndps/5,2*this.props.Report[9].ndps/5 ],
            arm: [1*this.props.Report[0].arm, 1*this.props.Report[1].arm, 1*this.props.Report[2].arm, 1*this.props.Report[3].arm,1*this.props.Report[4].arm, 1*this.props.Report[5].arm, 1*this.props.Report[6].arm, 1*this.props.Report[7].arm, 1*this.props.Report[8].arm, 1*this.props.Report[9].arm],
            excise: [this.props.Report[0].excise/5, this.props.Report[1].excise/5, this.props.Report[2].excise/5, this.props.Report[3].excise/5, this.props.Report[4].excise/5, this.props.Report[5].excise/5, this.props.Report[6].excise/5, this.props.Report[7].excise/5, this.props.Report[8].excise/5, this.props.Report[9].excise/5 ],
            gambling: [this.props.Report[0].gambling/5, this.props.Report[1].gambling/5, this.props.Report[2].gambling/5, this.props.Report[3].gambling/5, this.props.Report[4].gambling/5, this.props.Report[5].gambling/5, this.props.Report[6].gambling/5, this.props.Report[7].gambling/5, this.props.Report[8].gambling/5, this.props.Report[9].gambling/5],
            commercial: [2*this.props.Report[0].commercial, 2*this.props.Report[1].commercial, 2*this.props.Report[2].commercial, 2*this.props.Report[3].commercial, 2*this.props.Report[4].commercial, 2*this.props.Report[5].commercial,2*this.props.Report[6].commercial, 2*this.props.Report[7].commercial, 2*this.props.Report[8].commercial, 2*this.props.Report[9].commercial],
            case_chosen: 'Cases Submitted in Court',
            caseType: ['Cases Submitted in Court', 'Heinous Crime', 'Untraced cases of crime against property', 'Disposal of Complaints', 'Property Disposal', 'PO arrested', 'Untraced Cases put in court', 'Negligence in duty/Public dealing/image', 'Cleaniness of Police Station', 'Handling of Law and Order', 'Scores']
    }
  }

  onCaseTypeChange = (event) => {
    this.setState({case_chosen: event.target.value});
    }
  
  BarGraphChanged = (report) => {
       
   const case_chosen = this.state.case_chosen;
   console.log(report);
   var data = [];

   if(case_chosen === 'Cases Submitted in Court'){
      const cases_in_court= [(report[0].caseincourt)/10, (report[1].caseincourt)/10, (report[2].caseincourt)/10, (report[3].caseincourt)/10, (report[4].caseincourt)/10, (report[5].caseincourt)/10, (report[6].caseincourt)/10, (report[7].caseincourt)/10, (report[8].caseincourt)/10, (report[9].caseincourt)/10];
       data = cases_in_court
   }
   else if(case_chosen === 'Heinous Crime') {
       const henius =  [2*report[0].heniusCrime, 2*report[1].heniusCrime, 2*report[2].heniusCrime, 2*report[3].heniusCrime, 2*report[4].heniusCrime, 2*report[5].heniusCrime, 2*report[6].heniusCrime, 2*report[7].heniusCrime, 2*report[8].heniusCrime, 2*report[9].heniusCrime];
        data = henius 
   }
   else if(case_chosen === 'Untraced cases of crime against property') {
    const untrace_prop = [report[0].propCrime/10, report[1].propCrime/10, report[2].propCrime/10, report[3].propCrime/10, report[4].propCrime/10, report[5].propCrime/10, report[6].propCrime/10, report[7].propCrime/10, report[8].propCrime/10, report[9].propCrime/10 ];
        data = untrace_prop    
   }    
   else if(case_chosen === 'Disposal of Complaints'){
    const disp_comp = [report[0].compDisp/10, report[1].compDisp/10, report[2].compDisp/10, report[3].compDisp/10, report[4].compDisp/10, report[5].compDisp/10, report[6].compDisp/10, report[7].compDisp/10, report[8].compDisp/10, report[9].compDisp/10 ];
        data = disp_comp
   }  
   else if(case_chosen === 'Property Disposal') {
    const prop_disp= [report[0].propDisp/10, report[1].propDisp/10, report[2].propDisp/10, report[3].propDisp/10, report[4].propDisp/10, report[5].propDisp/10, report[6].propDisp/10, report[7].propDisp/10, report[8].propDisp/10, report[9].propDisp/10];
        data = prop_disp
   }
   else if(case_chosen === 'PO arrested') {
    const po_arrested = [2*report[0].POarrested, 2*report[1].POarrested, 2*report[2].POarrested, 2*report[3].POarrested, 2*report[4].POarrested, 2*report[5].POarrested, 2*report[6].POarrested, 2*report[7].POarrested, 2*report[8].POarrested, 2*report[9].POarrested];
        data = po_arrested
   }
   else if(case_chosen === 'Untraced Cases put in court') {
     const untrace_cases =  [report[0].untraceInCourt/5, report[1].untraceInCourt/5, report[2].untraceInCourt/5, report[3].untraceInCourt/5, report[4].untraceInCourt/5, report[5].untraceInCourt/5, report[6].untraceInCourt/5, report[7].untraceInCourt/5, report[8].untraceInCourt/5, report[9].untraceInCourt/5];
        data = untrace_cases
   }
   else if(case_chosen === 'Negligence in duty/Public dealing/image') {
     const feedback =[1*report[0].feedback, 1*report[1].feedback, 1*report[2].feedback, 1*report[3].feedback, 1*report[4].feedback, 1*report[5].feedback, 1*report[6].feedback, 1*report[7].feedback, 1*report[8].feedback, 1*report[9].feedback ];
        data = feedback 
   }
   else if(case_chosen === 'Cleaniness of Police Station') {
    const clean = [1*report[0].cleaniness, 1*report[1].cleaniness, 1*report[2].cleaniness, 1*report[3].cleaniness, 1*report[4].cleaniness, 1*report[5].cleaniness, 1*report[6].cleaniness, 1*report[7].cleaniness, 1*report[8].cleaniness, 1*report[9].cleaniness ];
        data = clean
   }
   else if(case_chosen === 'Scores'){    
      const scores = [1*report[0].score, 1*report[1].score, 1*report[2].score, 1*report[3].score,1*report[4].score, 1*report[5].score, 1*report[6].score, 1*report[7].score, 1*report[8].score, 1*report[9].score];
          data = scores
   }
   else  {                                         // Handling
      const handling = [1*report[0].handling, 1*report[1].handling, 1*report[2].handling, 1*report[3].handling, 1*report[4].handling, 1*report[5].handling, 1*report[6].handling, 1*report[7].handling, 1*report[8].handling, 1*report[9].handling ];
       data = handling

   }

   const chartData = {
    labels: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib',
      'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'
      ],

    datasets:[
      {
        label: case_chosen,
        data: data,

        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 15, 86, 0.6)',
          'rgba(255, 206, 236, 0.6)',
          'rgba(135, 206, 86, 0.6)',
        ],
        borderColor :[
            'rgba(255, 255, 255, 1)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 15, 86, 0.6)',
            'rgba(255, 206, 236, 0.6)',
            'rgba(135, 206, 86, 0.6)',
        ]
       }
      ]
    }

    return chartData
  }  

 /* static defaultProps = {
    displayTitle : true,
    displayLegend: true,
    legendPosition:'right',
    heading : 'heading',
  }*/

   render(){

    return (
      <div className="chart">
        <div className="bar">
          <FormControl className="dash_dropdown" style={{minWidth: 100}}>  
                    <Select variant="outlined" onChange={this.onCaseTypeChange} value={this.state.case_chosen} >
                     { this.state.caseType.map((cases) => (
                        <MenuItem value = {cases}> {cases} </MenuItem>
                        ))}
                    </Select>
           </FormControl>
        <div style = {{paddingTop: '10px'}}>      
         <Bar 
          data={this.BarGraphChanged(this.props.Report)}
          height = {325}
          options={{
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
             },
            title:{
              display:this.props.date,
              text: this.props.date,
              fontSize:15
            }
          }}
        />
         </div>
        </div>
      </div>
    )
  }
}

export default Chart;


/*

  <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:this.props.heading,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:this.props.heading,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

  */