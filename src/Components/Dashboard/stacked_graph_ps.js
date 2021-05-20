import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class StackedBarChart extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {}
       }

     configObj = (challan) => {

        const overloading = [1*challan[0].overloading, 1*challan[1].overloading, 1*challan[2].overloading, 1*challan[3].overloading, 1*challan[4].overloading, 1*challan[5].overloading, 1*challan[6].overloading, 1*challan[7].overloading, 1*challan[8].overloading, 1*challan[9].overloading ];
        const drunken = [1*challan[0].drunken, 1*challan[1].drunken, 1*challan[2].drunken, 1*challan[3].drunken, 1*challan[4].drunken, 1*challan[5].drunken, 1*challan[6].drunken, 1*challan[7].drunken, 1*challan[8].drunken, 1*challan[9].drunken ];
        const overspeed= [1*challan[0].overspeed, 1*challan[1].overspeed, 1*challan[2].overspeed, 1*challan[3].overspeed, 1*challan[4].overspeed, 1*challan[5].overspeed, 1*challan[6].overspeed, 1*challan[7].overspeed, 1*challan[8].overspeed, 1*challan[9].overspeed ];
        const withoutHelmet = [1*challan[0].withoutHelmet, 1*challan[1].withoutHelmet, 1*challan[2].withoutHelmet, 1*challan[3].withoutHelmet, 1*challan[4].withoutHelmet, 1*challan[5].withoutHelmet, 1*challan[6].withoutHelmet, 1*challan[7].withoutHelmet, 1*challan[8].withoutHelmet, 1*challan[9].withoutHelmet ];
        const covid19= [1*challan[0].covid19, 1*challan[1].covid19, 1*challan[2].covid19, 1*challan[3].covid19, 1*challan[4].covid19, 1*challan[5].covid19, 1*challan[6].covid19, 1*challan[7].covid19, 1*challan[8].covid19, 1*challan[9].covid19 ];
        const others= [1*challan[0].others, 1*challan[1].others, 1*challan[2].others, 1*challan[3].others, 1*challan[4].others, 1*challan[5].others, 1*challan[6].others, 1*challan[7].others, 1*challan[8].others, 1*challan[9].others];

        const config={
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
                data: others
            },
            {
                name: 'Without Helmet/seat belt',
                data: withoutHelmet
            },
            {
                name: 'Overspeed',
                data: overspeed
            },
            {
                name: 'COVID-19',
                data: covid19
            },
            {
                name: 'Drunken Driving',
                data: drunken
            },
            { 
                name: 'Overloading Truckers',
                data: overloading
            },            
         ]
        }
        return config;
      }

    
    render(){
 
      
         return(
            <div>
                <HighchartsReact
                    highcharts={Highcharts} 
                    options={this.configObj(this.props.challan)}
                    containerProps={{ style: { height: "500px" } }}
                 />  
             </div>
            )
      
    }
}

