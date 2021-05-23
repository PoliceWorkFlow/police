import React, {Component} from 'react';
import {Bar, Pie} from 'react-chartjs-2';
import './dashboard.css';
import 'chartjs-plugin-datalabels';
import { MenuItem, FormControl, Select, Paper} from "@material-ui/core";


class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
            case_chosen1: 'Cases Submitted in Court',
            case_chosen2: 'Negligence in duty/Public dealing/image',
            caseType1: ['Cases Submitted in Court', 'Heinous Crime', 'Untraced cases of crime against property', 'Disposal of Complaints', 'Property Disposal', 'PO arrested', 'Untraced Cases put in court', 'Scores'],
            caseType2: ['Negligence in duty/Public dealing/image', 'Cleaniness of Police Station', 'Handling of Law and Order', 'NDPS Act', 'Arm Act', 'Commercial Recovery', 'Excise Act', 'Gambling Act']
    }
  }

  onCaseTypeChange1 = (event) => {
    this.setState({case_chosen1: event.target.value});
    }

  onCaseTypeChange2 = (event) => {
      this.setState({case_chosen2: event.target.value});
      }
   

  BarGraphChanged1 = (report) => {
       
   const case_chosen = this.state.case_chosen1;
   //console.log(report);
   var data = [];

   if(case_chosen === 'Cases Submitted in Court'){
      const cases_in_court= [(report[0].caseincourt), (report[1].caseincourt), (report[2].caseincourt), (report[3].caseincourt), (report[4].caseincourt), (report[5].caseincourt), (report[6].caseincourt), (report[7].caseincourt), (report[8].caseincourt), (report[9].caseincourt)];
       data = cases_in_court
   }
   else if(case_chosen === 'Heinous Crime') {
       const henius =  [report[0].heniusCrime, report[1].heniusCrime, report[2].heniusCrime, report[3].heniusCrime, report[4].heniusCrime, report[5].heniusCrime, report[6].heniusCrime, report[7].heniusCrime, report[8].heniusCrime, report[9].heniusCrime];
        data = henius 
   }
   else if(case_chosen === 'Untraced cases of crime against property') {
    const untrace_prop = [report[0].propCrime, report[1].propCrime, report[2].propCrime, report[3].propCrime, report[4].propCrime, report[5].propCrime, report[6].propCrime, report[7].propCrime, report[8].propCrime, report[9].propCrime ];
        data = untrace_prop    
   }    
   else if(case_chosen === 'Disposal of Complaints'){
    const disp_comp = [report[0].compDisp, report[1].compDisp, report[2].compDisp, report[3].compDisp, report[4].compDisp, report[5].compDisp, report[6].compDisp, report[7].compDisp, report[8].compDisp, report[9].compDisp ];
        data = disp_comp
   }  
   else if(case_chosen === 'Property Disposal') {
    const prop_disp= [report[0].propDisp, report[1].propDisp, report[2].propDisp, report[3].propDisp, report[4].propDisp, report[5].propDisp, report[6].propDisp, report[7].propDisp, report[8].propDisp, report[9].propDisp];
        data = prop_disp
   }
   else if(case_chosen === 'PO arrested') {
    const po_arrested = [report[0].POarrested, report[1].POarrested, report[2].POarrested, report[3].POarrested, report[4].POarrested, report[5].POarrested, report[6].POarrested, report[7].POarrested, report[8].POarrested, report[9].POarrested];
        data = po_arrested
   }
   else if(case_chosen === 'Untraced Cases put in court') {
     const untrace_cases =  [report[0].untraceInCourt, report[1].untraceInCourt, report[2].untraceInCourt, report[3].untraceInCourt, report[4].untraceInCourt, report[5].untraceInCourt, report[6].untraceInCourt, report[7].untraceInCourt, report[8].untraceInCourt, report[9].untraceInCourt];
        data = untrace_cases
   }
   else if(case_chosen === 'Scores'){    
    const scores = [1*report[0].score, 1*report[1].score, 1*report[2].score, 1*report[3].score,1*report[4].score, 1*report[5].score, 1*report[6].score, 1*report[7].score, 1*report[8].score, 1*report[9].score];
        data = scores
  }

   const chartData = {
    labels: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'],
    // labels: ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10'],
      options: {
        plugins: {
          datalabels: {
            color: 'white',
            display: function(context) {
              return context.dataset.data[context.dataIndex] > 15;
            },
            font: {
              weight: 'bold'
            },
            formatter: Math.round
          }
        }
      },  

    datasets:[
      {
        label: case_chosen,
        data: data,
        backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 15, 86, 0.5)',
          'rgba(255, 206, 236, 0.5)',
          'rgba(135, 206, 86, 0.5)',
        ],
        borderColor :[
          'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 15, 86, 1)',
            'rgba(255, 206, 236, 1)',
            'rgba(135, 206, 86, 1)',
        ],
        borderWidth: 1,
       }
      ]
    }

    return chartData
  }  
   
  BarGraphChanged2 = (report) => {
       
    const case_chosen = this.state.case_chosen2;
    //console.log(report);
    var data = [];
 
   if(case_chosen === 'NDPS Act')  {                                         
     const ndps= [report[0].ndps, report[1].ndps, report[2].ndps, report[3].ndps, report[4].ndps, report[5].ndps, report[6].ndps, report[7].ndps, report[8].ndps,report[9].ndps ];
       data = ndps
   }
   else if(case_chosen === 'Arm Act')  {                                         
    const arm = [1*report[0].arm, 1*report[1].arm, 1*report[2].arm, 1*report[3].arm,1*report[4].arm, 1*report[5].arm, 1*report[6].arm, 1*report[7].arm, 1*report[8].arm, 1*report[9].arm];
        data = arm
    }
    else if(case_chosen === 'Commercial Recovery')  {                                         
      const commercial = [report[0].commercial, report[1].commercial, report[2].commercial, report[3].commercial, report[4].commercial, report[5].commercial,report[6].commercial, report[7].commercial, report[8].commercial, report[9].commercial];
      data = commercial
    }
    else if(case_chosen === 'Excise Act')  {                                        
      const excise = [report[0].excise, report[1].excise, report[2].excise, report[3].excise, report[4].excise, report[5].excise, report[6].excise, report[7].excise, report[8].excise, report[9].excise ];
      data = excise
    }
    else if(case_chosen === 'Gambling Act')  {                                         
      const gambling= [report[0].gambling, report[1].gambling, report[2].gambling, report[3].gambling, report[4].gambling, report[5].gambling, report[6].gambling, report[7].gambling, report[8].gambling, report[9].gambling];
      data = gambling
    }
 
    const chartData = {
     labels: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'],
    //labels:  ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10'],
     datasets:[
       {
         label: case_chosen,
         data: data,
 
         backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 15, 86, 0.5)',
          'rgba(255, 206, 236, 0.5)',
          'rgba(135, 206, 86, 0.5)',
        ],
        borderColor :[
          'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 15, 86, 1)',
            'rgba(255, 206, 236, 1)',
            'rgba(135, 206, 86, 1)',
        ],
        borderWidth: 1,
        }
       ]
     }
 
     return chartData
   } 
  
  PieGraphChanged = (report) => {
    const case_chosen = this.state.case_chosen2;
    var data = [];
    
    if(case_chosen === 'Negligence in duty/Public dealing/image') {
      const feedback =[1*report[0].feedback, 1*report[1].feedback, 1*report[2].feedback, 1*report[3].feedback, 1*report[4].feedback, 1*report[5].feedback, 1*report[6].feedback, 1*report[7].feedback, 1*report[8].feedback, 1*report[9].feedback ];
         data = feedback 
    }
    else if(case_chosen === 'Cleaniness of Police Station') {
     const clean = [1*report[0].cleaniness, 1*report[1].cleaniness, 1*report[2].cleaniness, 1*report[3].cleaniness, 1*report[4].cleaniness, 1*report[5].cleaniness, 1*report[6].cleaniness, 1*report[7].cleaniness, 1*report[8].cleaniness, 1*report[9].cleaniness ];
         data = clean
    }
    else if(case_chosen === 'Handling of Law and Order')  {                                        
       const handling = [1*report[0].handling, 1*report[1].handling, 1*report[2].handling, 1*report[3].handling, 1*report[4].handling, 1*report[5].handling, 1*report[6].handling, 1*report[7].handling, 1*report[8].handling, 1*report[9].handling ];
        data = handling
    }

    const chartData = {
      labels: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib','Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'],
     // labels:  ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10'],
      datasets:[
        {
          label: case_chosen,
          data: data,
  
          backgroundColor:[
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 15, 86, 0.5)',
            'rgba(255, 206, 236, 0.5)',
            'rgba(135, 206, 86, 0.5)',
          ],
          borderColor :[
            'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 15, 86, 1)',
              'rgba(255, 206, 236, 1)',
              'rgba(135, 206, 86, 1)',
          ],
          borderWidth: 1,
         }
        ]
      }
  
      return chartData

  } 

   render(){

    if(this.props.flag === 1){
    return (
      <div className="chart">
        <div className="bar">
          <FormControl className="dash_dropdown" style={{minWidth: 100}}>  
                    <Select variant="outlined" onChange={this.onCaseTypeChange1} value={this.state.case_chosen1} >
                     { this.state.caseType1.map((cases) => (
                        <MenuItem value = {cases}> {cases} </MenuItem>
                        ))}
                    </Select>
           </FormControl>
        <div style = {{paddingTop: '10px'}}>
          <div style={{width: "400px"}}>
          <Paper>   
          <Bar 
            data={this.BarGraphChanged1(this.props.Report)}
            height = {360}
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
              },
              plugins: {
                datalabels: {
                  color: 'white',
                  font: {
                    weight: 'bold'
                  },
                  formatter: Math.round
                }
              }
            }}
          />
         </Paper>  
         </div>
         </div>
        </div>
      </div>
    )
    }

    else{
      return (
        <div className="chart">
          <div className="bar">
            <FormControl className="dash_dropdown" style={{minWidth: 100}}>  
                      <Select variant="outlined" onChange={this.onCaseTypeChange2} value={this.state.case_chosen2} >
                       { this.state.caseType2.map((cases) => (
                          <MenuItem value = {cases}> {cases} </MenuItem>
                          ))}
                      </Select>
             </FormControl>
          <div style = {{paddingTop: '10px'}}>  
          <div style={{width: "400px"}}>
          <Paper>
          {  
           this.state.case_chosen2 === 'Negligence in duty/Public dealing/image' || this.state.case_chosen2 === 'Cleaniness of Police Station' || this.state.case_chosen2 === 'Handling of Law and Order'
           ?  
            <Pie
            data={this.PieGraphChanged(this.props.Report)}
            height = {360}
            options={{
              title:{
                display:this.props.date,
                text: this.props.date,
                fontSize:15
              }
            }}
          />
           :  
            <Bar 
              data={this.BarGraphChanged2(this.props.Report)}
              height = {360}
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
          }
          </Paper>
          </div>
           </div>
          </div>
        </div>
      )
    }
  }

}

export default Chart;

