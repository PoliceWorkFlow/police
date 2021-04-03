import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './dashboard.css';
import { MenuItem, FormControl, Select} from "@material-ui/core";


class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
            cases_in_court: [(this.props.Report[0].caseincourt)/10, (this.props.Report[1].caseincourt)/10, (this.props.Report[2].caseincourt)/10, (this.props.Report[3].caseincourt)/10, (this.props.Report[4].caseincourt)/10, (this.props.Report[5].caseincourt)/10, (this.props.Report[6].caseincourt)/10, (this.props.Report[7].caseincourt)/10, (this.props.Report[8].caseincourt)/10, (this.props.Report[9].caseincourt)/10],
            prop_disp: [this.props.Report[0].propDisp/10, this.props.Report[1].propDisp/10, this.props.Report[2].propDisp/10, this.props.Report[3].propDisp/10, this.props.Report[4].propDisp/10, this.props.Report[5].propDisp/10, this.props.Report[6].propDisp/10, this.props.Report[7].propDisp/10, this.props.Report[8].propDisp/10, this.props.Report[9].propDisp/10],
            henius: [2*this.props.Report[0].heniusCrime, 2*this.props.Report[1].heniusCrime, 2*this.props.Report[2].heniusCrime, 2*this.props.Report[3].heniusCrime, 2*this.props.Report[4].heniusCrime, 2*this.props.Report[5].heniusCrime, 2*this.props.Report[6].heniusCrime, 2*this.props.Report[7].heniusCrime, 2*this.props.Report[8].heniusCrime, 2*this.props.Report[9].heniusCrime],
            po_arrested: [2*this.props.Report[0].POarrested, 2*this.props.Report[1].POarrested, 2*this.props.Report[2].POarrested, 2*this.props.Report[3].POarrested, 2*this.props.Report[4].POarrested, 2*this.props.Report[5].POarrested, 2*this.props.Report[6].POarrested, 2*this.props.Report[7].POarrested, 2*this.props.Report[8].POarrested, 2*this.props.Report[9].POarrested],
            untrace_prop: [this.props.Report[0].propCrime/10, this.props.Report[1].propCrime/10, this.props.Report[2].propCrime/10, this.props.Report[3].propCrime/10, this.props.Report[4].propCrime/10, this.props.Report[5].propCrime/10, this.props.Report[6].propCrime/10, this.props.Report[7].propCrime/10, this.props.Report[8].propCrime/10, this.props.Report[9].propCrime/10 ],
            untrace_cases: [this.props.Report[0].untraceInCourt/5, this.props.Report[1].untraceInCourt/5, this.props.Report[2].untraceInCourt/5, this.props.Report[3].untraceInCourt/5, this.props.Report[4].untraceInCourt/5, this.props.Report[5].untraceInCourt/5, this.props.Report[6].untraceInCourt/5, this.props.Report[7].untraceInCourt/5, this.props.Report[8].untraceInCourt/5, this.props.Report[9].untraceInCourt/5],
            disp_comp: [this.props.Report[0].compDisp/10, this.props.Report[1].compDisp/10, this.props.Report[2].compDisp/10, this.props.Report[3].compDisp/10, this.props.Report[4].compDisp/10, this.props.Report[5].compDisp/10, this.props.Report[6].compDisp/10, this.props.Report[7].compDisp/10, this.props.Report[8].compDisp/10, this.props.Report[9].compDisp/10 ],
            clean: [1*this.props.Report[0].cleaniness, 1*this.props.Report[1].cleaniness, 1*this.props.Report[2].cleaniness, 1*this.props.Report[3].cleaniness, 1*this.props.Report[4].cleaniness, 1*this.props.Report[5].cleaniness, 1*this.props.Report[6].cleaniness, 1*this.props.Report[7].cleaniness, 1*this.props.Report[8].cleaniness, 1*this.props.Report[9].cleaniness ],
            feedback: [1*this.props.Report[0].feedback, 1*this.props.Report[1].feedback, 1*this.props.Report[2].feedback, 1*this.props.Report[3].feedback, 1*this.props.Report[4].feedback, 1*this.props.Report[5].feedback, 1*this.props.Report[6].feedback, 1*this.props.Report[7].feedback, 1*this.props.Report[8].feedback, 1*this.props.Report[9].feedback ],
            handling: [1*this.props.Report[0].handling, 1*this.props.Report[1].handling, 1*this.props.Report[2].handling, 1*this.props.Report[3].handling, 1*this.props.Report[4].handling, 1*this.props.Report[5].handling, 1*this.props.Report[6].handling, 1*this.props.Report[7].handling, 1*this.props.Report[8].handling, 1*this.props.Report[9].handling ],
            ndps: [2*this.props.Report[0].ndps/5, 2*this.props.Report[1].ndps/5, 2*this.props.Report[2].ndps/5, 2*this.props.Report[3].ndps/5, 2*this.props.Report[4].ndps/5, 2*this.props.Report[5].ndps/5, 2*this.props.Report[6].ndps/5, 2*this.props.Report[7].ndps/5, 2*this.props.Report[8].ndps/5,2*this.props.Report[9].ndps/5 ],
            arm: [1*this.props.Report[0].arm, 1*this.props.Report[1].arm, 1*this.props.Report[2].arm, 1*this.props.Report[3].arm,1*this.props.Report[4].arm, 1*this.props.Report[5].arm, 1*this.props.Report[6].arm, 1*this.props.Report[7].arm, 1*this.props.Report[8].arm, 1*this.props.Report[9].arm],
            excise: [this.props.Report[0].excise/5, this.props.Report[1].excise/5, this.props.Report[2].excise/5, this.props.Report[3].excise/5, this.props.Report[4].excise/5, this.props.Report[5].excise/5, this.props.Report[6].excise/5, this.props.Report[7].excise/5, this.props.Report[8].excise/5, this.props.Report[9].excise/5 ],
            gambling: [this.props.Report[0].gambling/5, this.props.Report[1].gambling/5, this.props.Report[2].gambling/5, this.props.Report[3].gambling/5, this.props.Report[4].gambling/5, this.props.Report[5].gambling/5, this.props.Report[6].gambling/5, this.props.Report[7].gambling/5, this.props.Report[8].gambling/5, this.props.Report[9].gambling/5],
            commercial: [2*this.props.Report[0].commercial, 2*this.props.Report[1].commercial, 2*this.props.Report[2].commercial, 2*this.props.Report[3].commercial, 2*this.props.Report[4].commercial, 2*this.props.Report[5].commercial,2*this.props.Report[6].commercial, 2*this.props.Report[7].commercial, 2*this.props.Report[8].commercial, 2*this.props.Report[9].commercial],
            scores: [1*this.props.Report[0].score, 1*this.props.Report[1].score, 1*this.props.Report[2].score, 1*this.props.Report[3].score,1*this.props.Report[4].score, 1*this.props.Report[5].score, 1*this.props.Report[6].score, 1*this.props.Report[7].score, 1*this.props.Report[8].score, 1*this.props.Report[9].score],
            case_chosen: 'Cases Submitted in Court',
            caseType: ['Cases Submitted in Court', 'Henius Crime', 'Untraced cases of crime against property', 'Disposal of Complaints', 'Property Disposal', 'PO arrested', 'Untraced Cases put in court', 'Negligence in duty/Public dealing/image', 'Cleaniness of Police Station', 'Handling of Law and Order', 'Scores']
    }
  }

  onCaseTypeChange = (event) => {
    this.setState({case_chosen: event.target.value});
    }
  
  BarGraphChanged = () => {
       
   const case_chosen = this.state.case_chosen;
   var data = [];

   if(case_chosen === 'Cases Submitted in Court')
       data = this.state.cases_in_court
   else if(case_chosen === 'Henius Crime') 
        data = this.state.henius 
   else if(case_chosen === 'Untraced cases of crime against property') 
        data = this.state.untrace_prop        
   else if(case_chosen === 'Disposal of Complaints') 
        data = this.state.disp_comp  
   else if(case_chosen === 'Property Disposal') 
        data = this.state.prop_disp
   else if(case_chosen === 'PO arrested') 
        data = this.state.po_arrested
   else if(case_chosen === 'Untraced Cases put in court') 
        data = this.state.untrace_cases
   else if(case_chosen === 'Negligence in duty/Public dealing/image') 
        data = this.state.feedback 
   else if(case_chosen === 'Cleaniness of Police Station') 
        data = this.state.clean
   else if(case_chosen === 'Scores')    
          data = this.state.scores
   else                                           // Handling
       data = this.state.handling

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
          data={this.BarGraphChanged}
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
              display:this.props.display,
              text:'',
              fontSize:25
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