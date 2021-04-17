import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function setData(challan, type) {
    const result = [];
    var i;

    if(type === 'overloading'){
        for(i=0; i<challan.length; i++)
           result.push(1*challan[i].overloading);
    }
    else if(type === 'drunken'){
        for(i=0; i<challan.length; i++)
           result.push(1*challan[i].drunken);
    }
    else if(type === 'overspeed'){
        for(i=0; i<challan.length; i++)
           result.push(1*challan[i].overspeed);
    }
    else if(type === 'withoutHelmet'){
        for(i=0; i<challan.length; i++)
           result.push(1*challan[i].withoutHelmet);
    }
    else if(type === 'covid19'){
        for(i=0; i<challan.length; i++)
           result.push(1*challan[i].covid19);
    }
    else if(type === 'others'){
        for(i=0; i<challan.length; i++)
           result.push(1*challan[i].others);
    }
    else{
        for(i=0; i<challan.length; i++)
           result.push(challan[i].monYear);
    }

    return result;

}

export default class StackedBarChart extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            overloading: setData(this.props.challan, 'overloading'),
            drunken: setData(this.props.challan, 'drunken'),
            overspeed: setData(this.props.challan, 'overspeed'),
            withoutHelmet: setData(this.props.challan, 'withoutHelmet'),
            covid19: setData(this.props.challan, 'covid19'),
            others: setData(this.props.challan, 'others'),
            categories: setData(this.props.challan, 'month'),
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
                categories: this.state.categories
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
            <div >
                <HighchartsReact
                    highcharts={Highcharts} 
                    options={configObj}
                    containerProps={{ style: { height: "380px", width: "500px" } }}
                 />  
             </div>
            )
      
    }
}

