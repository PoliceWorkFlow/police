import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
//import './c.css';
class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    heading : 'heading',
  }
  

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
   
    this.setState({
        
      chartData:{
        labels: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib',
        'Sri Chamkaur Sahib', 'Sadar Rupanagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'
        ],
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        datasets:[
          {
            label:'Cases',
            data:[14.4, 11, 11.6, 8.8, 9, 7.6, 6.6, 5.2, 8.2, 7.6],
    
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
            ],
            hoverBackgroundColor: [
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 15, 86, 0.6)',
                'rgba(255, 206, 236, 0.6)',
                'rgba(135, 206, 86, 0.6)',
                'rgba(255, 69, 87, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ]
            
          }
        ]
      }
    });
  }


  render(){
    return (
      <div className="chart">
          <div className="bar">
              
        <Bar 
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
        </div>

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
      </div>
    )
  }
}

export default Chart;