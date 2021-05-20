import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class StackedBarChart extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
         }
      }
    

    ConfigObj = (report) => {
       
        const cases_in_court= [(report[0].caseincourt)/10, (report[1].caseincourt)/10, (report[2].caseincourt)/10, (report[3].caseincourt)/10, (report[4].caseincourt)/10, (report[5].caseincourt)/10, (report[6].caseincourt)/10, (report[7].caseincourt)/10, (report[8].caseincourt)/10, (report[9].caseincourt)/10];
        const  prop_disp= [report[0].propDisp/10, report[1].propDisp/10, report[2].propDisp/10, report[3].propDisp/10, report[4].propDisp/10, report[5].propDisp/10, report[6].propDisp/10, report[7].propDisp/10, report[8].propDisp/10, report[9].propDisp/10];
        const henius= [2*report[0].heniusCrime, 2*report[1].heniusCrime, 2*report[2].heniusCrime, 2*report[3].heniusCrime, 2*report[4].heniusCrime, 2*report[5].heniusCrime, 2*report[6].heniusCrime, 2*report[7].heniusCrime, 2*report[8].heniusCrime, 2*report[9].heniusCrime];
        const po_arrested = [2*report[0].POarrested, 2*report[1].POarrested, 2*report[2].POarrested, 2*report[3].POarrested, 2*report[4].POarrested, 2*report[5].POarrested, 2*report[6].POarrested, 2*report[7].POarrested, 2*report[8].POarrested, 2*report[9].POarrested];
        const untrace_prop = [report[0].propCrime/10, report[1].propCrime/10, report[2].propCrime/10, report[3].propCrime/10, report[4].propCrime/10, report[5].propCrime/10, report[6].propCrime/10, report[7].propCrime/10, report[8].propCrime/10, report[9].propCrime/10 ];
        const  untrace_cases = [report[0].untraceInCourt/5, report[1].untraceInCourt/5, report[2].untraceInCourt/5, report[3].untraceInCourt/5, report[4].untraceInCourt/5, report[5].untraceInCourt/5, report[6].untraceInCourt/5, report[7].untraceInCourt/5, report[8].untraceInCourt/5, report[9].untraceInCourt/5];
        const disp_comp = [report[0].compDisp/10, report[1].compDisp/10, report[2].compDisp/10, report[3].compDisp/10, report[4].compDisp/10, report[5].compDisp/10, report[6].compDisp/10, report[7].compDisp/10, report[8].compDisp/10, report[9].compDisp/10 ];
   
        const configObj = {
            chart: {
                type: 'bar'
            },
    
            title: {
                text: ''
            },
            xAxis: {
                //categories: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']
                categories:  ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'SCORES'
                }
            },
            legend: {
                reversed: true,
            },
            plotOptions: {
                bar: {
                  showInLegend: true,
                },
                series: {
                    stacking: 'normal'
                }
            },
            credits : {
                enabled: false
            },
            series: [
                {
                    name: 'Disposal of Complaints',
                    data: disp_comp
                },
                {
                    name: 'Untraced cases in court',
                    data: untrace_cases
                },
                {
                    name: 'PO arrested ',
                    data: po_arrested
                },
                {
                    name: 'Property Disp ',
                    data: prop_disp
                },
                {
                    name: 'Crime against Property ',
                    data: untrace_prop
                },
                {
                    name: 'Heinous Crime ',
                    data: henius
                },
                { 
                    name: 'Case In Court',
                    data: cases_in_court
                },  
               
             ],
            
        }
       
        return configObj
    
    }

   
    ConfigObj1 = (report) => {

         const clean = [1*report[0].cleaniness, 1*report[1].cleaniness, 1*report[2].cleaniness, 1*report[3].cleaniness, 1*report[4].cleaniness, 1*report[5].cleaniness, 1*report[6].cleaniness, 1*report[7].cleaniness, 1*report[8].cleaniness, 1*report[9].cleaniness ];
          const feedback = [1*report[0].feedback, 1*report[1].feedback, 1*report[2].feedback, 1*report[3].feedback, 1*report[4].feedback, 1*report[5].feedback, 1*report[6].feedback, 1*report[7].feedback, 1*report[8].feedback, 1*report[9].feedback ];
          const handling = [1*report[0].handling, 1*report[1].handling, 1*report[2].handling, 1*report[3].handling, 1*report[4].handling, 1*report[5].handling, 1*report[6].handling, 1*report[7].handling, 1*report[8].handling, 1*report[9].handling ];
          const ndps = [2*report[0].ndps/5, 2*report[1].ndps/5, 2*report[2].ndps/5, 2*report[3].ndps/5, 2*report[4].ndps/5, 2*report[5].ndps/5, 2*report[6].ndps/5, 2*report[7].ndps/5, 2*report[8].ndps/5,2*report[9].ndps/5 ];
          const arm = [1*report[0].arm, 1*report[1].arm, 1*report[2].arm, 1*report[3].arm,1*report[4].arm, 1*report[5].arm, 1*report[6].arm, 1*report[7].arm, 1*report[8].arm, 1*report[9].arm];
          const excise = [report[0].excise/5, report[1].excise/5, report[2].excise/5, report[3].excise/5, report[4].excise/5, report[5].excise/5, report[6].excise/5, report[7].excise/5, report[8].excise/5, report[9].excise/5 ];
          const gambling = [report[0].gambling/5, report[1].gambling/5, report[2].gambling/5, report[3].gambling/5, report[4].gambling/5, report[5].gambling/5, report[6].gambling/5, report[7].gambling/5, report[8].gambling/5, report[9].gambling/5];
          const commercial = [2*report[0].commercial, 2*report[1].commercial, 2*report[2].commercial, 2*report[3].commercial, 2*report[4].commercial, 2*report[5].commercial,2*report[6].commercial, 2*report[7].commercial, 2*report[8].commercial, 2*report[9].commercial];
        
        const configObj1 = {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
               // categories: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']
               categories:  ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'SCORES'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                bar: {
                  showInLegend: true,
                },
                series: {
                    stacking: 'normal'
                }
            },
            credits : {
                enabled: false
            },
            series: [

                {
                    name: 'Gambling',
                    data: gambling,
        
                },
                {
                    name: 'Excise',
                    data: excise
                },
                {
                    name: 'ARM',
                    data: arm
                },
                {
                    name: 'Commercial',
                    data: commercial
                },
                {
                    name: 'NDPS',
                    data: ndps
                },
                {
                    name: 'Public Image & feedback',
                    data: feedback
                },
                {
                    name: 'Handling',
                    data: handling
                },
                {
                    name: 'Cleaniness',
                    data: clean
                },  
             ]
        }

        return configObj1
    }

   /* hideAtrributes = () => {
        let i = 0;

        while (i < configObj1.series.length) {
          if (configObj1.series[i].visible === false) {
            configObj1.series[i].select();
            configObj1.series[i].show();
            i++;
            return;
          }
        }
    }
*/

    render(){
        if(this.props.flag === 1){
            return (
                <div>
                 <HighchartsReact
                            highcharts={Highcharts} 
                            options={this.ConfigObj(this.props.Report)}
                            
                            containerProps={{ style: { height: "430px", width: "450px" }}}
                            //callback={this.highchartsCallback}   
                   />
                  </div> 
            )
        }

        else{
            return(
            <div>
                <HighchartsReact
                    highcharts={Highcharts} 
                    options={this.ConfigObj1(this.props.Report)}  
                    containerProps={{ style: { height: "430px", width: "450px" } }}
        
                    callback={this.highchartsCallback}
                 />
                    
                </div>
            )
        }
        
    }
}
