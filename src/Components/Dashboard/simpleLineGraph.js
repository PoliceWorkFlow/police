import React, {Component} from 'react';
import {Bar,Pie, Line} from 'react-chartjs-2';
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
   var data = [];
   const labels = [];

   for(let i = 0; i<report.length; i++)
      labels.push(report[i].monYear)

   if(case_chosen === 'Cases Submitted in Court'){
      const cases_in_court= [];
       for(let i = 0; i<report.length; i++)
          cases_in_court.push((report[i].caseincourt)/10)
       
     // const cases_in_court= [(report[0].caseincourt)/10, (report[1].caseincourt)/10, (report[2].caseincourt)/10, (report[3].caseincourt)/10, (report[4].caseincourt)/10, (report[5].caseincourt)/10, (report[6].caseincourt)/10, (report[7].caseincourt)/10, (report[8].caseincourt)/10, (report[9].caseincourt)/10];
       data = cases_in_court
   }
   else if(case_chosen === 'Heinous Crime') {
       const henius = [];
       for(let i = 0; i<report.length; i++)
        henius.push(2*report[i].heniusCrime)
     
       //  [2*report[0].heniusCrime, 2*report[1].heniusCrime, 2*report[2].heniusCrime, 2*report[3].heniusCrime, 2*report[4].heniusCrime, 2*report[5].heniusCrime, 2*report[6].heniusCrime, 2*report[7].heniusCrime, 2*report[8].heniusCrime, 2*report[9].heniusCrime];
        data = henius 
   }
   else if(case_chosen === 'Untraced cases of crime against property') {
      const untrace_prop = [];
      for(let i = 0; i<report.length; i++)
        untrace_prop.push(report[i].propCrime/10)
    //[report[0].propCrime/10, report[1].propCrime/10, report[2].propCrime/10, report[3].propCrime/10, report[4].propCrime/10, report[5].propCrime/10, report[6].propCrime/10, report[7].propCrime/10, report[8].propCrime/10, report[9].propCrime/10 ];
        data = untrace_prop    
   }    
   else if(case_chosen === 'Disposal of Complaints'){
    const disp_comp = [];
    for(let i = 0; i<report.length; i++)
        disp_comp.push(report[i].compDisp/10)
    //[report[0].compDisp/10, report[1].compDisp/10, report[2].compDisp/10, report[3].compDisp/10, report[4].compDisp/10, report[5].compDisp/10, report[6].compDisp/10, report[7].compDisp/10, report[8].compDisp/10, report[9].compDisp/10 ];
        data = disp_comp
   }  
   else if(case_chosen === 'Property Disposal') {
    const prop_disp= [];
    for(let i = 0; i<report.length; i++)
        prop_disp.push(report[i].propDisp/10)
    //[report[0].propDisp/10, report[1].propDisp/10, report[2].propDisp/10, report[3].propDisp/10, report[4].propDisp/10, report[5].propDisp/10, report[6].propDisp/10, report[7].propDisp/10, report[8].propDisp/10, report[9].propDisp/10];
        data = prop_disp
   }
   else if(case_chosen === 'PO arrested') {
    const po_arrested = [];
    for(let i = 0; i<report.length; i++)
        po_arrested.push(2*report[i].POarrested)
    //[2*report[0].POarrested, 2*report[1].POarrested, 2*report[2].POarrested, 2*report[3].POarrested, 2*report[4].POarrested, 2*report[5].POarrested, 2*report[6].POarrested, 2*report[7].POarrested, 2*report[8].POarrested, 2*report[9].POarrested];
        data = po_arrested
   }
   else if(case_chosen === 'Untraced Cases put in court') {
     const untrace_cases = [];
     for(let i = 0; i<report.length; i++)
        untrace_cases.push(report[i].untraceInCourt/5)
     // [report[0].untraceInCourt/5, report[1].untraceInCourt/5, report[2].untraceInCourt/5, report[3].untraceInCourt/5, report[4].untraceInCourt/5, report[5].untraceInCourt/5, report[6].untraceInCourt/5, report[7].untraceInCourt/5, report[8].untraceInCourt/5, report[9].untraceInCourt/5];
        data = untrace_cases
   }
  

   const chartData = {
    labels: labels,
    options: {
    plugins: {
      datalabels: {
         display: true,
         color: 'black'
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
  
  LineGraphChanged1 = (report) => {
    const case_chosen = this.state.case_chosen1;
    var data = [];
    const labels = [];

    for(let i = 0; i<report.length; i++)
      labels.push(report[i].monYear)

    if(case_chosen === 'Scores'){    
      const scores = [];
      for(let i = 0; i<report.length; i++)
          scores.push(1*report[i].score)
          data = scores
       }
     
    const chartData = {
      labels : labels,
       datasets : [
             {
                label : "Scores",
                data  : data,
                fill : true,
                borderColor : 'rgba(135, 206, 86, 0.6)',
                lineTension : 0.1,
                backgroundColor :  'rgba(0, 0.7, 0, 0.05)'

             },
            ],
         options : {
           responsive :true,
             title: {
                 display: true,
                 text: 'PROGRESS OF MARKS'
             }
         }
      }
    return chartData
  }
   
  BarGraphChanged2 = (report) => {
       
    const case_chosen = this.state.case_chosen2;
    //console.log(report);
    var data = [];
    const labels = [];

   for(let i = 0; i<report.length; i++)
      labels.push(report[i].monYear)
 
    if(case_chosen === 'Negligence in duty/Public dealing/image') {
      const feedback = [];
      for(let i = 0; i<report.length; i++)
          feedback.push(1*report[i].feedback)
      data = feedback 
    }
    else if(case_chosen === 'Cleaniness of Police Station') {
     const clean = [];
     for(let i = 0; i<report.length; i++)
          clean.push(1*report[i].cleaniness)
      data = clean
    }
    else if(case_chosen === 'Handling of Law and Order')  {                                        
       const handling = [];
       for(let i = 0; i<report.length; i++)
          handling.push(1*report[i].handling)
        data = handling
    }
    else if(case_chosen === 'NDPS Act')  {                                         
     const ndps=[];
     for(let i = 0; i<report.length; i++)
          ndps.push(2*report[i].ndps/5)
       data = ndps
   }
   else if(case_chosen === 'Arm Act')  {                                         
    const arm = [];
    for(let i = 0; i<report.length; i++)
          arm.push(1*report[i].arm)
        data = arm
    }
    else if(case_chosen === 'Commercial Recovery')  {                                         
      const commercial = [];
      for(let i = 0; i<report.length; i++)
          commercial.push(2*report[i].commercial)
      data = commercial
    }
    else if(case_chosen === 'Excise Act')  {                                        
      const excise = []
      for(let i = 0; i<report.length; i++)
          excise.push(report[i].excise/5)
      data = excise
    }
    else if(case_chosen === 'Gambling Act')  {                                         
      const gambling= [];
      for(let i = 0; i<report.length; i++)
          gambling.push(report[i].gambling/5)
      data = gambling
    }
 
    const chartData = {
     labels:  labels,
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
    const labels = [];

   for(let i = 0; i<report.length; i++)
      labels.push(report[i].monYear)
 
    if(case_chosen === 'Negligence in duty/Public dealing/image') {
      const feedback = [];
      for(let i = 0; i<report.length; i++)
          feedback.push(1*report[i].feedback)
      data = feedback 
    }
    else if(case_chosen === 'Cleaniness of Police Station') {
     const clean = [];
     for(let i = 0; i<report.length; i++)
          clean.push(1*report[i].cleaniness)
      data = clean
    }
    else if(case_chosen === 'Handling of Law and Order')  {                                        
       const handling = [];
       for(let i = 0; i<report.length; i++)
          handling.push(1*report[i].handling)
        data = handling
    }

    const chartData = {
      labels: labels,
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

    return (
      <div className="chart">
        <div className="line">
        <div class="row" > 
        <div class="column">  
          <FormControl className="dash_dropdown" style={{minWidth: 100}}>  
                    <Select variant="outlined" onChange={this.onCaseTypeChange1} value={this.state.case_chosen1} >
                     { this.state.caseType1.map((cases) => (
                        <MenuItem value = {cases}> {cases} </MenuItem>
                        ))}
                    </Select>
           </FormControl>
        <div style = {{paddingTop: '10px'}}>
          <Paper>  
          {  
          this.state.case_chosen1 === 'Scores'
          ?
            <Line
            data={this.LineGraphChanged1(this.props.report)}
            height = {200}
            options={{
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
              }
            }}
            />
          :
            <Bar
            data={this.BarGraphChanged1(this.props.report)}
            height = {200}
            options={{
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
              }
            }}
            />
          }
         </Paper> 
         </div>
         </div>

         <div class="column">  
          <FormControl className="dash_dropdown" style={{minWidth: 100}}>  
                    <Select variant="outlined" onChange={this.onCaseTypeChange2} value={this.state.case_chosen2} >
                     { this.state.caseType2.map((cases) => (
                        <MenuItem value = {cases}> {cases} </MenuItem>
                        ))}
                    </Select>
           </FormControl>
        <div style = {{paddingTop: '10px'}}>
          <Paper>
          {  
           this.state.case_chosen2 === 'Negligence in duty/Public dealing/image' || this.state.case_chosen2 === 'Cleaniness of Police Station' || this.state.case_chosen2 === 'Handling of Law and Order'
           ?  
              <Pie
              data={this.PieGraphChanged(this.props.report)}
              height = {200}
              
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
          data={this.BarGraphChanged2(this.props.report)}
          height = {200}
          options={{
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
            },
            plugins: {
              datalabels: {
                 display: true,
                 color: 'black'
              }
             }
          }}
          />
        }
         </Paper> 
         </div>
         </div>

        </div>

      </div>
      </div>
    )
    }
 
  }


export default Chart;


/*
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