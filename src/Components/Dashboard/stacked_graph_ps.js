import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class StackedBarChart extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            overloading : [1*this.props.challan[0].overloading, 1*this.props.challan[1].overloading, 1*this.props.challan[2].overloading, 1*this.props.challan[3].overloading, 1*this.props.challan[4].overloading, 1*this.props.challan[5].overloading, 1*this.props.challan[6].overloading, 1*this.props.challan[7].overloading, 1*this.props.challan[8].overloading, 1*this.props.challan[9].overloading ],
            drunken: [1*this.props.challan[0].drunken, 1*this.props.challan[1].drunken, 1*this.props.challan[2].drunken, 1*this.props.challan[3].drunken, 1*this.props.challan[4].drunken, 1*this.props.challan[5].drunken, 1*this.props.challan[6].drunken, 1*this.props.challan[7].drunken, 1*this.props.challan[8].drunken, 1*this.props.challan[9].drunken ],
            overspeed: [1*this.props.challan[0].overspeed, 1*this.props.challan[1].overspeed, 1*this.props.challan[2].overspeed, 1*this.props.challan[3].overspeed, 1*this.props.challan[4].overspeed, 1*this.props.challan[5].overspeed, 1*this.props.challan[6].overspeed, 1*this.props.challan[7].overspeed, 1*this.props.challan[8].overspeed, 1*this.props.challan[9].overspeed ],
            withoutHelmet : [1*this.props.challan[0].withoutHelmet, 1*this.props.challan[1].withoutHelmet, 1*this.props.challan[2].withoutHelmet, 1*this.props.challan[3].withoutHelmet, 1*this.props.challan[4].withoutHelmet, 1*this.props.challan[5].withoutHelmet, 1*this.props.challan[6].withoutHelmet, 1*this.props.challan[7].withoutHelmet, 1*this.props.challan[8].withoutHelmet, 1*this.props.challan[9].withoutHelmet ],
            covid19: [1*this.props.challan[0].covid19, 1*this.props.challan[1].covid19, 1*this.props.challan[2].covid19, 1*this.props.challan[3].covid19, 1*this.props.challan[4].covid19, 1*this.props.challan[5].covid19, 1*this.props.challan[6].covid19, 1*this.props.challan[7].covid19, 1*this.props.challan[8].covid19, 1*this.props.challan[9].covid19 ],
            others: [1*this.props.challan[0].others, 1*this.props.challan[1].others, 1*this.props.challan[2].others, 1*this.props.challan[3].others, 1*this.props.challan[4].others, 1*this.props.challan[5].others, 1*this.props.challan[6].others, 1*this.props.challan[7].others, 1*this.props.challan[8].others, 1*this.props.challan[9].others],
        }
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
                    text: 'CASES'
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
                    name: 'Others',
                    data: this.state.others
                },
                {
                    name: 'Without Helmet/seat belt',
                    data: this.state.withoutHelmet
                },
                {
                    name: 'Overspeed',
                    data: this.state.overspeed
                },
                {
                    name: 'COVID-19',
                    data: this.state.covid19
                },
                {
                    name: 'Drunken Driving',
                    data: this.state.drunken
                },
                { 
                    name: 'Overloading Truckers',
                    data: this.state.overloading
                },            
             ]
          }

         return(
            <div>
                <HighchartsReact
                    highcharts={Highcharts} 
                    options={configObj}
                    containerProps={{ style: { height: "400px", width: "700px" } }}
                 />  
             </div>
            )
      
    }
}

