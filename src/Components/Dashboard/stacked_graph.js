import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class StackedBarChart extends React.Component{
   
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
            commercial: [2*this.props.Report[0].commercial, 2*this.props.Report[1].commercial, 2*this.props.Report[2].commercial, 2*this.props.Report[3].commercial, 2*this.props.Report[4].commercial, 2*this.props.Report[5].commercial,2*this.props.Report[6].commercial, 2*this.props.Report[7].commercial, 2*this.props.Report[8].commercial, 2*this.props.Report[9].commercial]
         }
      }
    
    highchartsCallback(chart) {
        const legendArea = document.querySelector('.legendArea');

        console.log(chart.series);

        chart.series.forEach((item, index)=>{
            const myButton = document.createElement('button');
            myButton.textContent = item.name;
            myButton.style.backgroundColor = item.color;
            myButton.style.height = '25px';
            myButton.style.width = '100px';
            myButton.style.border = 'none';

            if (index > 0) {
                myButton.style.marginLeft = '16px';
            }

            if (index === 1) {
                myButton.style.color = 'white';
            }
            
            myButton.addEventListener('click', ()=>{
                item.setVisible(!item.visible);
                switch (myButton.style.opacity) {
                    case '':
                        return myButton.style.opacity = '0.3';
                    case '0.3':
                        return myButton.style.opacity = '1';
                    case '1':
                        return myButton.style.opacity = '0.3';
                    default:
                        break;
                }
            });

            legendArea.appendChild(myButton);
        })
    }

    render(){
 
        const configObj = {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']
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
                    name: 'Disposal of Complaints',
                    data: this.state.disp_comp
                },
                {
                    name: 'Untraced cases in court',
                    data: this.state.untrace_cases
                },
                {
                    name: 'PO arrested ',
                    data: this.state.po_arrested
                },
                {
                    name: 'Property Disp ',
                    data: this.state.prop_disp
                },
                {
                    name: 'Crime against Property ',
                    data: this.state.untrace_prop
                },
                {
                    name: 'Henius Crime ',
                    data: this.state.henius
                },
                { 
                    name: 'Case In Court',
                    data: this.state.cases_in_court
                },  
               
             ]
        }

        const configObj1 = {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']
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
                    data: this.state.gambling
                },
                {
                    name: 'Excise',
                    data: this.state.excise
                },
                {
                    name: 'ARM',
                    data: this.state.arm
                },
                {
                    name: 'Commercial',
                    data: this.state.commercial
                },
                {
                    name: 'NDPS',
                    data: this.state.ndps
                },
                {
                    name: 'Public Image & feedback',
                    data: this.state.feedback
                },
                {
                    name: 'Handling',
                    data: this.state.handling
                },
                {
                    name: 'Cleaniness',
                    data: this.state.clean
                },  
             ]
        }
        
        if(this.props.flag === 1){
            return (
                <div>
                 <HighchartsReact
                            highcharts={Highcharts} 
                            options={configObj}
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
                    options={configObj1}
                    containerProps={{ style: { height: "430px", width: "450px" } }}
                    //callback={this.highchartsCallback}
                 />
                    
                </div>
            )
        }
        
    }
}
